const totalPriceProduct = (data) => {
    if (data.length > 0) {
     const priceData = data.map(item => item.price * item.quantity);
        return priceData.reduce((acc, item) => acc + item, 0)
    } else {
        return 0
    }
}

export { totalPriceProduct }