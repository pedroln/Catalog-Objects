import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import useLocalStorageState from 'use-local-storage-state'
import logo from '../../assets/shopping-bag-svgrepo-com.svg'


import { CartProps } from '../Products/Products'
import classes from './header.module.scss'
import { CartWidget } from '../CartWidget/CartWidget'

export const Header: FunctionComponent = () => {



  const [cart,] = useLocalStorageState<CartProps>('cart', {})



  const productsCount: number = Object.keys(cart || {}).length

  return (
    <header className={classes.header}>
      <div>
        <Link to="/">
          <img src={logo} className={classes.logo} alt="Shopping Cart Application" />
        </Link>
      </div>
      <div>
        <CartWidget productsCount={productsCount} />
      </div>
    </header>
  )
}