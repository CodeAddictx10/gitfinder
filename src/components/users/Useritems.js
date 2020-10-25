import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
const Useritem = ({ user: { avatar_url, html_url, login } }) => {
    return (
        <div className="card text-center ">
            <img
                src={avatar_url}
                alt=""
                style={{ width: "60px" }}
                className="round-img"
            />
            <h3>{login}</h3>
            <div>
                <Link
                    to={`/user/${login}`}
                    className="btn btn-dark btn-sm my-1"
                >
                    More
                </Link>
            </div>
        </div>
    );
};

Useritem.prototype = {
    user: PropTypes.object.isRequired,
};
export default Useritem;
