import PromptInfoPage from "../../components/PromptInfo";
import SavedResponsesPage from "../../components/SavedResp";
import "../../app/globals.css";
import About from "@/components/About";

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Inline AI - AI-Powered Web Assistant',
    description: 'An intelligent Chrome extension that lets you interact with AI about any text you select on the web. Ask questions, get explanations, or analyze any content.',
    openGraph: {
        title: 'Inline AI - AI-Powered Web Assistant',
        description: 'An intelligent Chrome extension that lets you interact with AI about any text you select on the web. Ask questions, get explanations, or analyze any content.',
        url: 'https://nooreen-fatima-portfolio.vercel.app/inline-ai',
        siteName: 'Inline AI',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Inline AI - AI-Powered Web Assistant',
        description: 'An intelligent Chrome extension that lets you interact with AI about any text you select on the web. Ask questions, get explanations, or analyze any content.',
        images: ['https://nooreen-fatima-portfolio.vercel.app/inline-ai-preview.jpg'],
    },
}

export default function DocsHome() {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow-sm">
                <div className="max-w-5xl mx-auto px-6 py-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Inline AI
                        <a href="/inline-ai/privacy-policy" className="ml-5 p-2 rounded-xl border border-gray-500 text-sm font-normal">Privacy Policy</a>
                    </h1>
                    <p className="text-gray-600 mt-1">
                        Creator: Nooreen Fatima
                    </p>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-10 space-y-12">

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
    );
}