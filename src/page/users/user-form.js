import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../css-framework";
import styles from "./user.module.css";

const UserForm = ({ user }) => {
  console.log(user);
  const [data, setdata] = useState(user);

  const onNameChangeHandler = (e) => {
    // console.log(e)
    // console.log(e.target)
    // console.log(e.target.value)
    setdata({...data, name: e.target.value})
  };

  const onUserNameChangeHandler = (e) => {
    setdata({...data, username: e.target.value})
  };

  return (
    <Container>
      <form className={styles["user-form"]}>
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          id="name"
          name="name"
          value={data.name}
          onChange={onNameChangeHandler}
        />

        <label htmlFor="user-name">User Name :</label>
        <input
          type="text"
          id="user-name"
          name="username"
          value={data.username}
          onChange={onUserNameChangeHandler}
        />

        <label htmlFor="email">Email :</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="phone">Phone :</label>
        <input type="text" id="phone" name="phone" />

        <div className={styles["form-footer"]}>
          <button type="submit" className={styles["save-button"]}>
            Save
          </button>
          <Link to="/users" className={styles["cancel-button"]}>
            Cancel
          </Link>
        </div>
      </form>
    </Container>
  );
};

export default UserForm;
