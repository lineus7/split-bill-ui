import { cn } from "@/utils/style";
import React from "react";

export const BaseInput = (
    props: React.InputHTMLAttributes<HTMLInputElement>
) => {
    return (
        <input
            {...props}
            className={cn(
                "w-full rounded-xl border border-light-600 bg-light-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-highlight-400",
                props.className
            )}
        />
    );
};
