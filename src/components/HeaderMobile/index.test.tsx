import { render, screen } from '@testing-library/react';
// @ts-ignore
import HeaderMobile from './index.tsx';

test('renders HeaderForGrid', () => {

  render(<HeaderMobile/>);

  const nationElement = screen.getByAltText(/La Nacion/i);
  const homeElement = screen.getByAltText(/home/i);
  const cardElement = screen.getByAltText(/card/i);
  const commentElement = screen.getByAltText(/comment/i);
  const hamburgerElement = screen.getByAltText(/Menu/i);
  const suscribeElement = screen.getByText(/Suscribite/i);

  expect(nationElement).toBeInTheDocument();
  expect(suscribeElement).toBeInTheDocument();
  expect(homeElement).toBeInTheDocument();
  expect(cardElement).toBeInTheDocument();
  expect(commentElement).toBeInTheDocument();
  expect(hamburgerElement).toBeInTheDocument();
});
