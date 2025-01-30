import Router from "next/router";

const User = ({ data: users }) => {
  return (
    <ul className="list-group">
      {users.map((u) => (
        <li
          key={u.id}
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          role="button"
          onClick={(e) => Router.push("/users/[id]", `/users/${u.id}`)}
        >
          <div>
            <h5>
              {u.first_name} {u.last_name}
            </h5>
            <p>Email: {u.email}</p>
          </div>
          <img
            src={u.avatar}
            alt={u.first_name + "" + u.last_name}
            style={{ borderRadius: "50%" }}
          />
        </li>
      ))}
    </ul>
  );
};

export default User;
