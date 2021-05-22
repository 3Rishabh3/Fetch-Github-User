import React, { useState, useEffect } from "react";
import axios from "axios";

const Repos = ({ repos_url }) => {
  const [repos, setRepos] = useState([]);
  const fetchRepos = async () => {
    const { data } = await axios.get(repos_url);
    setRepos(data);
  };

  useEffect(() => {
    fetchRepos();
  }, [repos_url]);

  return (
    <ul class="list-group mt-5 mb-5">
      {repos.map((repo) => (
        <li class="list-group-item" key={repo.id}>
          <div className="text-primary">{repo.name}</div>
          <div className="text-secondary">{repo.language}</div>
          <div className="text-info">{repo.description}</div>
        </li>
      ))}
    </ul>
  );
};

export default Repos;
