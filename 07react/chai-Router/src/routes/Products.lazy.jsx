import { createLazyFileRoute, Link } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/Products')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Products"!

  <Link to="Products/1">Products/1 </Link>
  <br />
  <Link to="Products/2">Products/2 </Link>
  <br />
  <Link to="Products/3">Products/3 </Link>
  <br />
  </div>
}
