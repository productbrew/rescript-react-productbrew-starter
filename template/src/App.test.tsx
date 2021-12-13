import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders header text', () => {
    render(<App />)
    const linkElement = screen.getByText(/Let's build something cool!/i)
    expect(linkElement).toBeInTheDocument()
})
