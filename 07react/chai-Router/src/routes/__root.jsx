import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { useCartStore } from '../store/cartStore'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const cartCount = useCartStore((state) = state.cart.length)
  const addToCart = useCartStore((state) => state.addToCart)
  return (
    <React.Fragment>
      <div>Hello "__root"!</div>
      <Outlet />
    </React.Fragment>
  )
}
