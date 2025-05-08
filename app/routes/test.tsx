import type { Route } from "./+types/test";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Test Page" },
    { name: "description", content: "This is a test page" },
  ];
}

export default function Test() {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-2xl font-bold">Test Page</h1>
    </div>
  );
}