import react from "react";

function SignIn({ handleBtn }) {
  return (
    <div className="w-screen h-screen bg-[#0f1f37] flex align-center justify-center items-center ">
      <form className="w-1/4 h-2/3 bg-[#576272] p-4 mt-4 flex flex-col rounded-md gap-2">
        <label className="font-md font-bold text-left  text-white">Login</label>
        <button className=" w-full border border-gray-400  p-2  text-white  ">
          G Login with Google
        </button>
        <div className="w-full h-[1px] bg-gray-400"></div>

        <label className="font-md font-bold text-left  text-white">Email</label>
        <input
          type="Email"
          placeholder="Enter Your Email Address"
          className="inputStyle"
        />
        <label className="font-md font-bold text-left  text-white">
          Password
        </label>
        <input
          type="Password"
          placeholder="At least 8 characters"
          className="inputStyle"
        />
        <div className="flex">
          <input type="checkbox" />
          <span className="text-white ml-2">Remember Me</span>
        </div>
        <button className=" w-full border  p-2  text-white bg-[#bcc02f] rounded-sm border-none  font-bold">
          Login
        </button>
        <div className="w-full h-[1px] bg-gray-400 mt-1"></div>
        <div className="flex flex-col text-center items-center">
          <span className="text-white font-md cursor-pointer">
            Don’t have an account?
          </span>
          <span
            className="text-[#bcc02f] font-bold m-1 cursor-pointer"
            onClick={() => handleBtn(true)}>
            Sign Up
          </span>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
