import React, { useEffect, Fragment, useContext } from "react";
import Spinner from "../../layouts/Spinner";
import { Link } from "react-router-dom";
import Repo from "./Repo";
import GithubContext from "./../../context/github/githubContext";

const User = ({ match }) => {
    const githubContext = useContext(GithubContext);
    const { loading, user, getUser, getUserRepos } = githubContext;
    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        // eslint-disable-next-line
    }, []);

    const {
        name,
        avatar_url,
        location,
        bio,
        login,
        company,
        blog,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
    } = user;

    if (loading) return <Spinner />;
    return (
        <Fragment>
            <Link to="/" className="btn btn-light">
                Back to search
            </Link>
            Hireable:{" "}
            {hireable ? (
                <i className="fa fa-check text-success" />
            ) : (
                <i className="fa fa-times-circle text-danger" />
            )}
            <div className="card grid-2">
                <div className="all-center">
                    <img
                        src={avatar_url}
                        alt=""
                        className="round-img"
                        style={{ width: "150px" }}
                    />
                    <h1>{name}</h1>
                    <p>{location}</p>
                </div>
                <div>
                    {bio && (
                        <Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </Fragment>
                    )}
                    <a href={html_url} className="btn btn-dark my-1">
                        Visit GitHub Profile
                    </a>
                    <ul>
                        <li>
                            {login && (
                                <Fragment>
                                    <strong>Username:</strong> {login}
                                </Fragment>
                            )}
                        </li>
                        <li>
                            {company && (
                                <Fragment>
                                    <strong>Company:</strong> {company}
                                </Fragment>
                            )}
                        </li>
                        <li>
                            {blog && (
                                <Fragment>
                                    <strong>Website:</strong> {blog}
                                </Fragment>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">
                    followers: {followers}
                </div>
                <div className="badge badge-success">
                    following: {following}
                </div>
                <div className="badge badge-danger">
                    Public Repos: {public_repos}
                </div>
                <div className="badge badge-light">
                    Public Gists: {public_gists}
                </div>
            </div>
            <Repo />
        </Fragment>
    );
};

export default User;
