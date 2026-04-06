export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10 font-sans">
      {/* Header Section */}
      <header className="border-b border-gray-200 pb-8 mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Tabitha Hung</h1>
        <p className="text-gray-600 mt-2">Supply Chain Management & Business Analytics Student</p>
      </header>

      {/* Education Section */}
      <section>
        <h2 className="text-xl font-semibold uppercase tracking-wide text-gray-500 mb-4">Education</h2>
        <div className="mb-6">
          <h3 className="text-lg font-bold">University of South Florida</h3>
          <p className="text-gray-700">B.S. in Supply Chain Management | Expected May 2026</p>
        </div>
      </section>
    </main>
  );
}