import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio/$category/")({
  component: () => <div>Hello /portfolio/$category/!</div>,
});
