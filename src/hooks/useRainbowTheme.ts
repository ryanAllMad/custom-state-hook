import { useState } from "react"

export default function useRainbowTheme() {
    const [rainbow, setRainbow] = useState('')
    const handleToggle = () => {
        setRainbow('rainbow-border')
    }
    const value = {
        rainbow,
        handleToggle
    }
    return value
}