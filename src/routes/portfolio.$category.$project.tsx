import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio/$category/$project")({
  component: () => <div>Hello /portfolio/$category/$project!</div>,
});
