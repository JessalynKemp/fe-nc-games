import { useEffect, useState, useContext } from "react"

import { CategoryContext } from "../contexts/CategoryContext";

import {Link} from "react-router-dom";
import CategoryMenu from "./CategoryMenu";

import {addCategoryName} from "../utilities/utilities"

export default function NavBar () {

const axios = require("axios");
const [categories, setCategories] = useState([]);
const [isOpen, setIsOpen] = useState(false);
const {setSelectedCategory} = useContext(CategoryContext)

useEffect(() => {
    axios.get("https://nc-games-jk.herokuapp.com/api/categories").then(({data}) => {
        addCategoryName(data.categories);
        setCategories(data.categories);
    })
}, [])

function changeSelectedCategory(e){
    setIsOpen((currentOpen) => !currentOpen);
    setSelectedCategory(e.target.outerText.split(" ").join("-").toLowerCase());
}

return (
    <div className="navBar">
        <CategoryMenu isOpen={isOpen} setIsOpen={setIsOpen} >
        {categories.map((category) => {
            return <Link key={category.slug} className="navLink" to={`/${category.slug}`} onClick={(e)=> changeSelectedCategory(e)}><p>{category.name}</p></Link>
        })}
        </CategoryMenu>
    </div>
    )
}