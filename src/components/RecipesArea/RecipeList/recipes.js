import axios from "axios"
import { useState } from "react"
import { Link, Route, Switch, Routes } from "react-router-dom";
import OneRecipeComp from "../../recipeCard";
import "./recipes.css";

function RecipesComp(){
    const [allRecipes, setAllRecipes] = useState([])
    const [healthLabelsSearch, setHealthLabelsSearch ] = useState('')
    const [foodKind, setFoodKind] = useState('avocado')
    // const url = "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"
    const ID = '6a0452ae'
    const key = '0066a7adf422693d7a68f9c89585aafd'
    const withP = `https://api.edamam.com/search?q=${foodKind}&app_id=${ID}&app_key=${key}&health=${healthLabelsSearch}`
    
    const healthLabelsOptions = [
        "vegan","vegetarian","paleo","dairy-free","gluten-free",
        "wheat-free","fat-free","low-sugar","egg-free","peanut-free",
        "tree-nut-free","soy-free","fish-free","shellfish-free"
    ]

    const  getTheData = async() => {
       const resp =  await axios.get(withP)
       setAllRecipes(resp.data.hits)
       console.log(allRecipes)
    }
    
    
    return(
    <div>
        <h1>Food web </h1>
        <br/>
        {/* <nav>
            <Link to="/fav-recipe">ABC</Link>
            <span>|</span>
            <Link to="/">All</Link>
        </nav>
        
        <Routes>
            <Route path="fav-recipe" element={<FavRecipesComp/>}></Route>
            <Route path="/" element={<RecipesComp />}></Route>
        </Routes> */}
        
        <br/>
        <form className="form_app">
            <input type='text' placeholder="Search a food.."
            onChange={(e) => setFoodKind(e.target.value)}  />
            <input className="input_id" type='button' value='Search' onClick={getTheData} />
            <select className="select_app" onChange={(e) => {setHealthLabelsSearch(e.target.value)}}>
                {healthLabelsOptions.map((item, index) => 
                    {
                        return <option key={index}>{item}</option>
                    })}
            </select>
        </form>
        <br/>

        {/* <strong>{foodKind}</strong> */}
        <div className="allRecipes">
            {allRecipes.map((item, index) => {
                return <OneRecipeComp key={index} recipeData={item} />
            })}
        </div>
    </div>)
}

export default  RecipesComp