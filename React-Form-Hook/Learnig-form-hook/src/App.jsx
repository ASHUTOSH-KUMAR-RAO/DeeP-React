import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submit the form", data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name:- </label>
          <input
            type="text"
            placeholder="Enter your first name..."
            {...register("firstName", {
              required: true,
              minLength: {
                value: 3,
                message:
                  " arre bhai kaam se kaam 3 length ki value ko to rakho n bhai.",
              },
              maxLength: {
                value: 8,
                message: "mere bhai max length 8 hi type karna hai n",
              },
            })}
          />
          {errors.firstName && <h1>{errors.firstName.message}</h1>}
        </div>

        <br />

        <div>
          <label>Middle Name:-</label>
          <input
            type="text"
            placeholder="Enter your last name..."
            {...register("middleName")}
          />
        </div>

        <br />

        <div>
          <label>Last Name:-</label>
          <input
            type="text"
            placeholder="Enter your last name..."
            {...register("lastName")}
          />
        </div>

        <br />

        <button>Submit </button>
      </form>
    </>
  );
};

export default App;
