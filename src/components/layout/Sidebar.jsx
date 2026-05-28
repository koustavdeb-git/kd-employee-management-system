import {
  LayoutDashboard,
  Users,
  Settings,
  ChevronRight,
} from 'lucide-react';
import appLogo from '../../assets/images/app_logo3.png';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="  w-72  rounded-3xl  bg-gradient-to-b  from-slate-900  via-slate-800  to-slate-900  text-white  p-6  border  border-white/10  shadow-2xl  flex  flex-col"
    >

      <div>
        <div className="mb-10">
          <img src={appLogo} alt="Logo" className="h-20 w-auto rounded-2xl" />
        </div>

        <nav>
          <ul className="space-y-3">

            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-200 hover:bg-white/10 hover:translate-x-1
                  ${isActive
                    ? 'bg-white/10 border border-white/10 shadow-lg'
                    : ''
                  }`
                }
              >
                <div className="flex items-center gap-3">
                  <LayoutDashboard size={20} />
                  <span>Dashboard</span>
                </div>

                <ChevronRight size={16} />
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/employees"
                className={({ isActive }) => `flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-200 hover:bg-white/10 hover:translate-x-1
                  ${isActive
                    ? 'bg-white/10 border border-white/10 shadow-lg'
                    : ''
                  }
                  `
                }
              >
                <div className="flex items-center gap-3">
                  <Users size={20} />
                  <span>Employees</span>
                </div>

                <ChevronRight size={16} />
              </NavLink>
            </li>

          </ul>
        </nav>
      </div>

      <div className="mt-auto space-y-3">



      </div>

      <div
        className=" rounded-3xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl"
      >
        <div className="flex items-center gap-3">

          <div
            className=" h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold"
          >
            K
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Koustav Deb
            </h3>

            <p className="text-sm text-slate-400">
              Administrator
            </p>
          </div>

        </div>

        <div className="my-4 border-t border-white/10" />

        <div className="space-y-1">

          <NavLink
            to="/about"
            className=" flex items-center justify-between px-3 py-2 rounded-xl hover:bg-white/5 transition-all"
          >
            <span className="text-sm">
              About Application
            </span>

            <span className="text-slate-500">
              →
            </span>
          </NavLink>

          <NavLink
            to="/support"
            className=" flex items-center justify-between px-3 py-2 rounded-xl hover:bg-white/5 transition-all"
          >
            <span className="text-sm">
              Contact Support
            </span>

            <span className="text-slate-500">
              →
            </span>
          </NavLink>

        </div>
      </div>
    </aside>
  );
}

export default Sidebar;