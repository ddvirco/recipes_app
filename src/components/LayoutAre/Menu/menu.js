import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

function MenuComp(){

    const storeData = useSelector(state => state)

    return (
    <div>
        <nav>
            <NavLink to="/all-recipes">All Recipes</NavLink>
            <span>|</span>
            <NavLink to="/favorite">Favorite {storeData.recipes.length}</NavLink>

            
        </nav>
    </div>)
}

export default MenuComp