import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../client/src/pages/Home'; // Adjust path if needed
import userEvent from '@testing-library/user-event';

describe('Flight Booking Form', () => {
  it('renders form with correct styles and layout', () => {
    render(<Home />);

    const form = screen.getByRole('form');
    expect(form).toHaveClass('border-4', 'border-yellow-500');
    expect(form.parentElement).toHaveClass('bg-[#001f3f]');

    // Check grid responsiveness (via Tailwind classes)
    const grid = form.querySelector('div[class*="grid"]');
    expect(grid).toBeInTheDocument();
    expect(grid?.className).toMatch(/grid-cols-1.*md:grid-cols-5/); // Mobile 1, Desktop 5

    // Check inputs
    expect(screen.getByPlaceholderText('Departure Place')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Full Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toHaveAttribute('type', 'email');

    // Calendar icons (via SVG or Heroicon)
    const calendarIcons = document.querySelectorAll('svg');
    expect(calendarIcons.length).toBe(2);

    // Button
    const button = screen.getByRole('button', { name: /send now/i });
    expect(button).toHaveClass('bg-[#4a6c8a]');
  });

  it('logs form data to console on submit', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    render(<Home />);

    await userEvent.type(screen.getByPlaceholderText('Departure Place'), 'Delhi');
    await userEvent.click(screen.getByRole('button', { name: /send now/i }));

    expect(consoleSpy).toHaveBeenCalledWith(expect.objectContaining({
      departurePlace: 'Delhi'
    }));

    consoleSpy.mockRestore();
  });

  it('form appears after hero section', () => {
    render(<Home />);
    const hero = screen.getByText(/hero/i); // Assuming hero has text
    const form = screen.getByRole('form');
    expect(hero.compareDocumentPosition(form)).toBe(Node.DOCUMENT_POSITION_FOLLOWED_BY);
  });
});
