import React from 'react'
import { AlertTriangle } from 'lucide-react';

const EmployeeDeleteModal = ({ isOpen, onClose, onDelete, employee }) => {
  return (
    <>
        {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="flex flex-col justify-center bg-white p-6 rounded-lg shadow-lg w-96">
                    <AlertTriangle className="mx-auto text-center mb-4 text-red-500" size={56} />
                    <h2 className="text-xl text-brand-dark text-center font-bold mb-4">Confirm Deletion</h2>
                    <p className="mb-6 text-center">Are you sure you want to delete record of <strong className="text-brand-dark">{employee?.first_name} {employee?.last_name}</strong>?</p>
                    <div className="flex justify-end gap-4 justify-center">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => {
                                onDelete(employee.id);
                                onClose();
                             }}
                            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        )}  
    </>
  )
}

export default EmployeeDeleteModal