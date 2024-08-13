"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CreateArticle = () => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const handleCreate = () => {
    console.log({ title, content });
  };

  return (
    <div className="w-full">
      <Card className="p-4">
        <CardHeader>
          <h2 className="text-xl font-semibold">Create Article</h2>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-40 p-2 border border-gray-300 rounded"
          />
        </CardContent>
        <CardFooter>
          <Button onClick={handleCreate} className="mt-4">
            Create
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CreateArticle;
