export const toggleCart = (data) => {
    return {
        type: 'toggleCartModal/toggleCart',
        payload: data
    }
}

export const addProductToCart = (data) => {
    return {
        type: 'cartProduct/addProductToCart',
        payload: data
    }
}

export const deleteProductFromCart = (data) => {
    return {
        type: 'cartProduct/deleteProductFromCart',
        payload: data
    }
}


export const updateProductQuantity = (data) => {
    return {
        type: 'cartProduct/updateProductQuantity',
        payload: data
    }
}

export const searchProduct = (data) => {
    return {
        type: 'searchProduct',
        payload: data
    }
}