import { Route,Routes  } from "react-router-dom"
import FavRecipesComp from "../../RecipesArea/FavRecipes/favRecipes"
import RecipeListComp from "../../RecipesArea/RecipeList/recipeList"
import LayoutComp from "../Layout/layout"

function RoutingComp(){

    return (
    <div>
        <Routes>
            <Route path="/all-recipes" element={<RecipeListComp />}></Route>
            <Route path="favorite" element={<FavRecipesComp />} ></Route>
        </Routes>
    </div>)
}

export default RoutingComp