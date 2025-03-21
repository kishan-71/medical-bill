import React from "react";
import FormInput from "./FormInput";
import Button from "./Button";

const Form = ({ onSubmit, fields, buttons }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4 bg-gray-700 p-6 rounded-lg shadow-md">
      <div className="flex items-center flex-wrap">
        {fields.map((field, index) => (
          <FormInput
            key={index}
            flex={field.flex}
            label={field.label}
            type={field.type}
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            placeholder={field.placeholder}
            accept={field.accept} // Pass accept
          />
        ))}
        <div className="p-2 flex justify-center space-x-4 ">
        {buttons.map((button, index) => (
          <Button
            key={index}
            flex={button.flex}
            type={button.type}
            onClick={button.onClick}
            className={button.className}
          >
            {button.label}
          </Button>
        ))}
        </div>
      </div>
    </form>
  );
};

export default Form;