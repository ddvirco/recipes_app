import axios from "axios"
import { useState} from 'react'
import RecipeCardComp from "../RecipeCard/recipeCard";
import "./recipeList.css";

function RecipeListComp(){

    const [allRecipes, setAllRecipes] = useState([])
    const [healthLabelsSearch, setHealthLabelsSearch ] = useState('')
    const [foodKind, setFoodKind] = useState('')
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

    return (
    <div className="recipesList_app">
        <form className="form_app">
            <input type='text' placeholder="Search a food.."
            onChange={(e) => setFoodKind(e.target.value)}  />
            <input className="input_id" type='button' value='Search' onClick={getTheData} />
            
            <select className="select_app" onChange={(e) => {setHealthLabelsSearch(e.target.value)}}>
                {healthLabelsOptions.map((item, index) => 
                    {
                        return <option key={index}>{item}</option>
                    }) 
                }
            </select>
            
        </form>
        <br/>
        <div className="allRecipes">
            {allRecipes.length > 0 ? 
                allRecipes.map((item, index) => {
                    return <RecipeCardComp key={index} recipeData={item} />
                })
                : <h3>Search..</h3>}
        </div>
    </div>)
}   

export default RecipeListComp