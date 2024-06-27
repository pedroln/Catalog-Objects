import { FunctionComponent, useEffect, useState } from 'react'
import useLocalStorageState from 'use-local-storage-state'

import classes from './products.module.scss'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

const API_URL = 'http://localhost:8080/objects'

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

export const Products: FunctionComponent = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState<Product[]>([])
  const [cart, setCart] = useLocalStorageState<CartProps>('cart', {})

  useEffect(() => {
    fetchData(API_URL)
  }, [])


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
    <section className={classes.productPage}>
      <h1>Products</h1>

      <div className={classes.container}>
        {products.map(objects => (

          <div className={classes.product} key={objects.objectId}>
            <img src={objects.image} alt={'product.image'} />
            <h3>{objects.description}</h3>
            <h3>${objects.price}</h3>
            <Stack alignItems="center" gap={1}>
              <button onClick={() => addToCart(objects)}>Add to Cart</button>
              <Link
                to={{
                  pathname: `/objectInfo/${objects.objectId}`
                }}>
                <button>Product Informations</button>
              </Link>
            </Stack>
          </div>

        ))}
      </div>
    </section>
  )
}