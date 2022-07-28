import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons"

import {Link} from "react-router-dom";

import {useContext} from "react";
import { UserContext } from "../contexts/User";

export default function Header () {
const user = useContext(UserContext);

return (
    <div className="header">
        <div className="headerText">
        <h1>NC Game Reviews</h1>
        <p className="loggedInNotif">You are logged in as <span className="userLoggedIn">{user.name}</span></p>
        </div>
        <Link to="/"><FontAwesomeIcon id="homeIcon" icon={faHouseChimney} /></Link>
    </div>
)
}