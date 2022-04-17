import { useSelector } from "react-redux"


function FavRecipesComp(){

    const storeData = useSelector(state => state)

    return (
    <div>
        <h2>Hello From Fav Comp</h2>
        <br>
        </br>
        {storeData.recipes.map((item, index) => {
            return <li key={index}>{item}</li>
        })}
        
    </div>)
}

export default FavRecipesComp