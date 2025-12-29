"use client";
{/* CONTACT FORM */ }
export default function ContactForm() {
    return (
        <section id="contact" className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-[#0a0a0a] via-[#0a0a0a] to-[#500140] px-6">
            <form className="w-full max-w-lg bg-white/5 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Contact Me</h2>

                {/* Name */}
                <div className="mb-4">
                    <label className="block text-white mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-md"
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-white mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-md"
                    />
                </div>

                {/* Message */}
                <div className="mb-4">
                    <label className="block text-white mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        placeholder="Your message"
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-md resize-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        alert("Message sent!")
                    }}
                    className="w-full py-3 mt-4 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-colors duration-300"
                >
                    Send Message
                </button>
            </form>
        </section>
    )
}