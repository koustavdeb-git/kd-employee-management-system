import react, { useEffect, useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const EditEmployeeModal = ({ isOpen, onClose, onEmployeeUpdated, employee }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        gender: "",
        jobRole: "",
        joiningDate: null,
        workMode: "",
        active: true,
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);
    function isRequired(value) {
        return value.trim() !== "";
    }
    useEffect(() => {
        if (employee) {
            setFormData({
                id: employee.id,
                firstName: employee.first_name || "",
                lastName: employee.last_name || "",
                email: employee.email || "",
                phone: employee.phone || "",
                address: employee.address?.address || "",
                gender: employee.gender || "",
                jobRole: employee.company?.title || "",
                joiningDate: employee.joiningDate || null,
                workMode: employee.workMode || "",
                active: employee.active !== undefined ? employee.active : true,
            });
        }
    }, [employee]);

    function handleSubmit(e) {
        e.preventDefault();
        const newErrors = {};
        if (!isRequired(formData.firstName)) newErrors.firstName = "First name is required.";
        if (!isRequired(formData.lastName)) newErrors.lastName = "Last name is required.";
        if (!isRequired(formData.email)) newErrors.email = "Email is required.";
        if (!isRequired(formData.gender)) newErrors.gender = "Gender is required.";
        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) {
            return;
        }

        onEmployeeUpdated(formData);
    }

    useEffect(() => {
        if (!isOpen) {
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                address: "",
                gender: "",
                jobRole: "",
                joiningDate: null,
                workMode: "",
                active: true,
            });
            setErrors(null);
        }
    }, [isOpen]);

    if (!isOpen) {
        return null;
    } else {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
                    <div className="flex justify-between align-items-center mb-4">
                        <h2 className="text-xl font-bold text-brand-dark">Edit Employee Details</h2>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 font-semibold">
                            X
                        </button>
                    </div>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">First Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    className={`mt-1 block w-full px-3 py-2 border ${errors?.firstName ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                                    value={formData.firstName}
                                    onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                                />
                                {errors && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Last Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    className={`mt-1 block w-full px-3 py-2 border ${errors?.lastName ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                                    value={formData.lastName}
                                    onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                                />
                                {errors && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                            </div>

                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    className={`mt-1 block w-full px-3 py-2 border ${errors?.email ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                />
                                {errors && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Phone</label>
                                <input
                                    type="tel"
                                    className={`mt-1 block w-full px-3 py-2 border ${errors?.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                                    value={formData.phone}
                                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Address</label>
                            <input
                                type="text"
                                className={`mt-1 block w-full px-3 py-2 border ${errors?.address ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                                value={formData.address}
                                onChange={e => setFormData({ ...formData, address: e.target.value })}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Gender <span className="text-red-500">*</span>
                                </label>

                                <select
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    value={formData.gender}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            gender: e.target.value,
                                        })
                                    }
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors && <p className="text-red-500 text-sm">{errors.gender}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Department</label>
                                <select
                                    className={`mt-1 block w-full px-3 py-2 border ${errors?.jobRole ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                                    value={formData.jobRole}
                                    onChange={e => setFormData({ ...formData, jobRole: e.target.value })}
                                >
                                    <option value="">Select Department</option>
                                    <option value="Frontend Developer">Frontend Developer</option>
                                    <option value="Backend Developer">Backend Developer</option>
                                    <option value="DevOps Engineer">DevOps Engineer</option>
                                    <option value="System Engineer">System Engineer</option>
                                    <option value="QA Engineer">QA Engineer</option>
                                    <option value="HR">HR</option>
                                    <option value="Project Manager">Project Manager</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label className="block text-sm font-medium text-gray-700">
                                    Date of Joining
                                </label>

                                <DatePicker
                                    placeholderText="Select date"
                                    selected={formData.joiningDate}
                                    onChange={(date) =>
                                        setFormData({
                                            ...formData,
                                            joiningDate: date,
                                        })
                                    }
                                    maxDate={new Date()}
                                    showYearDropdown
                                    scrollableYearDropdown
                                    yearDropdownItemNumber={100}
                                    calendarClassName="custom-calendar"
                                    className="mt-1 w-[100%] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    dateFormat="yyyy-MM-dd"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Work Mode
                                </label>

                                <select
                                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    value={formData.workMode}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            workMode: e.target.value,
                                        })
                                    }
                                >
                                    <option value="">Select Work Mode</option>
                                    <option value="Onsite">Onsite</option>
                                    <option value="Remote">Remote</option>
                                    <option value="Hybrid">Hybrid</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col items-left justify-between">
                            <label className="text-sm font-medium text-gray-700">
                                Employee Status
                            </label>

                            <button
                                type="button"
                                onClick={() =>
                                    setFormData({
                                        ...formData,
                                        active: !formData.active,
                                    })
                                }
                                className={`w-12 h-6 mt-2 flex items-center rounded-full p-1 transition ${formData.active ? "bg-green-500" : "bg-gray-300"
                                    }`}
                            >
                                <div
                                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${formData.active
                                        ? "translate-x-6"
                                        : "translate-x-0"
                                        }`}
                                />
                            </button>

                            <span className="text-sm text-gray-600">
                                {formData.active ? "Active" : "Inactive"}
                            </span>
                        </div>
                        <div className="flex justify-center mt-6">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg mr-2 hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={loading}
                                className="px-4 py-2 bg-brand-dark text-white rounded-lg hover:bg-brand-secondary disabled:bg-gray-400"
                            >
                                {loading ? 'Saving...' : 'Save Changes'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditEmployeeModal;