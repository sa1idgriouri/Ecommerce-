import { combineReducers } from "redux";
import authReduser from "./authReducer";
import cartReduser from "./cartReduser";

const routeReduces = combineReducers({
    auth : authReduser,
    cart :cartReduser
})


export default  routeReduces