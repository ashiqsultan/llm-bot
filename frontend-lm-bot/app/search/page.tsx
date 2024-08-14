import React from "react";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardFooter,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Library, Pencil, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const SearchPage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-full max-w-lg p-6">
        <CardHeader>
          <div className="flex justify-center">
            <Sparkles />
          </div>
          <CardTitle>AI Search</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full flex space-x-4">
            <Input type="text" placeholder="Ask me..." className="flex-grow" />
            <Button>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pt-4">
          <Button variant="outline">
            <Library className="mr-2 h-4 w-4" />
            <Link href="/">View All Articles</Link>
          </Button>
          <Button>
            <Pencil className="mr-2 h-4 w-4" />
            <Link href="/article/create">Create New Article</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SearchPage;
