import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/app/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return ( <div>
    Hello "/app/dashboard"!


    <h1>This is the dashboard</h1>

    <li>
      <Link to ="app/routes">App Routes</Link>
    </li>
    <Outlet />
  </div>
  )
}
