import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BMI Calculator title', () => {
  render(<App />);
  const titleElement = screen.getByText(/BMI Calculator/i);
  expect(titleElement).toBeInTheDocument();
});
