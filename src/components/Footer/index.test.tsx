import { render, screen } from '@testing-library/react';
// @ts-ignore
import Footer from './index.tsx';

test('renders Footer', () => {
  render(<Footer />);

  const facebookElement = screen.getByAltText(/facebook/i)
  const twitterElement = screen.getByAltText(/twitter/i)
  const instagramElement = screen.getByAltText(/instagram/i)
  const rssElement = screen.getByAltText(/rss/i)

  const mapElement = screen.getByText(/Mapa del sitio/i)
  const helpElement = screen.getByText(/Ayuda/i)
  const termsElement = screen.getByText(/Términos y condiciones/i)
  const howToElement = screen.getByText(/¿Cómo anunciar?/i)
  const suscribeElement = screen.getByText(/Suscribirse al diario impreso/i)

  const protectedElement = screen.getByText(/Protegido por re CAPTCHA:/i)
  const conditionsElement = screen.getAllByText(/Condiciones/i)
  const privacyElement = screen.getByText(/Privacidad/i)
  const groupElement = screen.getByText(/Miembro de GDA. Grupo de Diarios América/i)
  const reservedElement = screen.getByText(/Copyright 2019 SA LA NACION | Todos los derechos reservados/i)

  expect(facebookElement).toBeInTheDocument();
  expect(twitterElement).toBeInTheDocument();
  expect(instagramElement).toBeInTheDocument();
  expect(rssElement).toBeInTheDocument();

  expect(mapElement).toBeInTheDocument();
  expect(helpElement).toBeInTheDocument();
  expect(termsElement).toBeInTheDocument();
  expect(howToElement).toBeInTheDocument();
  expect(suscribeElement).toBeInTheDocument();

  expect(protectedElement).toBeInTheDocument();
  expect(conditionsElement[0]).toBeInTheDocument();
  expect(privacyElement).toBeInTheDocument();
  expect(groupElement).toBeInTheDocument();
  expect(reservedElement).toBeInTheDocument();
});
