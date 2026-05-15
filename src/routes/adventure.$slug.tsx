import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/adventure/$slug")({
  component: () => <div>Hello /adventure/$slug!</div>,
});
