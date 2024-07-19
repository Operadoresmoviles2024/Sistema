'use client';

export default function Button({ uid, name, type, inputRef, onChange, defaultValue, value, required, label, shadow, disabled, table}) {

    function stopPropagation(e) {
        e.stopPropagation();
    }
    return (
        <div className="relative z-0 w-full  group ">
            <input
                type={type}
                name={name ? name : label}
                id={uid ? uid : label}
                ref={inputRef}
                onChange={onChange}
                placeholder=""
                required={required}
                defaultValue={defaultValue}
                value={value && value}
                min={type == 'number' && "1"}
                disabled={disabled}
                className={`block min-w-[200px]  ${shadow ? shadow : 'shadow-[#b6b6b6]'} bg-white   py-[10px]  w-full text-[16px] text-gray-900 bg-transparent  px-5 appearance-none   focus:ring-0  peer rounded-[5px] ${table ? 'focus:outline-yellow' : 'focus:outline-none border border-[#a1a1a1] '}`} />
            <label for={uid ? uid : label} className={` z-50  peer-focus:font-medium  absolute left-0 text-[16px] bg-white px-5 mx-2 text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${table ? 'hidden peer-focus:block' : ''}`}>{label}</label>
        </div>
    )
}