"use client";
import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Car } from "lucide-react";
import { useSearch } from "@/hooks/useSearch";

const Result = () => {
  const { data, isError, isSuccess, isPending, mutate } = useSearch();
  const searchTextRef = useRef("");

  return (
    <div className={"h-screen mt-4"}>
      <Card className="">
        <CardHeader>
          <div className="flex justify-center">
            <Sparkles />
          </div>
          {/* <CardTitle>AI Search</CardTitle> */}
          <div className="w-full flex space-x-4 pt-2">
            <Input
              type="text"
              placeholder="Ask me..."
              className="flex-grow"
              onChange={(event) => {
                searchTextRef.current = event.target.value;
              }}
            />
            <Button
              onClick={() => {
                console.log({ searchTextRef: searchTextRef.current });
                if (searchTextRef.current) {
                  mutate(searchTextRef.current.trim());
                }
              }}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {!isPending && !isError && data && data.data.reply && (
            <Card className="bg-slate-950 text-white p-4">
              <div>{data.data.reply}</div>
            </Card>
          )}
        </CardContent>
        {!isPending && !isError && data && data.data.reply && (
          <CardFooter>
            Sources
            {data.data.sources.map((item) => {
              return (
                <>
                  "title":{item.title}
                  {" "}
                  "id":{item._id}
                </>
              );
            })}
          </CardFooter>
        )}
      </Card>
    </div>
  );
};
export default Result;
