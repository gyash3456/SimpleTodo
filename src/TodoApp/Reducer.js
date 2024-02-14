export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload];
        case "DELETE_TODO": {
            const newList = state.filter((ele) => ele.id !== action.payload.id);
            return [...newList];
        }
        default:
            return state;
    }
};
