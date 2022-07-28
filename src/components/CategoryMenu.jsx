import {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function CategoryMenu({children, ...props}) {

    return (
        <section>
            <div className="categoryMenu">
                <h3>Categories</h3>
                <button class="menuButton" onClick={()=>{props.setIsOpen((currentOpen) => !currentOpen)}}><FontAwesomeIcon icon={faAngleDown} /></button>
            </div>
            {props.isOpen && <ul>{children}</ul>}
        </section>
    )
}