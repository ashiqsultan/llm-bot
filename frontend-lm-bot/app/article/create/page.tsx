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
    <Card>
      <CardHeader>
        <h2>Create Article</h2>
      </CardHeader>
      <CardContent>
        <Input
          className="my-2"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </CardContent>
      <CardFooter>
        <Button onClick={handleCreate}>Create</Button>
      </CardFooter>
    </Card>
  );
};

export default CreateArticle;
