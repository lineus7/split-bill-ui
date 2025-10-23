"use client";

import { useState } from "react";
import Loading from "@/app/components/Loading";
import MobileBottomNav from "@/app/components/MobileBottomNav";
import { MobileHeader } from "@/app/components/MobileHeader";
import { BillImagePicker } from "./components/BillImagePicker";
import { BillImagePreview } from "./components/BillImagePreview";
import { toast } from "@/utils/toast";

export default function AddBillStep2Page() {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
        setImageFile(file);
    };

    const handleRetake = () => {
        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
        }
        setPreviewUrl(null);
        setImageFile(null);
    };

    // const handleUpload = async () => {
    //     if (!imageFile) {
    //         toast.error("No image selected.");
    //         return;
    //     }
    // };

    return (
        <div className="min-h-dvh flex flex-col bg-highlight-300 pb-24">
            <MobileHeader
                title="Upload Receipt"
                backUrl="/add-bill/step1"
                showBackButton
            />

            <main className="flex-1 p-4">
                {!previewUrl ? (
                    <BillImagePicker handleFileChange={handleFileChange} />
                ) : (
                    <BillImagePreview
                        previewUrl={previewUrl}
                        handleRetake={handleRetake}
                    />
                )}

                {/* <Loading /> */}
            </main>

            <MobileBottomNav active="add" />
        </div>
    );
}
