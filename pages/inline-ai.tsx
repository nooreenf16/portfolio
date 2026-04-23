import PromptInfoPage from "../components/PromptInfo";
import SavedResponsesPage from "../components/SavedResp";
import "../app/globals.css";

export default function DocsHome() {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow-sm">
                <div className="max-w-5xl mx-auto px-6 py-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Inline AI
                    </h1>
                    <p className="text-gray-600 mt-1">
                        Creator: Nooreen Fatima
                    </p>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-10 space-y-12">
                <section>
                    <PromptInfoPage />
                </section>

                <section>
                    <SavedResponsesPage />
                </section>
            </main>

            <footer className="text-center text-sm text-gray-500 py-6">
                © {new Date().getFullYear()} Inline AI
            </footer>
        </div>
    );
}