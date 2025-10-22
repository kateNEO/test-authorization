function Button({isDisabled, text, handlerClick}) {
    return (
        <button
            disabled={isDisabled}
            onClick={handlerClick}
            className={`w-full py-2 rounded-md text-sm font-light transition ${
                isDisabled
                    ? "bg-gray-100 border border-gray-200 text-gray-400 opacity-80 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}>
            {text}
        </button>
    )
}
export default Button;
