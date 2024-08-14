"use client";
import React from "react";
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

const Result = () => {
  return (
    <div className={"h-screen mt-4"}>
      <Card className="">
        <CardHeader>
          <div className="flex justify-center">
            <Sparkles />
          </div>
          {/* <CardTitle>AI Search</CardTitle> */}
          <div className="w-full flex space-x-4 pt-2">
            <Input type="text" placeholder="Ask me..." className="flex-grow" />
            <Button>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Card className="bg-slate-950 text-white p-4">
            <div>This is answer</div>
          </Card>
        </CardContent>
        <CardFooter>Sources</CardFooter>
      </Card>
    </div>
  );
};
export default Result;
