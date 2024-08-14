import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function ArticleCreateSuccess() {
  return (
    <Alert variant={"default"} className="border border-green-600">
      <AlertCircle className="h-4 w-4 text-green-600" color="rgb(22 163 74)" />
      <AlertTitle className={"text-green-600"}>Success</AlertTitle>
      <AlertDescription className={"text-green-600"}>
        Article Created Successfully
      </AlertDescription>
    </Alert>
  );
}

export default ArticleCreateSuccess;
