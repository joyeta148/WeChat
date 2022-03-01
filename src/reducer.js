export const initialState = {
    user: null,
};

//push information into the data layer
export const actionTypes = {
    SET_USER: "SET_USER",
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,   //keep the state of the data as it is
                user: action.user,  //change the user
            };
        default:
            return state;
    }
};

export default reducer;