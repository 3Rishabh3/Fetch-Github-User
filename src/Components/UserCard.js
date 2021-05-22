import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="card" style={{}}>
      <img src={user.avatar_url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-primary">{user.name}</h5>
        <p className="card-text text-primary">{user.bio}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-primary">{user.location}</li>
        <li className="list-group-item text-info">
          Available for hire: {user.hireable ? "YES" : "NOPE"}
        </li>
        <li className="list-group-item text-info">
          Followers {user.followers}
        </li>
      </ul>
    </div>
  );
};

export default UserCard;
