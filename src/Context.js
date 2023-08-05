import { createContext, useState } from "react";

let value = {}

const Main = createContext(value)

export function MainCtxProvider(props) {

    const [cart, setCart] = useState({
        items: [],
        showCart: false,
    })

    const [quantity, setQuantity] = useState({
        productQuantity: 1,
        cartQuantity: 1,
    })

    const cartIsVisible = () => {
        setCart(p => ({ ...p, showCart: !cart.showCart }))
    }

    const incrementCart = (data) => {
        cart.items.forEach(el => {
            if (el.id === data.id) {
                if (el.quantity === 0){

                }
                el.quantity += 1
                setQuantity(p => ({ ...p, cartQuantity: el.quantity }))

            }
        })
    }

    const decrementCart = (data) => {
        cart.items.forEach(el => {
            if (el.id === data.id) {
                if (el.quantity === 1){
                    cart.items.pop(el)
                }
                el.quantity -= 1
                setQuantity(p => ({ ...p, cartQuantity: el.quantity }))
            }
        })
    }

    const increment = () => {
        setQuantity(p => ({ ...p, productQuantity: quantity.productQuantity + 1 }))
    }

    const decrement = () => {
        setQuantity(p => ({
            ...p,
            productQuantity: quantity.productQuantity === 1 ? 1 - 0 : quantity.productQuantity - 1
        }))
    }

    const addToCart = (data) => {

        setQuantity(p => ({
            ...p,
            productQuantity: 1,
            cartQuantity: data.quantity
        }))

        cart.items.push(data)

        setCart(p => ({ ...p, showCart: true }))
    }

    const removeAll = () => {
        setCart({ items: [], showCart: true })
    }

    value = {
        cart, quantity,
        cartIsVisible, increment, decrement, addToCart, removeAll, incrementCart, decrementCart
    }

    return (
        <Main.Provider value={value}>
            {props.children}
        </Main.Provider>
    )
}


export default Main