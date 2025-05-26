import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/Products/$pid")({
  component: RouteComponent,
});

function RouteComponent() {
  const { pid } = Route.useParams();
  return (
    <div>
      Hello "/Products/$pid"!
      <h1>Thi should be the product id: {pid}</h1>
    </div>
  );
}
