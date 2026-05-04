export default function About() {
    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-10">
            <div className="max-w-4xl mx-auto space-y-6">

                {/* <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                        About Inline AI
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Creator: Nooreen Fatima
                    </p>
                </div> */}

                <div className="bg-white rounded-xl shadow p-6 space-y-3">
                    <h2 className="text-xl font-semibold">What does it do</h2>
                    <p className="text-gray-700">
                        Inline AI is a client-side Chrome extension that lets you interact with AI directly
                        on any webpage by selecting text. It helps you understand, summarize,
                        rewrite, and analyze content instantly without leaving the page.
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow p-6 space-y-3">
                    <h2 className="text-xl font-semibold">
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
                </div>

                <div className="bg-white rounded-xl shadow p-6 space-y-3">
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
                            <strong>Secure API Management:</strong> Store your Groq API key locally, on your own device
                        </p>

                        <p>
                            <strong>Universal Compatibility:</strong> Works on all websites and web applications
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow p-6 space-y-3">
                    <h2 className="text-xl font-semibold">Get Started</h2>
                    <ol className="list-decimal pl-5 text-gray-700 space-y-2">
                        <li>Add extension to chrome from Chrome Web Store</li>
                        <li>Open extension settings popup and give access to the current website</li>
                        <li>Refresh page if necessary</li>
                        <li>Select Text and type a prompt</li>
                        <li>Send prompt and receive a response</li>
                        <li>Save your response if necessary</li>
                    </ol>
                </div>

            </div>
        </div>
    );
}