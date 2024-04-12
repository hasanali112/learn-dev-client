import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TChildren = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TChildren) => {
  return (
    <div
      className={cn(
        `w-full md:max-w-[1024px] lg:max-w-[1280px] mx-auto`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
