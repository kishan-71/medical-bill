const Button = ({ children, onClick, type = "button", className }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`px-4 py-1 rounded-lg font-semibold text-white transition-all text-lg ${className}`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;