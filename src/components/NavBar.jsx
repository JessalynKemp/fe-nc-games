import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


import {Link} from "react-router-dom";
import CategoryMenu from "./CategoryMenu";

import {addCategoryName} from "../utilities/utilities"

export default function NavBar () {

const axios = require("axios");
const [categories, setCategories] = useState([]);
const [isOpen, setIsOpen] = useState(false);

useEffect(() => {
    axios.get("https://nc-games-jk.herokuapp.com/api/categories").then(({data}) => {
        addCategoryName(data.categories);
        setCategories(data.categories);
    })
}, [])

return (
    <div className="navBar">
        <CategoryMenu isOpen={isOpen} setIsOpen={setIsOpen} >
        {categories.map((category) => {
            return <Link key={category.slug} className="navLink" to={`/${category.slug}`} onClick={()=>{setIsOpen((currentOpen) => !currentOpen)}}><p className="navLinkText">{category.name}</p></Link>
        })}
        </CategoryMenu>
    </div>
    )
}