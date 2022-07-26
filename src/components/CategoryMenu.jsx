import {useState} from "react";

export default function CategoryMenu({children, ...props}) {

    return (
        <section>
            <div className="categoryMenu">
                <h3>Categories</h3>
                <button onClick={()=>{props.setIsOpen((currentOpen) => !currentOpen)}}>Select</button>
            </div>
            {props.isOpen && <ul>{children}</ul>}
        </section>
    )
}