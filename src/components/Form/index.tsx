/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Button from "../Button";

interface Field {
  name: string;
  label: string;
  type?: string;
  mask?: string;
  validate?: (value: string) => boolean;
}

interface FormProps {
  fields: Field[];
  onSubmit: (formData: Record<string, string>) => void;
}

const Form: React.FC<FormProps> = ({ fields, onSubmit }) => {
  const initialData = fields.reduce(
    (acc, field) => ({ ...acc, [field.name]: "" }),
    {} as Record<string, string>,
  );

  const [formData, setFormData] = useState<Record<string, string>>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (
    name: string,
    value: string,
    validate?: (value: string) => boolean,
  ): string => {
    if (validate && typeof validate === "function") {
      return validate(value) ? "" : `Campo ${name} inválido`;
    }
    return !value.trim() ? `Campo ${name} é obrigatório` : "";
  };

  const applyMask = (value: string, mask?: string): string => {
    if (mask === "phone") {
      let cleanedValue = value.replace(/\D/g, "");
      if (cleanedValue.length > 11) cleanedValue = cleanedValue.slice(0, 11);

      return cleanedValue.length > 10
        ? `(${cleanedValue.slice(0, 2)}) ${cleanedValue.slice(2, 3)}.${cleanedValue.slice(3, 7)}-${cleanedValue.slice(7)}`
        : `(${cleanedValue.slice(0, 2)}) ${cleanedValue.slice(2, 6)}-${cleanedValue.slice(6)}`;
    }
    return value;
  };

  const handleInputChange = (name: string, value: string, mask?: string) => {
    const maskedValue = applyMask(value, mask);
    setFormData((prev) => ({ ...prev, [name]: maskedValue }));

    if (errors[name]) {
      const error = validateField(name, maskedValue);
      setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    }
  };

  const validateForm = () => {
    const newErrors = fields.reduce(
      (acc, field) => {
        const error = validateField(
          field.name,
          formData[field.name],
          field.validate,
        );
        return error ? { ...acc, [field.name]: error } : acc;
      },
      {} as Record<string, string>,
    );

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
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
      />
    </form>
  );
};

export default Form;
