import { Bell, Search, ChevronDown } from 'lucide-react';
import { useState } from 'react';

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header
      className="rounded-lg sticky top-0 z-30 backdrop-blur-xl bg-white/70 border-b border-slate-200 px-6 py-4"
    >
      <div className="flex items-center justify-between">

        <div className="flex items-center justify-between">

          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Welcome back, Koustav!
            </h1>

            <p className="text-slate-500 mt-1">
              Here’s your workforce overview for today.
            </p>
          </div>

        </div>

        <div className="flex items-center gap-4">

          <button
            className=" relative p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 transition"
          >
            <Bell size={20} className="text-slate-700" />

            <span
              className=" absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"
            />
          </button>

          <div className="relative">

            <button
              onClick={() => setOpenMenu(!openMenu)}
              className=" flex items-center gap-3 bg-slate-100 hover:bg-slate-200 transition px-3 py-2 rounded-2xl"
            >
              <div
                className=" h-10 w-10 rounded-full bg-brand-dark text-white flex items-center justify-center font-bold"
              >
                K
              </div>

              <div className="hidden md:block text-left">
                <p className="text-sm font-semibold text-slate-800">
                  Koustav
                </p>

                <p className="text-xs text-slate-500">
                  Admin
                </p>
              </div>

              <ChevronDown
                size={18}
                className={`
                  text-slate-500
                  transition-transform
                  ${openMenu ? 'rotate-180' : ''}
                `}
              />
            </button>

            {/* Dropdown */}
            {openMenu && (
              <div
                className=" absolute right-0 mt-3 w-52 rounded-2xl bg-white shadow-xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95"
              >
                <button className=" w-full text-left px-4 py-3 hover:bg-slate-100 text-sm">
                  My Profile
                </button>

                <button className=" w-full text-left px-4 py-3 hover:bg-slate-100 text-sm">
                  Settings
                </button>

                <button className=" w-full text-left px-4 py-3 hover:bg-red-50 text-red-500 text-sm">
                  Logout
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;