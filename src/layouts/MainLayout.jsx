import { Outlet } from 'react-router-dom';

import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';

function MainLayout() {
  return (
    <div className="flex h-full gap-3">
      <Sidebar />

      <div className="flex flex-1 flex-col bg-slate-100 rounded-2xl overflow-hidden app-right-panel">
        <Header />

        <main className="flex-1 p-6 overflow-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;