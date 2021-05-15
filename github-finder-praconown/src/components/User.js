import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

const User = (props) => {
  const { login, html_url, avatar_url,userName } = props.user;

  

  const passLoginName=()=>{
    userName(login);
  }
  return (
    <React.Fragment>
      <div className="card" style={{ width: "auto" }}>
        <div className="card-body">
          <img src={avatar_url} className="img-set" alt="Github_avatar" />
          <h6 className="card-subtitle mb-2 text-muted">{login}</h6>
          <a type="button" className="btn btn-info" href={html_url}>
            Github Link
          </a>
          <Link to={`/userprofile/${login}`}>
            <input type="button" value="Git Profile"/>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

// User.propTypes = {
//   login: PropTypes.string.isRequired,
// };

export default User;
