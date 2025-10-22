function InputField({
                        type = "text",
                        placeholder,
                        value,
                        onChange,
                        icon,
                    }) {
    return (
        <div className="relative w-full">
            {icon && (
                <img
                    src={icon}
                    alt="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                />
            )}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className='w-full border border-gray-200 text-gray-400 font-light rounded-[6px] px-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
        </div>
    );
}
export default InputField;
