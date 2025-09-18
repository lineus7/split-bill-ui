import Link from "next/link";
import MobileBottomNav from "@/app/components/MobileBottomNav";

const participants = ["Alice", "Bob", "Charlie"];

export default function AddBillStep3Page() {
  return (
    <div className="min-h-dvh flex flex-col bg-highlight-300 pb-28">
      <header className="sticky top-0 z-10 h-14 bg-light-400 border-b flex items-center justify-center">
        <div className="absolute left-4">
          <Link href="/add-bill/step2" className="text-sm text-dark-400">Back</Link>
        </div>
        <h1 className="text-[14px] font-bold">Review Items</h1>
      </header>

      <main className="flex-1 p-4 space-y-4">
        {/* Items List */}
        <section className="space-y-3">
          {[1, 2, 3].map((i) => (
            <article key={i} className="rounded-2xl border border-light-600 bg-light-300 p-4 space-y-3">
              {/* Name + Price */}
              <div className="grid grid-cols-[1fr,110px] gap-3">
                <div className="space-y-1">
                  <label className="block text-xs text-dark-400">Item Name</label>
                  <input
                    type="text"
                    placeholder={`Item ${i}`}
                    className="w-full rounded-xl border border-light-600 bg-light-300 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-highlight-400"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs text-dark-400">Price</label>
                  <input
                    type="text"
                    placeholder="Rp 0"
                    className="w-full rounded-xl border border-light-600 bg-light-300 px-3 py-2.5 text-sm text-right outline-none focus:ring-2 focus:ring-highlight-400"
                  />
                </div>
              </div>

              {/* Subitems (optional) */}
              <div className="space-y-2">
                <p className="text-xs text-dark-400">Subitems (optional)</p>
                <div className="space-y-2">
                  {[1, 2].map((sidx) => (
                    <div key={sidx} className="grid grid-cols-[1fr,110px] gap-3">
                      <input
                        type="text"
                        placeholder={`Subitem ${sidx}`}
                        className="w-full rounded-xl border border-light-600 bg-light-300 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-highlight-400"
                      />
                      <input
                        type="text"
                        placeholder="Rp 0"
                        className="w-full rounded-xl border border-light-600 bg-light-300 px-3 py-2.5 text-sm text-right outline-none focus:ring-2 focus:ring-highlight-400"
                      />
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  className="mt-1 w-full rounded-lg border border-light-600 bg-light-300 px-3 py-2 text-xs font-medium"
                >
                  + Add Subitem
                </button>
              </div>

              {/* Assign Participants */}
              <div className="space-y-2">
                <p className="text-xs text-dark-400">Assign to</p>
                <div className="rounded-xl border border-light-600 bg-light-300 divide-y divide-light-600">
                  {participants.map((name) => (
                    <label key={name} className="flex items-center justify-between px-3 py-2">
                      <span className="text-sm">{name}</span>
                      <input type="checkbox" className="h-5 w-5 accent-highlight-700" />
                    </label>
                  ))}
                </div>
              </div>

              {/* Delete */}
              <div className="flex justify-end">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-lg border border-error-dark/40 bg-error-light/30 px-3 py-2 text-xs text-error-dark"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="2" d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2m-1 0v13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6h10Z" />
                  </svg>
                  Delete Item
                </button>
              </div>
            </article>
          ))}
        </section>

        {/* Add Item */}
        <button
          type="button"
          className="w-full rounded-xl border border-light-600 bg-light-300 px-4 py-3 text-sm font-medium"
        >
          + Add Item
        </button>

        {/* Summary */}
        <section className="rounded-2xl border border-light-600 bg-light-300 p-4 space-y-3">
          <div className="grid grid-cols-[1fr,120px] items-center gap-3">
            <label className="text-sm text-dark-400">Subtotal</label>
            <input
              readOnly
              value="Rp 0"
              className="w-full rounded-xl border border-light-600 bg-light-300 px-3 py-2.5 text-sm text-right outline-none"
            />
          </div>
          <div className="grid grid-cols-[1fr,120px] items-center gap-3">
            <label className="text-sm">Tax</label>
            <input
              type="text"
              placeholder="Rp 0"
              className="w-full rounded-xl border border-light-600 bg-light-300 px-3 py-2.5 text-sm text-right outline-none focus:ring-2 focus:ring-highlight-400"
            />
          </div>
          <div className="grid grid-cols-[1fr,120px] items-center gap-3">
            <label className="text-sm">Service Charge / Tip</label>
            <input
              type="text"
              placeholder="Rp 0"
              className="w-full rounded-xl border border-light-600 bg-light-300 px-3 py-2.5 text-sm text-right outline-none focus:ring-2 focus:ring-highlight-400"
            />
          </div>
          <div className="grid grid-cols-[1fr,120px] items-center gap-3">
            <label className="text-sm text-dark-400">Total</label>
            <input
              readOnly
              value="Rp 0"
              className="w-full rounded-xl border border-light-600 bg-light-300 px-3 py-2.5 text-sm text-right outline-none"
            />
          </div>
        </section>
      </main>

      {/* Finish Button (above nav) */}
      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 w-full max-w-md px-4 z-20">
        <button
          type="button"
          className="w-full rounded-xl bg-highlight-700 text-light-300 py-3 text-sm font-medium shadow"
        >
          Finish &amp; Split
        </button>
      </div>

      <MobileBottomNav active="add" />
    </div>
  );
}
