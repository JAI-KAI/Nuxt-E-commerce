export const useCart = () => {
    const cartItems = useState('cartItems');
    
    const minusAmount = (item) => {
        if (item.amount > 1) {
            item.amount -= 1
        }
    };
    
    const addAmount = (item) => {
        if (item.amount < 10) {
            item.amount += 1
        }
    };

    const deleteItem = (item) => {
        cartItems.value = cartItems.value.filter(cartItem => cartItem.id !== item.id);
    };

    return {
        minusAmount,
        addAmount,
        deleteItem
    };
};

