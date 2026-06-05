"use client"
import { useEffect, useRef, useState } from "react"
import DOMPurify from "dompurify"
import { marked } from "marked"
import { IoSend } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaUndo } from "react-icons/fa";
import { handleGroqCall } from "../utils/groqApi"
import { getStyles } from "./styles";

const INFO_URL = "https://nooreen-fatima-portfolio.vercel.app/inline-ai";


export default function InlineAIPopUp() {
    const [visible, setVisible] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [selectedText, setSelectedText] = useState("")
    const [prompt, setPrompt] = useState("")
    const [groqResponse, setGroqResponse] = useState("")
    const [promptSent, setPromptSent] = useState(false)

    const isInteractingRef = useRef(false)
    const containerRef = useRef<HTMLDivElement | null>(null)
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null)
    const [error, setError] = useState<string | null>("")
    const [groqResponseStatus, setGroqResponseStatus] = useState("");


    useEffect(() => {
        let isActive = true
        let handleMouseUp: ((e: MouseEvent) => void) | null = null
        let handleKeyDown: ((e: KeyboardEvent) => void) | null = null

        const init = async () => {

            handleMouseUp = (e: MouseEvent) => {
                if (containerRef.current?.contains(e.target as Node)) return

                const selection = window.getSelection()
                const text = selection?.toString().trim()
                if (!text || !selection) return

                const range = selection.getRangeAt(0)
                const rect = range.getBoundingClientRect()

                setSelectedText(text)
                setPosition({
                    x: rect.left + window.scrollX,
                    y: rect.bottom + window.scrollY + 8
                })

                setVisible(true)
            }

            handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === "Escape") {
                    setVisible(false)
                }
            }

            document.addEventListener("mouseup", handleMouseUp)
            document.addEventListener("keydown", handleKeyDown)
        }

        init()

        return () => {
            isActive = false

            if (handleMouseUp) {
                document.removeEventListener("mouseup", handleMouseUp)
            }

            if (handleKeyDown) {
                document.removeEventListener("keydown", handleKeyDown)
            }
        }
    }, [])

    useEffect(() => {
        if (visible) textAreaRef.current?.focus()
    }, [visible])

    const styles = getStyles(true)


    const handleSendPrompt = async () => {
        setPromptSent(true)
        setError(null)
        setGroqResponseStatus("Preparing request...")

        try {
            const fullPrompt = `Selected text: ${selectedText}\nprompt: ${prompt == "" ? "Explain" : prompt}\nwebsite where text was selected: ${window.location.href}`

            setGroqResponseStatus("Calling Groq model...")

            const res = await handleGroqCall(fullPrompt);

            if (!res.ok) {
                setError(res.error)
                setGroqResponseStatus("Error Encountered")
                return
            }

            setGroqResponse(res.data)
            setGroqResponseStatus("")

        } catch (err: unknown) {
            console.error(err)
            setError(err instanceof Error ? err.message : "Something went wrong.");
            setGroqResponseStatus("Error Encountered")
        }
    }

    const handleUndo = () => {
        setPromptSent(false)
        setGroqResponse("")
        setError(null)
        setGroqResponseStatus("")

        // Defer focusing until after React re-renders and the textarea becomes enabled
        setTimeout(() => {
            textAreaRef.current?.focus()
        }, 0)
    }

    const close = () => {
        setVisible(false)
        setPrompt("")
        setSelectedText("")
        setGroqResponse("")
        setPromptSent(false)
        window.getSelection()?.removeAllRanges()
    }

    if (!visible) return null

    return (<>
        <style>{`
            @keyframes popupFadeIn {
            from { opacity: 0; transform: translateY(4px); }
            to   { opacity: 1; transform: translateY(0); }
            }
            .ai-textarea::placeholder {
                font-size: 12.5px;
                color: #c4c2d8;
            }
        `}
        </style>

        <div
            id="annotator-popup"
            ref={containerRef}
            onMouseDownCapture={() => { isInteractingRef.current = true; }}
            onMouseUpCapture={() => { isInteractingRef.current = false; }}
            style={{ ...styles.popup, top: `${position.y}px`, left: `${position.x}px` }}
        >
            {/* Background glow */}
            <div style={styles.glowBg}>
                <div style={styles.glowInner} />
                <div style={styles.glowLine} />
            </div>

            {/* <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "10px", position: "relative", zIndex: 2 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9d8fef" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a7 7 0 0 1 7 7c0 4-7 13-7 13S5 13 5 9a7 7 0 0 1 7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                </svg>
                <span style={{ fontSize: "12px", fontWeight: 500, color: "#7a78a0", letterSpacing: "0.01em" }}>Inline AI</span>
            </div> */}

            {/* Merged input card: selected text + prompt textarea */}
            <div style={styles.inputCard}>
                <div style={styles.quoteBlock}>
                    <p style={styles.quoteText}>{selectedText}</p>
                </div>
                <div style={styles.divider} />
                <textarea
                    ref={textAreaRef}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Ask something about this text..."
                    disabled={promptSent}
                    maxLength={1000}
                    style={styles.textarea}
                    className="ai-textarea"
                />
            </div>

            {/* Response block */}
            {promptSent && (
                <div style={styles.responseCard}>
                    <div style={styles.responseHeader}>
                        <span style={styles.responseLabel}>
                            Response
                            <button
                                onClick={handleUndo}
                                title="Undo"
                                aria-label="Undo"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    background: "none",
                                    border: "0.5px solid #dddbe8",
                                    borderRadius: "7px",
                                    padding: "4px 6px",
                                    cursor: "pointer",
                                    color: "#b0adc8",
                                    lineHeight: 1,
                                }}
                            >
                                <FaUndo size={8} />
                            </button>
                        </span>

                        <span style={styles.demoBadge}>demo key</span>
                    </div>
                    <div
                        style={{
                            ...styles.responseBody,
                            color: groqResponseStatus ? "#e24b4a" : "white",
                        }}
                    >
                        {error ?? (
                            <div
                                style={{ fontSize: "12px", lineHeight: "1.6" }}
                                dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(marked(groqResponse ?? "") as string),
                                }}
                            />
                        )}
                    </div>
                </div>
            )}

            {/* Footer actions */}
            <div style={styles.footer}>
                <button onClick={close} style={styles.cancelBtn}>
                    Cancel
                </button>
                <div style={styles.footerRight}>
                    {/* Sidebar CTA — secondary, icon only with tooltip */}
                    {/* <button
                        title="Open in sidebar"
                        aria-label="Open in sidebar"
                        style={styles.sidebarBtn}
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <line x1="15" y1="3" x2="15" y2="21" />
                        </svg>
                    </button> */}

                    <div style={{ display: "flex", gap: "8px" }}>
                        <a style={{ color: "gray", display: "flex", alignItems: "center" }} href={INFO_URL} target="_blank" rel="noopener noreferrer">
                            <IoIosInformationCircleOutline />
                        </a>
                        {!promptSent && !error ? (

                            <button
                                onClick={handleSendPrompt}
                                // disabled={prompt === ""}
                                style={styles.sendBtn()}
                            >
                                {prompt === "" ? "Explain" : "Send"}
                                <IoSend />
                            </button>
                        ) : (

                            <button
                                onClick={() => {
                                    alert("Save is available in the full extension! Try it out on the Chrome Web Store: https://chromewebstore.google.com/detail/inline-ai/gpchlfiffpeplmfkbibilieljgeohmlf")
                                }}
                                disabled={!!groqResponseStatus}
                                style={styles.saveBtn(!!groqResponseStatus)}
                            >
                                {groqResponseStatus || "Save response"}
                            </button>

                        )}
                    </div>

                </div>
            </div>

            {/* Footnote — info links tucked away */}
            {/* <p style={styles.footnote}>
                {promptSent && groqResponse
                    ? <>Saves to your notes &nbsp;·&nbsp; <a href={INFO_URL} target="_blank" rel="noopener noreferrer" style={styles.footnoteLink}>Where does it save?</a></>
                    : <a href={INFO_URL} target="_blank" rel="noopener noreferrer" style={styles.footnoteLink}>Prompt info</a>
                }
            </p> */}
        </div>
    </>
    )
}