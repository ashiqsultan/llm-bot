"use client";
import { Button } from "@/components/ui/button";
import { useArticle } from "@/hooks/useArticle";

export default function Home() {
  const { data, isLoading, isFetched } = useArticle();

  return (
    <>
      <p>Hello World</p>
      <Button>Button</Button>
      {isLoading ? "Loading..." : <div> {JSON.stringify({ data })}</div>}
    </>
  );
}
