const initialState = {
    products: [],
};
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        // Just for task reference
        case "product_add_to_cart":
            return {
                ...state,
                products: [...state.products, action.product],
            }

        default:
            return state;
    }
}
export default cartReducer;