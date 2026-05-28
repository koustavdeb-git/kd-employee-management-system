import { useMemo, useState, useEffect } from "react";
import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import EmployeeTable from "../../components/employees/EmployeeTable";
import AddEmployeeModal from "../../components/employees/AddEmployeeModal.jsx";
import EditEmployeeModal from "../../components/employees/EditEmployeeModal.jsx";
import EmployeeDeleteModal from "../../components/employees/EmployeeDeleteModal.jsx";
import { Pencil, Trash2 } from 'lucide-react';
import { fetchEmployeesFromSupabase, addEmployeeToSupabase, searchEmployeesInSupabase, updateEmployeeInSupabase, deleteEmployeeFromSupabase } from "../../services/api.js";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [sorting, setSorting] = useState([]);


  const fetchEmployees = async () => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;

    setLoading(true);
    try {
      const { data, count } = await fetchEmployeesFromSupabase(from, to, sorting);

      const mappedData = (data || []).map(employee => ({
        id: employee.id,
        created_at: employee.created_at,
        first_name: employee.first_name,
        last_name: employee.last_name,
        email: employee.email,
        phone: employee.phone,
        address: {
          address: employee.address,
        },
        gender: employee.gender,
        company: {
          title: employee.job_role,
        },
        joiningDate: employee.joining_date,
        workMode: employee.work_mode,
        active: employee.emp_status,
      }));

      setEmployees(mappedData);
      setTotalCount(count);
      setTotalPages(Math.ceil(count / pageSize));
    } catch (error) {
      console.error('Failed to fetch employees from Supabase:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchEmployees();
  }, [page, pageSize, sorting]);

  const columns = useMemo(
    () => [
      {
        header: "First Name",
        accessorKey: "first_name",
      },
      {
        header: "Last Name",
        accessorKey: "last_name",
      },
      {
        header: "Email",
        accessorKey: "email",
      },
      {
        header: "Phone Number",
        accessorKey: "phone",
      },
      {
        id: "address",
        header: "Address",
        accessorFn: row => row.address?.address ?? "",
      },
      {
        header: "Gender",
        accessorKey: "gender",
      },
      {
        id: "job_role",
        header: "Job Role",
        accessorFn: row => row.company?.title ?? "",
      },
      {
        id: "actions",
        header: "Actions",
        enablesSorting: false,
        cell: ({ row }) => (
          <div className="flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleEdit(row.original)
              }
              }
              className="text-blue-500 hover:underline"
            >
              <Pencil size={16} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedEmployee(row.original);
                setIsDeleteModalOpen(true);
              }}
              className="text-red-500 hover:underline"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ),
      }
    ],
    []
  );

  const table = useReactTable({
    data: employees,
    columns,
    state: {
      sorting
    },
    onSortingChange: setSorting,
    manualSorting: true,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleEmployeeAdded = async (newEmployeeData) => {
    setLoading(true);
    try {
      await addEmployeeToSupabase(newEmployeeData);

      // Refetch from server after adding
      setPage(1);
      const from = 0;
      const to = pageSize - 1;
      const { data, count } = await fetchEmployeesFromSupabase(from, to, sorting);

      const mappedData = (data || []).map(employee => ({
        id: employee.id,
        created_at: employee.created_at,
        first_name: employee.first_name,
        last_name: employee.last_name,
        email: employee.email,
        phone: employee.phone,
        address: {
          address: employee.address,
        },
        gender: employee.gender,
        company: {
          title: employee.job_role,
        },
        joiningDate: employee.joining_date,
        workMode: employee.work_mode,
        active: employee.emp_status,
      }));

      setEmployees(mappedData);
      setTotalCount(count);
      setTotalPages(Math.ceil(count / pageSize));
      setIsModalOpen(false);
    } catch (error) {
      console.error('Failed to add employee:', error);
    }
    setLoading(false);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {

    const timeout = setTimeout(async () => {

      try {

        if (!searchQuery.trim()) {
          await fetchEmployees();
          return;
        }

        const results = await searchEmployeesInSupabase(searchQuery);

        const mappedResults = (results || []).map(employee => ({
          id: employee.id,
          created_at: employee.created_at,
          first_name: employee.first_name,
          last_name: employee.last_name,
          email: employee.email,
          phone: employee.phone,
          address: {
            address: employee.address,
          },
          gender: employee.gender,
          company: {
            title: employee.job_role,
          },
        }));

        setEmployees(mappedResults);

      } catch (error) {
        console.error('Failed to search employees:', error);
      }

    }, 500);

    return () => clearTimeout(timeout);

  }, [searchQuery]);

  const handleEdit = (employee) => {
    setIsEditModalOpen(true);
    setSelectedEmployee(employee);
  }

  const handleEmployeeUpdated = async (updatedEmployeeData) => {
    setLoading(true);
    try {
      await updateEmployeeInSupabase(updatedEmployeeData.id, {
        first_name: updatedEmployeeData.firstName,
        last_name: updatedEmployeeData.lastName,
        email: updatedEmployeeData.email,
        phone: updatedEmployeeData.phone,
        address: updatedEmployeeData.address,
        gender: updatedEmployeeData.gender,
        job_role: updatedEmployeeData.jobRole,
        joining_date: updatedEmployeeData.joiningDate,
        work_mode: updatedEmployeeData.workMode,
        emp_status: updatedEmployeeData.active,
      });

      await fetchEmployees();
      setIsEditModalOpen(false);

    } catch (error) {
      console.error('Failed to update employee:', error);
    } finally {
      setLoading(false);
    }
  }

  const handleDelete = async (employeeId) => {
    setLoading(true);
    try {
      await deleteEmployeeFromSupabase(employeeId);
      await fetchEmployees();

    } catch (error) {
      console.error('Failed to delete employee:', error);
    } finally {
      setLoading(false);
    }
  }


  return (
    <div className="flex flex-col h-full p-6">
      <div className="flex">
        <h1 className="text-2xl font-bold mb-4 text-brand-dark">Employees</h1>

        <input
          type="text"
          placeholder="Search employees..."
          className="ml-auto px-3 py-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}

        ></input>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-brand-dark ml-2 text-white px-4 py-1 mb-2 rounded-lg hover:bg-brand-secondary"
        >
          Add Employee
        </button>
      </div>

      <EmployeeTable table={table} loading={loading} columns={columns} />
      <div className="flex items-center gap-4 mt-4">
        <button
          onClick={() => setPage(prev => prev - 1)}
          disabled={page === 1}
          className="px-4 py-2 border rounded bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => setPage(prev => prev + 1)}
          disabled={page === totalPages}
          className="px-4 py-2 border rounded bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>

      <AddEmployeeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onEmployeeAdded={handleEmployeeAdded}
      />

      <EditEmployeeModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onEmployeeUpdated={handleEmployeeUpdated}
        employee={selectedEmployee}
      />

      <EmployeeDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onDelete={handleDelete}
        employee={selectedEmployee}
      />
    </div>
  );
}

export default Employees;
