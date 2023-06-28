import useRainbowTheme from '../hooks/useRainbowTheme'

interface CardProps {
    children: React.ReactNode | string
}

const Card = (props: CardProps) => {
    const {children} = props
const rainbowClass = useRainbowTheme()

return (
<div className={`card ${rainbowClass.rainbow}`} onMouseEnter={rainbowClass.handleToggle}>
    {children}
</div>
)
}

export default Card