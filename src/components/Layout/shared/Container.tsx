import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TChildren = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TChildren) => {
  return (
    <div className={cn(`w-full max-w-7xl mx-auto`, className)}>{children}</div>
  );
};

export default Container;