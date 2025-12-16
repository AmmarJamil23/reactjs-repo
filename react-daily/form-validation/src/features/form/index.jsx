import React from 'react'
import { useState } from "react"

const UserForm = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function validate() {
        const newErrors = {};

        if (!form.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!form.email.includes("@")) {
            newErrors.email = "Email is invalid";
        }

        if (form.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        return newErrors;
    }

    function handleSubmit(e) {
        e.preventDefault();

        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        console.log("Form submitted", form);
    }

    const isInvalid = 
    !form.name.trim() ||
    !form.email.includes("@") ||
    form.password.length < 6;

    


  return (
    <form className='space-y-4' onSubmit={handleSubmit}>
        <input
         name="name"
         value={form.name}
         onChange={handleChange}
         placeholder="Name"
         className='w-full px-4 py-2 border rounded'
          />
          {errors.name && (
        <p className="text-sm text-red-600">{errors.name}</p>
        )}

        <input
         name="email"
         value={form.email}
         onChange={handleChange}
         placeholder="Email"
         className='w-full px-4 py-2 border rounded'
          />
          {errors.email && (
          <p className="text-sm text-red-600">{errors.email}</p>
            )}


        <input
        type="password"
         name="password"
         value={form.password}
         onChange={handleChange}
         placeholder="Password"
         className='w-full px-4 py-2 border rounded'
          />
          {errors.password && (
            <p className="text-sm text-red-600">{errors.password}</p>
            )}


        <button
        type='submit'
        disabled={isInvalid}
        className='w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50'
        >Submit
        </button>
    </form>
  )
}

export default UserForm;