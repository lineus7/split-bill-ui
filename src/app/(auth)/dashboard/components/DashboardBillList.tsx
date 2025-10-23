import Link from "next/link";
import { formatRupiah } from "@/utils/common";
import { DateTime } from "luxon";
import { transactionService } from "@/services/transactionServices";

export const DashboardBillList = async ({ search }: { search: string }) => {
    const response = await transactionService.getList(search);
    return (
        <div className="space-y-3">
            {response.Data.map((b) => (
                <Link href={`/bills/${b.ID}`} key={b.ID} className="block">
                    <article className="rounded-2xl border border-light-600 bg-light-300 p-4 hover:bg-light-400 transition-colors">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-sm font-semibold">
                                    {b.Title}
                                </h3>
                                <p className="text-xs text-dark-400 mt-0.5">
                                    {DateTime.fromISO(
                                        b.CreatedAt
                                    ).toLocaleString(DateTime.DATE_MED)}
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-semibold text-dark-700">
                                    {formatRupiah(b.TotalPrice)}
                                </p>
                            </div>
                        </div>
                    </article>
                </Link>
            ))}
        </div>
    );
};
