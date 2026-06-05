const WORKER_URL = 'https://inline-api-1976.nooreenf16.workers.dev'

export async function handleGroqCall(prompt: string) {
    try {

        const response = await fetch(`${WORKER_URL}/api/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                prompt: prompt
            })
        })

        const data = await response.json()

        // Handle rate limit hit on demo key
        if (response.status === 429) {
            return {
                ok: false,
                error: data.error || "Demo limit reached. Please try adding your own Groq key in settings.",
            }
        }

        if (!response.ok) {
            return {
                ok: false,
                error: data.error?.message || "Groq API error.",
            }
        }

        return {
            ok: true,
            data: data.choices[0].message.content,
        }

    } catch (err: unknown) {
        return {
            ok: false,
            error: err instanceof Error ? err.message : "Something went wrong.",
        }
    }
}