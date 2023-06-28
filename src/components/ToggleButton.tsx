import React from 'react'
import { Button } from '@mui/material'
import useButtonTheme from '../hooks/useButtonTheme'

interface ToggleButtonProps {
    children: React.ReactNode | string
}

const ToggleButton = (props: ToggleButtonProps) => {
    const { children } = props
    const value = useButtonTheme('outlined', 'contained')
    return (
    <>
        {/* @ts-ignore */}
        <Button variant={value.buttonStyle} onClick={value.handleToggle}>
        {children}
        </Button>
    </>
    )
}
export default ToggleButton