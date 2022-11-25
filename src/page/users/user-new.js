import React from "react";
import { BasePage } from "../../components/base-page";
import UserForm from "./user-form";

const UserNewPage = () => {
  const user = {
    name: "",
    username: "",
    email: "",
    phone: "",
  };
  return (
    <BasePage title={"Add New User"}>
      <UserForm user={user}/>
    </BasePage>
  );
};

export default UserNewPage;
