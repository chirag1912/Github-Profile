import "./App.css";
import Users from "./components/Users.js";
import { useEffect, useState } from "react";
import Search from "./components/Search.js";
import Clear from "./components/Clear.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation.js";
import About from "./components/About.js";
import UserProfile from "./components/UserProfile.js"

function App(props) {
  const [userdata, setUserData] = useState([]); //IMP need to mention userdata as array else willl not allow, userdata.map function to run;
  const [loading, setLoading] = useState(false);
  // const [clear,setClear]=useState(false);  //Check if needed;
  const [alert, setAlert] = useState("");
  const [userName,setUserName]=useState("");

  const [userprofile,setUserProfile]=useState({});  //Declare the single vale of userdata to be object;

  useEffect(() => {
    async function data() {
      setLoading(true);

      const res = await fetch(
        "https://api.github.com/users?client_id=b996f27dd1d75dbb3065&client_secret=69b946fbbd82614300256e598953412b5c949323"
      );
      const res1 = await res.json();
      setUserData(res1);
      setLoading(false);
      // const res2=await axios.get("https://api.github.com/users?client_id=b996f27dd1d75dbb3065&client_secret=69b946fbbd82614300256e598953412b5c949323");
      // setUserData(res.data);
      // console.log("From Axios",res2.data);
    }
    data();
  }, []);

  // const searchUser=(text)=>{
  //   console.log("From App.js Search Word", text);
  // }

  const showUser = async (text) => {
    setLoading(true); //Just to get loading symbol in beggining;

    const res = await fetch(
      `https://api.github.com/search/users?q=${text}&client_id=b996f27dd1d75dbb3065&client_secret=69b946fbbd82614300256e598953412b5c949323`
    );
    // this.setState({ users: res.data.items, loading: false });
    const res1 = await res.json();
    setUserData(res1.items);
    setLoading(false);
    console.log("Text from App.js", text);
  };

  //Clearing:
  const getClear = async (clear) => {
    await clear && setUserData([]);
  };

  // function getAlert (msg, type) {
  //   setAlert({ msg: msg, type: type });
  //   console.log(alert);
  // };

  // const UserName=(login)=>{
  //   setUserName(login);
  // }

  const getUserData=async ({userName})=>{
    const res = await fetch(
      `https://api.github.com/users/${userName}&client_id=b996f27dd1d75dbb3065&client_secret=69b946fbbd82614300256e598953412b5c949323`
    );
    // this.setState({ users: res.data.items, loading: false });
    const res1 = await res.json();
    setUserProfile(res1);
    setLoading(false);
  }

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <div className="container">
            <Search searchUser={showUser} />
            <Clear getClear={getClear} />
            <Users userdata={userdata} />
          </div>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/userprofile/:login">
          <UserProfile {...props} userDataProfile={getUserData} userprofile={userprofile}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
