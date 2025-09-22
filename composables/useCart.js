export const useCart = () => {
    const { addMessage } = useMessage()
    const currentUserEmail = useState('currentUserEmail')
    const currentUserCart = useState('currentUserCart', () => ({}))
    if (import.meta.client) {
        const saved = localStorage.getItem('currentUserCart')
        if (saved) {
            currentUserCart.value = JSON.parse(saved)
        }
    }
    const addToCart = (productItem) => {
        if (!currentUserCart.value[currentUserEmail.value]) {
            currentUserCart.value[currentUserEmail.value] = []
        }
        const product = currentUserCart.value[currentUserEmail.value].find(cartItems => cartItems.id === productItem.id);
        if (!product) {
            currentUserCart.value[currentUserEmail.value].push({ ...productItem, amount: 1 })
            localStorage.setItem('currentUserCart', JSON.stringify(currentUserCart.value))
            addMessage('成功加入購物車')
        } else if (product.amount >= 10) {
            addMessage('商品數量超過限制');
        } else {
            product.amount += 1
            localStorage.setItem('currentUserCart', JSON.stringify(currentUserCart.value))
            addMessage('成功加入購物車');
        }
    }

    const minusAmount = (item) => {
        if (item.amount > 1) {
            item.amount -= 1
            localStorage.setItem('currentUserCart', JSON.stringify(currentUserCart.value))
        }
    }

    const addAmount = (item) => {
        if (item.amount < 10) {
            item.amount += 1
            localStorage.setItem('currentUserCart', JSON.stringify(currentUserCart.value))
        }
    }

    const deleteItem = (item) => {
        currentUserCart.value[currentUserEmail.value] = currentUserCart.value[currentUserEmail.value].filter(cartItem => cartItem.id !== item.id);
        localStorage.setItem('currentUserCart', JSON.stringify(currentUserCart.value))
    }

    const handleCheckout = () => {
        currentUserCart.value[currentUserEmail.value] = []
        localStorage.setItem('currentUserCart', JSON.stringify(currentUserCart.value))
    }

    return {
        addToCart,
        minusAmount,
        addAmount,
        deleteItem,
        handleCheckout
    }
}

