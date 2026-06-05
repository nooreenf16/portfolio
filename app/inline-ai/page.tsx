import PromptInfoPage from "../../components/PromptInfo";
import SavedResponsesPage from "../../components/SavedResp";
import "../../app/globals.css";
import About from "@/components/About";
import InlineAIHeader from "@/components/InlineAIHeader";
import Head from 'next/head'

export default function DocsHome() {
    return (
        <>
            <Head>
                <title>Inline AI - AI-Powered Web Assistant</title>
                <meta name="description" content="An intelligent Chrome extension that lets you interact with AI about any text you select on the web. Ask questions, get explanations, or analyze any content." />
                <meta name="author" content="Nooreen Fatima" />

                {/* Open Graph / Facebook / LinkedIn */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://nooreen-fatima-portfolio.vercel.app/inline-ai" />
                <meta property="og:title" content="Inline AI - AI-Powered Web Assistant" />
                <meta property="og:description" content="An intelligent Chrome extension that lets you interact with AI about any text you select on the web. Ask questions, get explanations, or analyze any content." />
                <meta property="og:site_name" content="Inline AI" />

                {/* Twitter */}
                {/* <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Inline AI - AI-Powered Writing Assistant" />
                <meta name="twitter:description" content="Inline AI helps you write better with intelligent suggestions and real-time feedback. Created by Nooreen Fatima." />
                <meta name="twitter:image" content="https://yourwebsite.com/inline-ai-preview.jpg" /> */}
            </Head>

            <div className="min-h-screen bg-gray-100">
                <header className="bg-white shadow-sm">
                    <div className="max-w-5xl mx-auto px-6 py-6">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Inline AI
                        </h1>
                        <p className="text-gray-600 mt-1">
                            Creator: Nooreen Fatima
                            <a href="/inline-ai/privacy-policy" className="ml-5 p-2 rounded-xl bg-gray-100 hover:bg-gray-200 border border-gray-500 text-sm font-normal">Privacy Policy</a>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf2wxpxne6kg5MU0UBswCgUVkf8rzUV5L3aDlxeL6YwiRaIcA/viewform?usp=publish-editor"
                                className="ml-5 p-2 rounded-xl border border-gray-500 text-sm font-normal bg-gray-100 hover:bg-gray-200 ">Give Feedback or Report Bugs</a>

                        </p>
                    </div>
                </header>

                <InlineAIHeader />

                <main className="max-w-5xl mx-auto px-6 py-10 space-y-12">

                    <section className="hidden">
                        <p>
                            Inline AI is a Chrome extension designed to help users interact with AI
                            directly on any webpage. Your privacy and data security are important,
                            and this policy explains what information is handled and how it is used.
                        </p>
                    </section>

                    <section>
                        <About />
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
        </>
    );
}