import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const Login = () => {
  type Inputs = {
    nama: string;
    email: string;
    password: string;
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("nama"));

  return (
    <div className="min-h-screen flex justify-center rounded-lg items-center w-full border border-red-500 ">
      <div className="border border-dashed border-2 h-[400px] w-[450px] flex justify-center flex-col gap-2">
        <h1 className="font-montserrat font-bold text-2xl text-center">Register!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input defaultValue="test" {...register("nama")} />

          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("email", { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.email && <span>This field is required</span>}

          <input type="submit" />
        </form>
        <button className="btn btn-outline btn-accent">Register</button>
      </div>
    </div>
  );
};

export default Login;
