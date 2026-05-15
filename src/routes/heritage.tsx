import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/heritage")({
  component: () => <div>Hello /heritage!</div>,
});
