import {Route, Routes} from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';
import Employees from '../pages/Employees/Employees';
import Settings from '../pages/Settings/Settings'; 
import AboutApp from '../pages/AboutApp/AboutApp'; 
import Contact from '../pages/Contact/Contact'; 
import MainLayout from '../layouts/MainLayout';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<AboutApp />} />
        <Route path="/support" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
