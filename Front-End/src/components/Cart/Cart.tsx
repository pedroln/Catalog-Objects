import { FunctionComponent, useEffect } from 'react'
import useLocalStorageState from 'use-local-storage-state'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

import classes from './cart.module.scss'
import { useLocation } from 'react-router-dom'
import { CartProps } from '../Products/Products'
import { Operation, Quantifier } from '../Quantifier/Quantifier'
import { TotalPrice } from '../TotalPrice/TotalPrice'
import { Stack } from '@mui/material';

export const months = [
    {
        value: "January",
        text: "January"
    },
    {
        value: "February",
        text: "February"
    },
    {
        value: "March",
        text: "March"
    },
    {
        value: "April",
        text: "April"
    },
    {
        value: "May",
        text: "May"
    },
    {
        value: "June",
        text: "June"
    },
    {
        value: "July",
        text: "July"
    },
    {
        value: "August",
        text: "August"
    },
    {
        value: "September",
        text: "September"
    },
    {
        value: "October",
        text: "October"
    },
    {
        value: "November",
        text: "November"
    },
    {
        value: "December",
        text: "December"
    },
]


export const Cart: FunctionComponent = () => {
    const [cart, setCart] = useLocalStorageState<CartProps>('cart', {})
    const location = useLocation()


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    const handleRemoveProduct = (productId: string): void => {
        setCart((prevCart) => {
            const updatedCart = { ...prevCart }
            delete updatedCart[productId]
            return updatedCart
        })
    }

    const monthsSelect = months.map(item => (
        <MenuItem value = {item.value}>{item.text}</MenuItem>
    ))

    const handleUpdateQuantity = (productId: string, operation: Operation) => {
        setCart((prevCart) => {
            const updatedCart = { ...prevCart }
            if (updatedCart[productId]) {
                if (operation === 'increase') {
                    updatedCart[productId] = { ...updatedCart[productId], quantity: updatedCart[productId].quantity + 1 }
                } else {
                    updatedCart[productId] = { ...updatedCart[productId], quantity: updatedCart[productId].quantity - 1 }
                }
            }
            return updatedCart
        })
    }


    

   


    const getProducts = () => Object.values(cart || {})

    const totalPrice = getProducts().reduce((accumulator, product) => accumulator + (product.price * product.quantity), 0)

    return (
        <section className={classes.cart}>
            <Stack direction="row" className={classes.containerInfos}>

                <Stack spacing={3} className={classes.containerPayment}>
                    <h1>Checkout Information</h1>

                    <Stack spacing={2}>
                        <h4>Personal Information</h4>
                        <Stack className={classes.stack} direction="row" spacing={2}>
                            <TextField className={classes.stack} id="outlined-basic" label="First Name" variant="outlined" />
                            <TextField className={classes.stack} id="outlined-basic" label="Last Name" variant="outlined" />
                        </Stack>
                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                    </Stack>
                    <Stack spacing={2}>
                        <h4>Shipping Information</h4>
                        <Stack className={classes.stack} direction="row" spacing={2}>

                            <TextField className={classes.stack} id="outlined-basic" label="Address" variant="outlined" />
                            <FormControl sx={{ minWidth: 300 }}>
                                <InputLabel id="demo-simple-select-autowidth-label">Country</InputLabel>
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"

                                    autoWidth
                                    label="Country"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'USA'}>USA</MenuItem>
                                    <MenuItem value={'Brazil'}>Brazil</MenuItem>
                                    <MenuItem value={'Korea'}>Korea</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>
                        <Stack className={classes.stack} direction="row" spacing={2}>
                            <TextField className={classes.stack} id="outlined-basic" label="Town/City" variant="outlined" />
                            <TextField className={classes.stack} id="outlined-basic" label="ZIP/Postal Code" variant="outlined" />
                        </Stack>
                    </Stack>

                    <Stack spacing={2}>
                    <h4>Payment Information</h4>

                    <TextField id="outlined-basic" label="Credit Card Number" variant="outlined" />
                    <Stack direction="row" spacing={2}>
                        <FormControl sx={{ minWidth: 150 }}>
                            <InputLabel id="demo-simple-select-autowidth-label">Month</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"

                                autoWidth
                                label="Country"
                            >
                                {monthsSelect}
                            </Select>
                        </FormControl>
                        <FormControl sx={{ minWidth: 150 }}>
                            <InputLabel id="demo-simple-select-autowidth-label">Year</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"

                                autoWidth
                                label="Country"
                            >
                           
                                <MenuItem value={2019}>2019</MenuItem>
                                <MenuItem value={2020}>2020</MenuItem>
                                <MenuItem value={2021}>2021</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField id="outlined-basic" label="CVC" variant="outlined" />
                    </Stack>
                    </Stack>
                </Stack>


                <Stack className={classes.containerObjects}>
                    <h1>Cart</h1>

                    {getProducts().map(product => (
                        <Stack direction="row" className={classes.product} key={product.objectId}>
                            <img src={product.image} alt={product.description} />
                            <h3>{product.description}</h3>
                            <Quantifier
                                removeProductCallback={() => handleRemoveProduct(product.objectId)}
                                productId={product.objectId}
                                handleUpdateQuantity={handleUpdateQuantity} />
                        </Stack>
                    ))}
                    <TotalPrice amount={totalPrice} />
                    <button disabled={Object.getOwnPropertyNames(cart).length === 0}>CHECKOUT</button>
                </Stack>
                


            </Stack>
        </section>
    )
}