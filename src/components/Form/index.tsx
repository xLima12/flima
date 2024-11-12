import React, { useState } from "react";
import Button from "../Button";

const Form = ({ fields, onSubmit }) => {
  const initialData = fields.reduce(
    (acc, field) => ({ ...acc, [field.name]: "" }),
    {},
  );
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});

  const validateField = (name, value, validate) => {
    if (validate && typeof validate === "function") {
      return validate(value) ? "" : `Campo ${name} inválido`;
    }
    return !value.trim() ? `Campo ${name} é obrigatório` : "";
  };

  const handleInputChange = (name, value, mask) => {
    let maskedValue = value;
    if (mask === "phone") {
      value = value.replace(/\D/g, "");
      if (value.length > 11) value = value.slice(0, 11);
      maskedValue =
        value.length > 10
          ? `(${value.slice(0, 2)}) ${value.slice(2, 3)}.${value.slice(3, 7)}-${value.slice(7)}`
          : `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
    }

    setFormData((prev) => ({ ...prev, [name]: maskedValue }));
  };

  const validateForm = () => {
    const newErrors = fields.reduce((acc, field) => {
      const error = validateField(
        field.name,
        formData[field.name],
        field.validate,
      );
      return error ? { ...acc, [field.name]: error } : acc;
    }, {});

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field) => (
        <div key={field.name}>
          <label
            htmlFor={field.name}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            {field.label}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={(e) =>
                handleInputChange(field.name, e.target.value, field.mask)
              }
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none"
              rows={4}
            />
          ) : (
            <input
              type={field.type || "text"}
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={(e) =>
                handleInputChange(field.name, e.target.value, field.mask)
              }
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none"
              required
            />
          )}
          {errors[field.name] && (
            <p className="text-red-500 text-sm">{errors[field.name]}</p>
          )}
        </div>
      ))}
      <Button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
        name="Enviar"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default Form;
