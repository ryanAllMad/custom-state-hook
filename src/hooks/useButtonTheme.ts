import { useState } from "react"

export default function useButtonTheme(initial: string, updated: string) {
    const [buttonStyle, setButtonStyle] = useState(initial)
    const handleToggle = () => {
        setButtonStyle(updated)
    }
    const value = {
        buttonStyle,
        handleToggle
    }
    return value
}