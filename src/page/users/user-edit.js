import axios from "axios";
import React, { useEffect, useState } from "react";
import { BasePage } from "../../components/base-page";
import UserForm from "./user-form";
import * as constants from "./contants";
import { useParams } from "react-router-dom";

const UserEditPage = () => {
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    axios.get(constants.BASE_URL + "/users/" + id).then((res) => {
      setUser(res.data);
    });
  }, []);

  return (
    <BasePage title={"Edit User"}>
      <UserForm user={user} />
    </BasePage>
  );
};

export default UserEditPage;
