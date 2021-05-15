import React from "react";
import { useState } from "react";

const Search = (props) => {
  const { searchUser, getAlert } = props;

  const [text, setText] = useState("");
  // const [alert, setAlert] = useState("");

  const onChange = (e) => {
    return setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "" || text === undefined || text === null) {
      // getAlert("Kindly Enter Something", "light");
      // setAlert(true);
      // getAlert(alert);   //gives error sendAlert s not a function;
    } else {
      searchUser(text);
      setText("");
    }
  };

  const onClick = () => {
    //   getclear(clear);
    setText("");
  };

  return (
    <React.Fragment>
      <form className="form" onSubmit={onSubmit}>
        <input
          className="form-control"
          placeholder="Serach Repo.."
          onChange={onChange}
          value={text}
        />
        <input type="submit" className="form-control btn btn-warning" />
        {/* <input type="button" className="form-control btn btn-danger" onClick={onClick}/> */}
      </form>
    </React.Fragment>
  );
};

export default Search;
