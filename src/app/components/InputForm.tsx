import { BaseInput } from "@/app/components/BaseInput";
import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

export const InputForm = ({ label, error, ...props }: Props) => {
    return (
        <div className="space-y-1">
            <label className="block text-sm text-dark-400">{label}</label>
            <BaseInput type="text" {...props} />
            {error && <p className="text-xs text-red-400">{error}</p>}
        </div>
    );
};
