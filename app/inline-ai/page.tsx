import PromptInfoPage from "../../components/PromptInfo";
import SavedResponsesPage from "../../components/SavedResp";
import "../../app/globals.css";

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


                {/* PREVIEW IMAGES SECTION */}
                <section className="bg-white rounded-xl shadow p-6 space-y-4">
                    <h2 className="text-xl font-semibold text-gray-900">
                        Preview
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <img
                            src="/assets/2.jpg"
                            alt="Inline AI popup on text selection"
                            className="rounded-lg border shadow-sm"
                        />

                        <img
                            src="/assets/3.jpg"
                            alt="Saved responses page"
                            className="rounded-lg border shadow-sm"
                        />

                        <img
                            src="/assets/4.jpg"
                            alt="Allowed websites management"
                            className="rounded-lg border shadow-sm"
                        />
                    </div>
                </section>

                <section className="bg-white rounded-xl shadow p-6 space-y-3">
                    <h2 className="text-xl font-semibold text-gray-900">
                        About Inline AI <a className="border p-1 rounded-md text-md font-normal" href="https://github.com/nooreenf16/Inline-AI">GitHub Repo</a>
                    </h2>
                    <p className="text-gray-700">
                        Inline AI is a Chrome extension that lets you interact with AI directly
                        on any webpage by selecting text. It helps you understand, summarize,
                        rewrite, and analyze content instantly without leaving the page.
                    </p>
                    <p className="text-gray-700">
                        Built for speed and simplicity, it turns any webpage into an interactive
                        learning and productivity tool powered by Groq AI.
                    </p>

                    <hr className="text-gray-300 mt-5" />

                    {/* FEATURES */}
                    <h2 className="text-xl font-semibold text-gray-900">
                        Features
                    </h2>

                    <div className="space-y-3 text-gray-700">
                        <p>
                            <strong>Text Selection:</strong> Highlight any text on any webpage to trigger the AI assistant
                        </p>

                        <p>
                            <strong>AI-Powered Responses:</strong> Get instant answers from Groq AI about selected content
                        </p>

                        <p>
                            <strong>Smart Annotations:</strong> Save important insights and responses for later reference
                        </p>

                        <p>
                            <strong>Chat History:</strong> View all your saved AI conversations in a ChatGPT-like interface
                        </p>

                        <p>
                            <strong>Secure API Management:</strong> Store your Groq API key securely in the extension
                        </p>

                        <p>
                            <strong>Universal Compatibility:</strong> Works on all websites and web applications
                        </p>
                    </div>
                </section>


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