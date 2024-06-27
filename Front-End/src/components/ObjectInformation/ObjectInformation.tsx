import { FunctionComponent, useEffect, useState } from 'react'
import useLocalStorageState from 'use-local-storage-state'
import classes from './object-information.module.scss'

import { useParams } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';


export type Product = {
  objectId: string
  image: string
  description: string
  measure: number
  price: number
  weight: number
  quantity: number
}

export interface CartProps {
  [objectId: string]: Product
}

export const ObjectInformation: FunctionComponent = () => {
  const { id } = useParams()

  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState<Product>()
  const [cart, setCart] = useLocalStorageState<CartProps>('cart', {})

  useEffect(() => {
    fetchData(`http://localhost:8080/objects/${id}`)
  }, [id])


  async function fetchData(url: string) {
    try {
      const response = await fetch(url)
      if (response.ok) {
        const data = await response.json()
        setProducts(data)
      } else {

        setIsLoading(false)
      }
    } catch (error) {
      setIsLoading(false)
    }
  }

  const addToCart = (product: Product): void => {
    product.quantity = 1
    setCart((prevCart) => ({

      ...prevCart,
      [product.objectId]: product,
    }))
  }


  return (
    <section className={classes.infos}>

      {products !== undefined
        ?
        <Stack alignItems="flex-start" justifyContent="flex-start" direction="row" className={classes.containerInfos}>
          <img src={products.image} alt={'product'} />
          <Stack className={classes.containerObjects}>
            <Typography variant="h2">
              {products.description}
            </Typography>
            <Typography variant = "h4">
              Object Informations
            </Typography>
            <Typography variant="h5">
              Measure: {products.measure}cm
            </Typography>
            <Typography variant="h5">
              Weight: {products.weight}kg
            </Typography>
            <Typography variant="h4">
              Price: ${products.price}
            </Typography>
            <button onClick={() => addToCart(products)}>Add to Cart</button>

          </Stack>

        </Stack>
        
        :

        <div> Loading </div>}


    </section>
  )
}