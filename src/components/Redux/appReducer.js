
const appReducer = ( state = {recipes: []}, action) => 
{
    switch (action.type)
    {
        case "Add":
            // let recipeName = action.payload.label
            return {...state, recipes: [...state.recipes ,action.payload]}
        
        default:
            return state
    }
}

export default appReducer