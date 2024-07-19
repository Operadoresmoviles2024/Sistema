'use client';

export default function Button({ styled, name, change }) {
    return (
        <input
            id={name}
            type="checkbox"
            name={name}
            onChange={change}
             className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" 
            />
    )
}