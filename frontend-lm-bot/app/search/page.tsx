import React from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SearchPage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-full max-w-lg p-6">
        <div className="space-y-4">
        <h2 className="text-xl font-bold text-center">AI Search</h2>
          <div className="flex space-x-2">
            <Input type="text" placeholder="Ask me..." className="flex-grow" />
            <Button>{"->"}</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SearchPage;
