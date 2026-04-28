export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-gray-100">
            <main className="max-w-3xl mx-auto px-6 py-10 space-y-8">

                <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                        Privacy Policy
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Last updated: April 2026
                    </p>
                </div>

                <section className="bg-white rounded-xl shadow p-6 space-y-4 text-gray-700">
                    <p>
                        Inline AI is a Chrome extension designed to help users interact with AI
                        directly on any webpage. Your privacy and data security are important,
                        and this policy explains what information is handled and how it is used.
                    </p>
                </section>

                <Section title="1. Information We Collect">
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Selected Text:</strong> Text you highlight on a webpage</li>
                        <li><strong>User Prompts:</strong> Questions or instructions you provide</li>
                        <li><strong>AI Responses:</strong> Generated responses from the AI model</li>
                        <li><strong>API Key:</strong> Your Groq API key, stored locally in your browser</li>
                    </ul>
                    <p>
                        Inline AI does not collect or store personal data on external servers.
                    </p>
                </Section>

                <Section title="2. How Information Is Used">
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Generate AI responses based on selected text and prompts</li>
                        <li>Display results within the extension interface</li>
                        <li>Allow optional saving of responses</li>
                    </ul>
                </Section>

                <Section title="3. Data Storage">
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Stored locally using Chrome storage</li>
                        <li>No browsing history is tracked</li>
                        <li>No unrelated page data is stored</li>
                    </ul>
                </Section>

                <Section title="4. Third-Party Services">
                    <p>
                        Inline AI uses Groq API to generate AI responses. Selected text and prompts
                        are sent to Groq for processing. Inline AI does not control third-party
                        data handling practices.
                    </p>
                </Section>

                <Section title="5. Data Sharing">
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Does not sell your data</li>
                        <li>Does not share data except with AI provider</li>
                        <li>Does not track browsing activity</li>
                    </ul>
                </Section>

                <Section title="6. Permissions Justification">
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Active Tab:</strong> Access selected text</li>
                        <li><strong>Storage:</strong> Save API keys and responses locally</li>
                    </ul>
                </Section>

                <Section title="7. Security">
                    <ul className="list-disc pl-5 space-y-2">
                        <li>API keys stored locally</li>
                        <li>HTTPS used for all API communication</li>
                    </ul>
                </Section>

                <Section title="8. Your Control">
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Delete saved responses anytime</li>
                        <li>Remove stored API keys</li>
                        <li>Uninstall extension to remove all data</li>
                    </ul>
                </Section>

                <Section title="9. Changes to This Policy">
                    <p>
                        This policy may be updated to reflect changes in the extension.
                    </p>
                </Section>

                <Section title="10. Contact">
                    <p>
                        Nooreen Fatima <br />
                        <a
                            href="https://nooreen-fatima-portfolio.vercel.app/#contact"
                            className="text-blue-600 underline"
                            target="_blank"
                        >
                            Contact Page
                        </a>
                    </p>
                </Section>

            </main>
            <footer className="text-center text-sm text-gray-500 py-6">
                © {new Date().getFullYear()} Inline AI
            </footer>
        </div>
    );
}

function Section({
    title,
    children
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="bg-white rounded-xl shadow p-6 space-y-3">
            <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
            <div className="text-gray-700">{children}</div>
        </section>
    );
}