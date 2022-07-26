import { useEffect, useState } from "react"

import {Link} from "react-router-dom";
import CategoryMenu from "./CategoryMenu";

export default function NavBar () {

const axios = require("axios");
const [categories, setCategories] = useState([]);
const [isOpen, setIsOpen] = useState(false);

useEffect(() => {
    axios.get("https://nc-games-jk.herokuapp.com/api/categories").then((response) => {
        return response.data.categories;
    }).then((categoryData) => {
        categoryData.forEach((category) => {
            category.name = category.slug.split("-").join(" ");
        })
        setCategories(categoryData)
    })
}, [])

return (
    <div className="navBar">
        <CategoryMenu isOpen={isOpen} setIsOpen={setIsOpen} >
        {categories.map((category) => {
            return <Link key={category.slug} className="navLink" to={`/${category.slug}`} onClick={()=>{setIsOpen((currentOpen) => !currentOpen)}}><p>{category.name}</p></Link>
        })}
        </CategoryMenu>
    </div>
)
}