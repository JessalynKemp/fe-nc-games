import { useEffect, useState } from "react"

import {Link} from "react-router-dom";

export default function NavBar () {

const axios = require("axios");
const [categories, setCategories] = useState([]);

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
        {categories.map((category) => {
            return <Link key={category.slug} className="navLink" to={`/${category.slug}`}><p>{category.name}</p></Link>
        })}
    </div>
)
}