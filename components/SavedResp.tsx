export default function SavedResponsesPage() {
    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-10">
            <div className="max-w-4xl mx-auto space-y-6">

                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Saved Responses
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Access, manage, and revisit all your past AI interactions in one place.
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow p-6 space-y-3">
                    <h2 className="text-xl font-semibold">Where to find saved responses</h2>
                    <p className="text-gray-700">
                        Saved responses are available directly inside the extension. Open the popup
                        from your Chrome toolbar and navigate to your saved history section.
                    </p>
                    <p className="text-gray-700">
                        Every response you choose to save is stored locally and can be accessed anytime
                        without needing to revisit the original webpage.
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow p-6 space-y-3">
                    <h2 className="text-xl font-semibold">What gets saved</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Original selected text from the webpage</li>
                        <li>Your prompt or question</li>
                        <li>The AI-generated response</li>
                    </ul>
                    <p className="text-gray-700">
                        This gives you full context so you can revisit not just the answer, but also
                        what you were asking and why.
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow p-6 space-y-3">
                    <h2 className="text-xl font-semibold">Key features</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li><strong>Complete Context:</strong> See original selected text, your prompts, and AI responses together</li>
                        <li><strong>Search Functionality:</strong> Quickly find past conversations using keywords</li>
                        <li><strong>Organized History:</strong> View all saved interactions in chronological order</li>
                        <li><strong>Easy Access:</strong> Open saved responses with one click from the extension popup</li>
                        <li><strong>Delete Management:</strong> Remove unwanted entries to keep your history clean</li>
                    </ul>
                </div>

                <div className="bg-white rounded-xl shadow p-6 space-y-3">
                    <h2 className="text-xl font-semibold">Tips for using saved responses</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Save responses you might want to reference later instead of re-running prompts</li>
                        <li>Use search to quickly retrieve insights from long sessions</li>
                        <li>Clean up outdated or irrelevant entries regularly for better organization</li>
                    </ul>
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