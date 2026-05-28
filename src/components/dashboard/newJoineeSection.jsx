import React from 'react'

const NewJoineeSection = ( { latestJoinees } ) => {
    return (
        <>
            <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-slate-800">
                        New Joinees
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                    {latestJoinees.map(employee => (
                        <div
                            key={employee.id}
                            className="relative overflow-hidden rounded-3xl p-6 shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl bg-gradient-to-br from-blue-300 via-blue-50 to-white-500 text-white cursor-pointer">
                            <div className="flex items-center gap-4">

                                <div className="h-14 w-14 rounded-full bg-brand-dark text-white flex items-center justify-center text-xl font-bold">
                                    {employee.first_name?.charAt(0)}
                                </div>

                                <div>
                                    <p className="text-xl text-slate-500">
                                        Welcome Aboard 🎉
                                    </p>

                                    <h3 className="text-lg font-bold text-slate-800">
                                        {employee.first_name} {employee.last_name}
                                    </h3>

                                    <p className="text-sm text-slate-600 mt-1">
                                        {employee.job_role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default NewJoineeSection