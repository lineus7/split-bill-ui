import { BaseText } from "@/components/BaseText";
import SearchIcon from "@mui/icons-material/Search";

export default function DashboardPage() {
    return (
        <div className="h-screen flex flex-col">
            <header className="bg-lime-100 relative h-[56px] flex justify-center items-center">
                <BaseText variant="heading">Transactions</BaseText>
                <div className="absolute right-2 h-full flex items-center">
                    <SearchIcon
                        className="text-highlight-700"
                        fontSize="large"
                    />
                </div>
            </header>
            <main className="flex-1 bg-light-300"></main>
            <footer className="h-[72px] bg-dark-300"></footer>
        </div>
    );
}
