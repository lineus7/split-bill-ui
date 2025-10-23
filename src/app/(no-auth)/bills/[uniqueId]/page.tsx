import Link from "next/link";

export default function BillDetailPage({ params }: { params: { id: string } }) {
    // Placeholder data
    const bill = {
        name: "Dinner with Team",
        date: "Sep 15, 2025",
        total: "Rp 450.000",
    };
    const people = [
        {
            name: "Alice",
            total: "Rp 150.000",
            items: [
                {
                    name: "Sushi Set A",
                    price: "Rp 100.000",
                    subitems: [{ name: "Miso Soup", price: "Rp 10.000" }],
                },
                { name: "Green Tea", price: "Rp 10.000", subitems: [] },
            ],
            charges: {
                tax: "Rp 5.000",
                service: "Rp 3.000",
                others: "Rp 2.000",
            },
        },
        {
            name: "Bob",
            total: "Rp 150.000",
            items: [
                {
                    name: "Sushi Set B",
                    price: "Rp 120.000",
                    subitems: [{ name: "Green Tea", price: "Rp 10.000" }],
                },
            ],
            charges: {
                tax: "Rp 5.000",
                service: "Rp 3.000",
                others: "Rp 2.000",
            },
        },
        {
            name: "You",
            total: "Rp 150.000",
            items: [{ name: "Grab Ride", price: "Rp 80.000", subitems: [] }],
            charges: {
                tax: "Rp 5.000",
                service: "Rp 3.000",
                others: "Rp 2.000",
            },
        },
    ];

    return (
        <div className="min-h-dvh flex flex-col bg-highlight-300">
            <header className="sticky top-0 z-10 h-14 bg-light-400 border-b flex items-center justify-center">
                <div className="absolute left-4">
                    <Link href="/dashboard" className="text-sm text-dark-400">
                        Back
                    </Link>
                </div>
                <h1 className="text-[14px] font-bold">Bill Details</h1>
            </header>

            <main className="flex-1 p-4 space-y-4">
                {/* Summary */}
                <section className="rounded-2xl border border-light-600 bg-light-300 p-4">
                    <div className="flex items-start justify-between">
                        <div>
                            <h2 className="text-sm font-semibold">
                                {bill.name}
                            </h2>
                            <p className="text-xs text-dark-400 mt-0.5">
                                {bill.date}
                            </p>
                            <p className="mt-2 text-xs text-dark-400">
                                Bill ID: {params.id}
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-semibold text-dark-700">
                                {bill.total}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Per-person breakdown (accordion) */}
                <section>
                    <h3 className="text-sm font-semibold mb-2">People</h3>
                    <div className="space-y-3">
                        {people.map((p) => (
                            <details
                                key={p.name}
                                className="group rounded-2xl border border-light-600 bg-light-300"
                            >
                                <summary className="px-4 py-3 flex items-center justify-between cursor-pointer list-none">
                                    <div className="flex items-center gap-3">
                                        <div className="h-8 w-8 rounded-full bg-highlight-400 text-light-700 flex items-center justify-center text-xs font-bold">
                                            {p.name[0]}
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">
                                                {p.name}
                                            </p>
                                            <p className="text-xs text-dark-400">
                                                Tap to view details
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-semibold text-dark-700">
                                            {p.total}
                                        </p>
                                    </div>
                                </summary>
                                <div className="px-4 pb-4 space-y-4">
                                    {/* Items */}
                                    <div className="space-y-2">
                                        {p.items.map((it, idx) => (
                                            <div
                                                key={idx}
                                                className="rounded-xl border border-light-600 bg-light-300 p-3"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <p className="text-sm font-medium">
                                                        {it.name}
                                                    </p>
                                                    <p className="text-sm font-semibold text-dark-700">
                                                        {it.price}
                                                    </p>
                                                </div>
                                                {it.subitems?.length ? (
                                                    <div className="mt-2 space-y-1">
                                                        {it.subitems.map(
                                                            (si, sidx) => (
                                                                <div
                                                                    key={sidx}
                                                                    className="flex items-center justify-between text-xs"
                                                                >
                                                                    <span className="text-dark-400">
                                                                        -{" "}
                                                                        {
                                                                            si.name
                                                                        }
                                                                    </span>
                                                                    <span className="font-medium">
                                                                        {
                                                                            si.price
                                                                        }
                                                                    </span>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                ) : null}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Charges */}
                                    <div className="rounded-xl border border-light-600 bg-light-300 p-3 space-y-1">
                                        <p className="text-xs text-dark-400">
                                            Charges
                                        </p>
                                        <div className="flex items-center justify-between text-sm">
                                            <span>Tax</span>
                                            <span className="font-medium">
                                                {p.charges.tax}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span>Service</span>
                                            <span className="font-medium">
                                                {p.charges.service}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span>Others</span>
                                            <span className="font-medium">
                                                {p.charges.others}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </details>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
