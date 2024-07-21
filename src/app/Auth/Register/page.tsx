import { RegisterForm } from "@/Components/Auth/Register/Register";
import { register } from "module";
import React from "react";

const page = () => {
  return (
    <div>
      <RegisterForm setIsReloadNeeded={undefined} handleClose={undefined} />
    </div>
  );
};

export default page;
