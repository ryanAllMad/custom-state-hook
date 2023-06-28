import Card from './components/Card'
import ToggleButton from "./components/ToggleButton"
import './App.css'
import useRainbowTheme from './hooks/useRainbowTheme'

function App() {
  const rainbowTheme = useRainbowTheme()
  return (
    <>
      <div className={rainbowTheme.rainbow} onMouseEnter={rainbowTheme.handleToggle}>
        Rainbow border when you mouse enter here!
      </div>
      <Card>
        <ToggleButton> Toggle button </ToggleButton>
      </Card>
    </>
  )
}

export default App
