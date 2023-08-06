import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

let value = {}

const Main = createContext(value)

export function MainCtxProvider(props) {

    const navigate = useNavigate()

    const [cart, setCart] = useState({
        items: [],
        showCart: false,
    })

    const [quantity, setQuantity] = useState({
        productQuantity: 1,
        cartQuantity: 1,
    })

    const [input, setInput] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        zip: '',
        city: '',
        country: '',
    })

    const [error, setError] = useState({
        success: true,
        submitted: false
    })

    const [emoney, setEmoney] = useState({
        number: '',
        pin: ''
    })

    const [formData, setFormdata] = useState({})

    const cartIsVisible = () => {
        setCart(p => ({ ...p, showCart: !cart.showCart }))
    }

    const incrementCart = (data) => {
        cart.items.forEach(el => {
            if (el.id === data.id) {
                el.quantity += 1
                setQuantity(p => ({ ...p, cartQuantity: el.quantity }))
            }
        })
    }

    const decrementCart = (data) => {
        cart.items.forEach(el => {
            if (el.id === data.id) {
                if (el.quantity <= 1) {
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
            productQuantity: 1,
            ...p,
            cartQuantity: data.quantity
        }))

        setCart(p => ({ ...p, showCart: true }))

       const id = cart.items.map(el => {
               return el.title1
        })

        if (id.includes(data.title1)) {
             cart.items.map(el => {
                if (el.title1 === data.title1) {
                    el.quantity += data.quantity
                    setQuantity(p => ({ ...p,
                    productQuantity: 1,
                    cartQuantity: el.quantity }))
                }
             })             
            return
        } else {
            cart.items.push(data)
        }
    }

    const removeAll = () => {
        setCart({ items: [], showCart: true })
    }

    const checkout = () => {
        if (cart.items.length === 0) return
        navigate("/checkout")
        setCart(p => ({ ...p, showCart: false }))
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setEmoney(p => ({ ...p, [name]: value }))
        setInput(p => ({ ...p, [name]: value }))
    }

    const handleSubmit = (grandTotal) => {
        if (cart.items.length === 0) return
        setFormdata(
            { ...input, ...cart.items, ...emoney, grandTotal })
        setError(p => ({ ...p, submitted: true }))
    }


    const home = () => {
        navigate("/")
        setError(p => ({ ...p, submitted: false }))
        setFormdata({})
        setCart({ items: [], showCart: false, })
        setQuantity({ productQuantity: 1, cartQuantity: 1, })
    }


    value = {
        cart, quantity, input, error, emoney, formData, setEmoney, setError, setInput,
        cartIsVisible, increment, decrement, addToCart, removeAll, incrementCart, decrementCart, checkout, handleChange, handleSubmit, home
    }

    return (
        <Main.Provider value={value}>
            {props.children}
        </Main.Provider>
    )
}


export default Main