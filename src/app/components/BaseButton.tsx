import { cn } from "@/utils/style";
import React from "react";

export const BaseButton = (
    props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
    return (
        <button
            className={cn(
                "w-full rounded-xl bg-highlight-700 text-light-300 py-3 text-sm font-medium cursor-pointer",
                props.className
            )}
            {...props}
        >
            {props.children}
        </button>
    );
};
