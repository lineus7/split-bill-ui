import MobileBottomNav from "@/app/components/MobileBottomNav";
import { MobileHeader } from "@/app/components/MobileHeader";
import BillParticipantForm from "./components/BillParticipantForm";

export default function AddBillStep1Page() {
    return (
        <div className="min-h-dvh flex flex-col bg-highlight-300 pb-28">
            <MobileHeader title="Create Bill" backUrl="/dashboard" />
            <BillParticipantForm />
            <MobileBottomNav active="add" />
        </div>
    );
}
