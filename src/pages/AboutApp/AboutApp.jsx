import {
  LayoutDashboard,
  Users,
  BarChart3,
  ShieldCheck,
  Database,
  Rocket,
  CheckCircle2,
} from 'lucide-react';

function AboutApp() {
  const techStack = [
    'React',
    'Tailwind CSS',
    'React Router',
    'Supabase',
    'PostgreSQL',
    'Recharts',
    'Lucide Icons',
  ];

  const features = [
    {
      icon: LayoutDashboard,
      title: 'Dashboard Analytics',
      description:
        'Dynamically displays employee statistics, department charts, and newly joined employees based on live API responses.',
    },
    {
      icon: Users,
      title: 'Employee Management',
      description:
        'Complete employee CRUD operations with dynamic sorting, server-side pagination, and debounced search functionality.',
    },
    {
      icon: ShieldCheck,
      title: 'Scalable Architecture',
      description:
        'Structured components and reusable frontend architecture.',
    },
  ];

  const upcomingFeatures = [
    'Authentication System',
    'Role-Based Access',
    'Payroll Module',
    'Dark Mode',
  ];

  return (
    <div className="space-y-8 flex flex-col h-full p-6 bg-gray-100 overflow-auto scrollbar-hide">

      {/* Hero Section */}
      <div
        className=" rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-10 text-white shadow-2xl"
      >

        <div
          className="w-52 bg-cyan-500/20 blur-3xl rounded-full"
        />

        <div className="relative z-10">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            About Application
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            KD EMS
          </h1>

          <p className="mt-4 max-w-3xl text-slate-300 leading-relaxed text-lg">
            KD EMS is a modern employee management system designed
            to simplify workforce administration, employee analytics,
            and organizational management through a clean and scalable
            dashboard experience.
          </p>
        </div>
      </div>

      {/* Overview + Tech Stack */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">

        {/* Tech Stack */}
        <div
          className=" rounded-3xl bg-white p-8 shadow-lg border border-slate-200"
        >
          <div className="flex items-center gap-3 mb-5">
            <Rocket className="text-violet-500" size={28} />

            <h2 className="text-2xl font-bold text-slate-800">
              Tech Stack
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <div
                key={tech}
                className=" px-4 py-2 rounded-2xl bg-slate-100 border border-slate-200 text-slate-700 font-medium hover:scale-105 transition-all duration-200"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Features */}
      <div
        className=" rounded-3xl bg-white p-8 shadow-lg border border-slate-200"
      >
        <h2 className="text-3xl font-bold text-slate-800 mb-8">
          Core Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className=" rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className=" h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white shadow-lg"
                >
                  <Icon size={28} />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-slate-800">
                  {feature.title}
                </h3>

                <p className="mt-2 text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>

      {/* Upcoming Features */}
      <div
        className=" rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-8 text-white shadow-xl"
      >
        <h2 className="text-3xl font-bold mb-6">
          Upcoming Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {upcomingFeatures.map((feature) => (
            <div
              key={feature}
              className=" flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-md px-5 py-4 border border-white/10"
            >
              <CheckCircle2 size={20} />

              <span className="font-medium">
                {feature}
              </span>
            </div>
          ))}

        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-slate-500 text-sm pb-5">
        Version 1.0.0 • Built with React + Supabase
      </div>

    </div>
  );
}

export default AboutApp;