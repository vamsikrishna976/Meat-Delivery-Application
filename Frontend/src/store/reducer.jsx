import {
    ISlOGGEDOUT,
    ISLOGGEDIN,
} from "./action";

let first_name = "";
let last_name = "";
let isLoggedIn = false;

if (sessionStorage.getItem("token")) {
    first_name = sessionStorage.getItem("first_name");
    last_name = sessionStorage.getItem("last_name");
    isLoggedIn = true;
}


const intialState = {
    first_name: first_name,
    last_name: last_name,
    isLoggedIn: isLoggedIn,
};

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case ISLOGGEDIN:
            return {
                ...state,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                isLoggedIn: true,
            };
        case ISlOGGEDOUT:
            return {
                ...state,
                first_name: "",
                last_name: "",
                isLoggedIn: false,
                role: "",
            };
        default:
            return state;
    }
};

export default reducer;
