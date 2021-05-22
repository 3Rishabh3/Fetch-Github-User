import React, { useState, useContext } from "react";
import UserContext from "../Contexts/UserContext";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import UserCard from "../Components/UserCard";
import Repos from "../Components/Repos";

const Home = () => {
  const context = useContext(UserContext);

  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
    } catch (error) {
      toast("Not able to locate user", { type: "error" });
    }
  };

  if (!context.user?.email) {
    return <Redirect to="/signin" />;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div className="input-group mb-3 mt-5">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              onClick={fetchUser}
            >
              Fetch User
            </button>
          </div>
          {user ? <UserCard user={user} /> : null}
        </div>

        <div className="col-md-7" style={{ paddingLeft: "10px" }}>
          {user ? <Repos repos_url={user.repos_url} /> : null}
        </div>
      </div>
    </div>
  );
};
export default Home;
