export default function CursorStar(container: HTMLElement) {
    const sparkle = document.createElement("div")
    sparkle.innerHTML = "✦"

    Object.assign(sparkle.style, {
        position: "fixed",
        left: "0",
        top: "0",
        pointerEvents: "none",
        zIndex: "999999",
        fontSize: "16px",
        fontWeight: "700",
        background: "linear-gradient(135deg, #fff7ae, #ffd84d, #bb8302)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        filter: `
            drop-shadow(0 0 2px rgba(255, 215, 0, 0.9))
            drop-shadow(0 0 16px rgba(255, 200, 0, 0.75))
            drop-shadow(0 0 10px rgba(255, 180, 0, 0.55))
        `,
        opacity: "0",
        transition: "opacity 0.18s ease",
        willChange: "transform",
    })

    document.body.appendChild(sparkle)

    const onMove = (e: MouseEvent) => {
        sparkle.style.opacity = "1"
        sparkle.style.transform = `translate(${e.clientX + 10}px, ${e.clientY + 1}px)`
    }

    const onLeave = () => { sparkle.style.opacity = "0" }

    container.addEventListener("mousemove", onMove)
    container.addEventListener("mouseleave", onLeave)

    return () => {
        container.removeEventListener("mousemove", onMove)
        container.removeEventListener("mouseleave", onLeave)
        sparkle.remove()
    }
}