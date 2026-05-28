import { Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import { fetchAllEmployeesFromSupabase, fetchTotalEmployeesFromSupabase, fetchActiveEmployeesFromSupabase, fetchInactiveEmployeesFromSupabase } from '../../services/api.js';
import DepartmentChart from '../../components/dashboard/DepartmentChart.jsx';
import NewJoineeSection from '../../components/dashboard/newJoineeSection.jsx';
import {useNavigate} from 'react-router-dom';

function Dashboard() {
  const [allEmployees, setAllEmployees] = useState([]);

  useEffect(() => {
    const fetchAllEmployees = async () => {
      try {
        const employees = await fetchAllEmployeesFromSupabase();
        setAllEmployees(employees);
      } catch (error) {
        console.error('Failed to fetch all employees:', error);
      }
    };
    fetchAllEmployees();
  }, []);

  const totalEmployees = allEmployees.length;
  const activeEmployees = allEmployees.filter(emp => emp.emp_status === true).length;
  const inactiveEmployees = allEmployees.filter(emp => emp.emp_status === false).length;
  const navigate = useNavigate();

  const groupedDepartments = allEmployees.reduce((acc, employee) => {
    const department = employee.job_role;

    if (!department) return acc;

    if (!acc[department]) {
      acc[department] = 0;
    }

    acc[department]++;

    return acc;
  }, {});

  const departmentData = Object.entries(groupedDepartments).map(
    ([department, employees]) => ({
      department,
      employees,
    })
  );

  const latestJoinees = allEmployees
    .sort((a, b) => new Date(b.joining_date) - new Date(a.joining_date))
    .slice(0, 3);

  return (
    <div className="flex flex-col h-full p-6 bg-gray-100 overflow-auto scrollbar-hide">
      <h2 className="text-2xl font-bold mb-4 text-brand-dark">Dashboard</h2>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          <div onClick={() => navigate('/employees')}
            className="relative overflow-hidden rounded-3xl p-6 shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl bg-gradient-to-br from-blue-300 via-blue-50 to-white-500 text-white cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div
                className="h-16 w-16rounded-2xl bg-transparent flex items-center justify-center"
              >
                <Users
                  size={50}
                  className="text-brand-dark"
                />
              </div>

              <div className="text-right">
                <p className="text-lg text-slate-500 font-medium">
                  Total Employees
                </p>

                <h2 className="text-4xl font-bold text-slate-800 mt-2">
                  {totalEmployees}
                </h2>
              </div>
            </div>
          </div>
          <div
            className="relative overflow-hidden rounded-3xl p-6 shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl bg-gradient-to-br from-blue-300 via-blue-50 to-white-500 text-white cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div
                className="h-16 w-16rounded-2xl bg-transparent flex items-center justify-center"
              >
                <Users
                  size={50}
                  className="text-brand-dark"
                />
              </div>

              <div className="text-right">
                <p className="text-lg text-slate-500 font-medium">
                  Active Employees
                </p>

                <h2 className="text-4xl font-bold text-green-500 mt-2">
                  {activeEmployees}
                </h2>
              </div>
            </div>
          </div>
          <div
            className="relative overflow-hidden rounded-3xl p-6 shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl bg-gradient-to-br from-blue-300 via-blue-50 to-white-500 text-white cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div
                className="h-16 w-16rounded-2xl bg-transparent flex items-center justify-center"
              >
                <Users
                  size={50}
                  className="text-brand-dark"
                />
              </div>

              <div className="text-right">
                <p className="text-lg text-slate-500 font-medium">
                  Inactive Employees
                </p>

                <h2 className="text-4xl font-bold text-red-500 mt-2">
                  {inactiveEmployees}
                </h2>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-6">
          <DepartmentChart data={departmentData} />
        </div>

        <div className="mt-6">
          <NewJoineeSection latestJoinees={latestJoinees} />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
