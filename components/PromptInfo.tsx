export default function PromptInfoPage() {
    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-10">
            <div className="max-w-4xl mx-auto space-y-6">

                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Prompt Guide
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Learn how to get better results from Inline AI when analyzing selected text.
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow p-6 space-y-3">
                    <h2 className="text-xl font-semibold">How prompting works</h2>
                    <p className="text-gray-700">
                        When you highlight text on any webpage, Inline AI sends your selected content
                        along with your prompt to an AI model. The model uses both to generate a response
                        that is context-aware and specific to what you selected.
                    </p>
                    <p className="text-gray-700">
                        Think of it like talking to someone who is reading the same paragraph as you—your
                        prompt tells them what to focus on.
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow p-6 space-y-3">
                    <h2 className="text-xl font-semibold">Example prompts</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>&quot;Explain this in simple terms&quot;</li>
                        <li>&quot;Summarize the key points&quot;</li>
                        <li>&quot;What is the main argument here?&quot;</li>
                        <li>&quot;Rewrite this to be more professional&quot;</li>
                        <li>&quot;Break this down step by step&quot;</li>
                    </ul>
                </div>

                <div className="bg-white rounded-xl shadow p-6 space-y-3">
                    <h2 className="text-xl font-semibold">Pro tips</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Be specific: &quot;Explain this like I’m new to the topic&quot; works better than &quot;explain this&quot;</li>
                        <li>Ask for format: bullet points, steps, or summaries improve clarity</li>
                        <li>Combine intent + role: &quot;Act like a teacher and explain this&quot;</li>
                        <li>Use follow-ups instead of long prompts for deeper understanding</li>
                    </ul>
                </div>

                <div className="bg-white rounded-xl shadow p-6 space-y-3">
                    <h2 className="text-xl font-semibold">Privacy note</h2>
                    <p className="text-gray-700">
                        Only the text you select and your prompt are sent to the AI provider. No browsing
                        history or unrelated page data is shared. Your API key is stored locally in your browser.
                    </p>
                    <p className="text-gray-700">
                        Inline AI is not open source and is distributed as a closed extension.
                    </p>
                </div>

                <div className="flex justify-end">
                    <button className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800">
                        Back to Extension
                    </button>
                </div>

            </div>
        </div>
    );
}