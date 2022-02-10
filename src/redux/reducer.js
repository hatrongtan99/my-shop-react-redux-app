const initState = {
    cartProduct: [],
    toggleCartModal: false,
    textSearch: null,
}


const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'cartProduct/addProductToCart': 
            const currentProduct = [...state.cartProduct];
            const productDulticate = currentProduct.find(item => (
                item.id === action.payload.id &&
                    item.size === action.payload.size
                ))

            if (productDulticate) return {
                ...state,
                cartProduct: state.cartProduct.map(item => 
                    item.id === action.payload.id && item.size === action.payload.size ? 
                    {...item,
                        quantity: item.quantity + action.payload.quantity
                    } : 
                    item
                )
            }
            return {
                ...state,
                cartProduct: [...state.cartProduct, action.payload]
            }
        
        case 'cartProduct/deleteProductFromCart':
            const newCartProduct = [...state.cartProduct];
            newCartProduct.splice(action.payload, 1)
            return {
                ...state,
                cartProduct: newCartProduct
            }

        case 'cartProduct/updateProductQuantity':
            const currentCartProduct = [...state.cartProduct];
            const itemAjustQuantity = currentCartProduct.find(item => item.id === action.payload.id);
           
            if (itemAjustQuantity) {
                return {
                    ...state,
                    cartProduct: state.cartProduct.map(item => 
                        item.id === action.payload.id ? 
                        {
                            ...item,
                            quantity: action.payload.quantity
                        } : item
                        )
                }
            } else 
            return {
                ...state,
                cartProduct: [...state.cartProduct]
            }
            
            
        case 'toggleCartModal/toggleCart':
            return {
                ...state,
                toggleCartModal: action.payload
            }
            
        case 'searchProduct':
            return {
                ...state,
                textSearch: action.payload
            }

        default: return state
    }
}


export default rootReducer;