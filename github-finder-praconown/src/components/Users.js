import React from "react";
import User from "./User.js";

const Users = (props) => {
  const { userdata, userName } = props;

  const passUserName = (login) => {
    userName(login);
  };
  console.log(userdata);
  return (
    <div>
      <div className="card-align">
        {userdata.map((user) => {
          return <User key={user.id} user={user} className="user-style" />;
        })}
      </div>
    </div>
  );
};
//   Key will be user.id not userdata.id;

export default Users;
