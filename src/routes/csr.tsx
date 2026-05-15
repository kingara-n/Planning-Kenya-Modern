import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/csr")({
  component: () => <div>Hello /csr!</div>,
});
