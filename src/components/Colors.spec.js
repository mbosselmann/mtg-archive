import Colors from './Colors'
import { render, screen } from '@testing-library/react'

describe('Colors', () => {
  it('renders all color circles', () => {
    const colors = ['White', 'Red', 'Blue', 'Green', 'Black']

    render(<Colors colors={colors} />)

    const whiteCircle = screen.getByText('White')
    const redCircle = screen.getByText('Red')
    const blueCircle = screen.getByText('Blue')
    const greenCircle = screen.getByText('Green')
    const blackCircle = screen.getByText('Black')

    expect(whiteCircle).toBeInTheDocument()
    expect(redCircle).toBeInTheDocument()
    expect(blueCircle).toBeInTheDocument()
    expect(greenCircle).toBeInTheDocument()
    expect(blackCircle).toBeInTheDocument()
  })
})
