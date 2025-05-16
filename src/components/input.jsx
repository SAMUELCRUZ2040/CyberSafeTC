export const Input = ({ type, name, placeholder, inputType }) => {
    return (
        inputType === "textarea" ? (
            <textarea
                name={name}
                placeholder={placeholder}
                id={name}
                className="p-2 bg-transparent rounded-lg focus:outline-none focus:ring-0 border-2 h-64 w-full"
                required
            />
        ) : (
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                id={name}
                className="p-2 bg-transparent rounded-lg focus:outline-none focus:ring-0 border-2 w-full"
                required
            />
        )
    );
};