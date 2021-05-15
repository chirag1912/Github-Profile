import { useEffect } from "react";

const UserProfile = (props) => {
  const { userDataProfile } = props;

  useEffect(() => userDataProfile(props.match.params.login), []);

  // console.log(userDataProfile);
  const { name, avayar_url, location, bio } = props.user;

  return (
    <div>{name}</div>
    // <React.Fragment>
    //   <div className="card" style={{ width: "auto" }}>
    //     <div className="card-body">
    //       <img
    //         src={avatar_url}
    //         className="img-set"
    //         alt="Github_avatar"
    //         style={{ display: "inline", float: "left" }}
    //       />
    //       <span style={{ display: "inline", float: "right" }}>Username:</span>
    //       <span className="card-subtitle mb-2 text-muted" style={{ display: "inline", float: "right" }}>{login}</span>
    //       <a type="button" className="btn btn-info" href={html_url}>
    //         Github Link
    //       </a>
    //     </div>
    //   </div>
    // </React.Fragment>
  );
};

export default UserProfile;
