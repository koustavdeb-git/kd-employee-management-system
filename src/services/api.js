import { supabase } from "../supaBase.js";


// Employee page APIs
export const fetchEmployeesFromSupabase = async (from, to, sorting = []) => {

  const sortColumn = sorting[0]?.id || 'created_at';
  const ascending =
      sorting.length > 0
        ? !sorting[0].desc
        : false;
  const { data, error, count } = await supabase.from('employees').select('*', { count: 'exact' } ).range(from, to).order(sortColumn, { ascending });

  if (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
  
  return { data, count};
};

export const addEmployeeToSupabase = async (employeeData) => {
  const { data, error } = await supabase.from('employees').insert([
    {
      first_name: employeeData.firstName,
      last_name: employeeData.lastName,
      email: employeeData.email,
      phone: employeeData.phone,
      address: employeeData.address,
      gender: employeeData.gender,
      job_role: employeeData.jobRole,
      joining_date: employeeData.joiningDate,
      work_mode: employeeData.workMode,
      emp_status: employeeData.active,
    }
  ])
  .select();

  if (error) {
    console.error('Error adding employee:', error);
    throw error;
  }
  return data[0]; 
}

export const updateEmployeeInSupabase = async (employeeId, updatedData) => {
  const { data, error } = await supabase
    .from('employees')
    .update(updatedData)
    .eq('id', employeeId)
    .select();

  if (error) {
    console.error('Error updating employee:', error);
    throw error;
  }
  return data[0];
};

export const searchEmployeesInSupabase = async (query) => {
  const { data, error } = await supabase
    .from('employees')
    .select('*')
    .or(`first_name.ilike.%${query}%,last_name.ilike.%${query}%,email.ilike.%${query}%,phone.ilike.%${query}%,address.ilike.%${query}%,gender.ilike.%${query}%,job_role.ilike.%${query}%`);
  
  if (error) {
    throw error;
  }
  return data;
};

export const deleteEmployeeFromSupabase = async (employeeId) => {
  const { data, error } = await supabase
    .from('employees')
    .delete()
    .eq('id', employeeId)
    .select();

    if (error) {
      console.error('Error deleting employee:', error);
      throw error;
    }
  return data;
};

//Dashboard page APIs

export const fetchAllEmployeesFromSupabase = async () => {
  const { data, error } = await supabase
  .from('employees')
  .select('*');
  if (error) {
    console.error('Error fetching all employees:', error);
    throw error;
  }
  return data;
}

export const fetchTotalEmployeesFromSupabase = async () => {
  const {count, error} = await supabase
  .from('employees')
  .select('*', { count: 'exact', head: true });

  if (error) {
    console.error('Error fetching total employees:', error);
    throw error;
  }
  return count;
}

export const fetchActiveEmployeesFromSupabase = async () => {
  const {data, count, error} = await supabase
  .from('employees')
  .select('*', { count: 'exact' })
  .eq('emp_status', true);

  if (error) {
    console.error('Error fetching active employees:', error);
    throw error;
  }
  return {data, count};
}

export const fetchInactiveEmployeesFromSupabase = async () => {
  const {data, count, error} = await supabase
  .from('employees')
  .select('*', { count: 'exact' })
  .eq('emp_status', false);

  if (error) {
    console.error('Error fetching inactive employees:', error);
    throw error;
  }
  return {data, count};
}
