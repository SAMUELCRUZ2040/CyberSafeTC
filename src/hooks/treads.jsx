import { cn } from "@/utils/cn";
import React from "react";

export const Treads = ()=>{ 
 return(
  <div className="absolute top-0 left-0 flex h-[80vh] w-full items-center justify-center">
      <div
        className={cn(
          "w-full h-[80vh] inset-0",
          "[background-size:30px_30px]",
          "[background-image:radial-gradient(#00000084,transparent_1px)]",
          "dark:[background-image:radial-gradient(#0000_1px,transparent_1px)]",
        )}
      />
    </div>
 )
};
