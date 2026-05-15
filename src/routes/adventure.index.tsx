import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/adventure/")({
  component: () => <div>Hello /adventure/!</div>,
});
