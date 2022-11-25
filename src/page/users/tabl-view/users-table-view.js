import React from "react";
import TableCol from "./table-col";
import TableRow from "./table-row";
import EmptyRow from "./empty-row";

import styles from "./users-table-view.module.css";
import * as constants from "../contants";
import { Link } from "react-router-dom";

const UsersTableView = ({ users, onDeleteUser }) => {
  console.log(users);
  const deleteHandler = (id) => {
    console.log(id);
    let result = constants.CONFIRM_RESULT_YES;
    /********
     *
     * confirm => yes or no
     */

    if (result === constants.CONFIRM_RESULT_YES) {
      onDeleteUser(id);
    }
  };
  return (
    <div className={styles["user-table-view"]}>
      <TableRow>
        <TableCol isTitle>Name</TableCol>
        <TableCol isTitle>UserName</TableCol>
        <TableCol isTitle>Email</TableCol>
        <TableCol isTitle>Phone</TableCol>
        <TableCol isTitle>Actions</TableCol>
      </TableRow>

      {users && users.length > 0 ? (
        users.map((user) => (
          <TableRow key={user.id}>
            <TableCol>{user.name}</TableCol>
            <TableCol>{user.username}</TableCol>
            <TableCol>{user.email}</TableCol>
            <TableCol>{user.phone}</TableCol>
            <TableCol>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button
                  className={styles["action-button"]}
                  onClick={deleteHandler.bind(this, user.id)}
                >
                  <span className="material-symbols-outlined">delete</span>
                </button>

                <Link to={`edit/${user.id}`} className={styles["action-button"]}>
                  <i className="material-symbols-outlined">edit</i>
                </Link>
              </div>
            </TableCol>
          </TableRow>
        ))
      ) : (
        <EmptyRow />
      )}
    </div>
  );
};

export default UsersTableView;
