import { render, screen } from '@testing-library/react';
// @ts-ignore
import Header from './index.tsx';

test('renders navbar buttons (Suscribete y Ingresar)', () => {
  render(<Header />);
  const suscribeteElement = screen.getByText(/Suscribite/i);
  const ingresarElement = screen.getAllByText(/Ingresar/i)[0];

  expect(suscribeteElement).toBeInTheDocument();
  expect(ingresarElement).toBeInTheDocument();
});
