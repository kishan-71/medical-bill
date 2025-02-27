const Input = ({ type, name, value, onChange, placeholder }) => {
    return (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2 border text-lg border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-800 text-white"
      />
    );
  };
  
  export default Input;