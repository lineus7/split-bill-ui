import React from "react";
import Link from "next/link";

interface MobileHeaderProps {
    title: string;
    backUrl?: string;
    showBackButton?: boolean;
}

export const MobileHeader = ({
    title,
    backUrl = "/dashboard",
    showBackButton = false,
}: MobileHeaderProps) => {
    return (
        <header className="sticky top-0 z-10 h-14 bg-light-400 border-b flex items-center justify-center">
            {showBackButton && (
                <div className="absolute left-4">
                    <Link href={backUrl} className="text-sm text-dark-400">
                        Back
                    </Link>
                </div>
            )}
            <h1 className="text-[14px] font-bold">{title}</h1>
        </header>
    );
};
