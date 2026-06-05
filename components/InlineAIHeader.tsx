import InlineAIPopUp from "./InlineAIPopUp";

export default function InlineAIHeader() {
    return (
        <>
            <InlineAIPopUp />

            <div className="mt-5 h-[60vh]">
                <div className="w-[80%] mx-auto flex flex-col md:flex-row items-center gap-8 px-8 py-12 h-full">

                    <div className="w-[65%] shrink-0">
                        <video
                            src="/edited_video.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full rounded-xl object-cover border"
                        />
                    </div>

                    <div className="ml-5 flex flex-col justify-center">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                            Select some text below!
                        </h3>
                        <p className="text-gray-600 mt-1">
                            Try out a demo of the minified version of the extension here by selecting any text on this page!
                            <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc
                            efficitur tincidunt. Sed at ligula quis sapien bibendum convallis. Aliquam erat volutpat. Curabitur ac ligula nec nunc efficitur tincidunt. Sed at ligula quis sapien bibendum convallis. Aliquam erat volutpat.
                        </p>
                        <a href="https://chromewebstore.google.com/detail/inline-ai/gpchlfiffpeplmfkbibilieljgeohmlf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 w-max inline-block transition">
                            Get It on Chrome Web Store
                        </a>
                    </div>

                </div>
            </div>
        </>
    );
}