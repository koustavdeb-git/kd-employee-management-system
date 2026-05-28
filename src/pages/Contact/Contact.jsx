import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="space-y-8 flex flex-col h-full p-6 bg-gray-100 overflow-auto scrollbar-hide">

        {/* Hero */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Contact Support
          </h2>

          <p className="mt-2 text-slate-500">
            For application support, feature requests,
            or collaboration opportunities.
          </p>
        </div>

        {/* Main Card */}
        <div
          className=" rounded-3xl bg-white p-8 shadow-lg border border-slate-200"
        >

          <div className="flex items-center gap-5">

            <div
              className=" h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-2xl font-bold"
            >
              K
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Koustav Deb
              </h2>

              <p className="text-slate-500">
                Frontend Developer
              </p>
            </div>

          </div>

          <p className="mt-6 text-slate-600 leading-relaxed">
            Passionate about building scalable frontend applications
            with modern UI architecture and cloud-backed services.
          </p>

        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <a
            href="mailto:koustavdeb2015@gmail.com"
            className=" rounded-2xl bg-white p-5 shadow-md border border-slate-200 hover:shadow-xl transition-all"
          >
            <p className="text-sm text-slate-500">
              Email
            </p>

            <p className="mt-1 font-semibold">
              koustavdeb2015@gmail.com
            </p>
          </a>

        </div>

      </div>
    </>
  )
}

export default Contact