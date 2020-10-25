import React, { useContext } from "react";
import Spinner from "../../layouts/Spinner";
import Useritems from "./Useritems";
import PropTypes from "prop-types";
import GithubContext from "./../../context/github/githubContext";

const Users = () => {
    const githubContext = useContext(GithubContext);
    const { loading, users } = githubContext;
    if (loading) {
        return <Spinner />;
    } else {
        return (
            <div style={userStyle}>
                {users.map((user) => (
                    <Useritems key={user.id} user={user} />
                ))}
            </div>
        );
    }
};

Users.prototype = {
    users: PropTypes.array.isRequired,
};
const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem",
};

export default Users;
