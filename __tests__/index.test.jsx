import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import HomeScreen from "../src/screens/HomeScreen";

describe('Home', () => {
  it('renders a heading', () => {
    render(<HomeScreen />)

    const heading = screen.getByRole('heading', {
      name: /alura cases/i,
    })

    expect(heading).toBeInTheDocument()
  })
})