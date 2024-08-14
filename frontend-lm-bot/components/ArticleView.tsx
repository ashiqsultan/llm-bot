import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface DialogComponentProps {
  isOpen: boolean;
  onClose: () => void;
  article: any;
}

const DialogComponent: React.FC<DialogComponentProps> = ({
  isOpen,
  onClose,
  article,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{article.title}</DialogTitle>
          <DialogDescription>ID: {article._id}</DialogDescription>
        </DialogHeader>
        <p>{article.content}</p>
      </DialogContent>
    </Dialog>
  );
};

export default DialogComponent;
