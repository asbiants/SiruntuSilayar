import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center rounded-lg items-center w-full border border-red-500 ">
      <div className="border border-dashed border-2 h-[400px] w-[450px] flex justify-center flex-col gap-2">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Nama</span>
          </div>
          <input type="text" placeholder="Masukkan Nama" className="input input-bordered w-full " />
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input type="email" placeholder="Masukkan Email" className="input input-bordered w-full " />
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input type="password" placeholder="Masukkan Password" className="input input-bordered w-full " />
        </label>
        <button className="btn btn-success">Register</button>
      </div>
    </div>
  );
};

export default Login;
