import React from "react";
import Label from "./Label";
import Input from "./Input";

const FormInput = ({ label, flex, type, name, value, onChange, placeholder }) => {
  return (
    <div
      className={`p-1 w-full ${
        flex === 2 ? "md:w-1/2" : flex === 3 ? "md:w-1/3" : flex === 4 ? "md:w-1/4" : ""
      }`}
    >
      <Label>{label}</Label>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;