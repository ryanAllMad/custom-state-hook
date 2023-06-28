import { useState } from "react"

export default function useButtonTheme(initial: string, updated: string) {
    const [contain, setContain] = useState(initial)
    const handleToggle = () => {
        setContain(updated)
    }
    const value = {
        contain,
        handleToggle
    }
    return value
}