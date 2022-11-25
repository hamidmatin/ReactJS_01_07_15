import React, { useState, useEffect } from "react";
import { BasePage } from "../../components/base-page";
import { Container } from "../../css-framework";
import { UsersCardView } from "./card-view";
import { UsersTableView } from "./tabl-view";
import * as constants from "./contants";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from './user.module.css';

const UsersPage = () => {
  const [usersView, setUsersView] = useState(constants.TABLE_VIEW);
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(constants.BASE_URL + "/users").then((res) => {
      console.log(res);
      setUserList(res.data);
      setIsLoading(false);
    });
  }, []);

  const onDeleteUserHandler = (id) => {
    console.log(id);
    const deletedUserList = userList.filter((user) => user.id !== id);
    setUserList(deletedUserList);

    axios.delete(constants.BASE_URL + "/users/" + id).then((response) => {
      console.log(response);
    });
  };

  return (
    <BasePage title={"Users"} isLoading={isLoading}>
      <span
        onClick={() => {
          setUsersView(
            usersView === constants.TABLE_VIEW
              ? constants.CARD_VIEW
              : constants.TABLE_VIEW
          );
        }}
      >
        Toggle Switch
      </span>

      <Container>
      <div className={styles['add-new']}>
        <Link to={'new'} className={styles['add-new-button']}>
          <i className="material-symbols-outlined">add</i>
        </Link>
      </div>

        {usersView === constants.TABLE_VIEW ? (
          <UsersTableView users={userList} onDeleteUser={onDeleteUserHandler} />
        ) : (
          <UsersCardView users={userList} onDeleteUser={onDeleteUserHandler} />
        )}
      </Container>
    </BasePage>
  );
};

export default UsersPage;
