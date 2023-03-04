/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import { ContextProvider } from '../../context';
import { getFoodLocal } from '../../services/food';
// @ts-ignore
import Grid from './index.tsx';

test('renders Grid', async () => {
  const gridData = await getFoodLocal()

  render(
    <ContextProvider>
        <Grid gridData={gridData.data}/>
    </ContextProvider>
  );

  const gridElement = screen.getByTestId('grid');
  const buttonElement = screen.getByText(/MÁS NOTAS DE ACUMULADO GRILLA/i);
  const firstCardElement = screen.getAllByText(/Arroz con Leche/i)[0];

  expect(buttonElement).toBeInTheDocument();
  expect(firstCardElement).toBeInTheDocument();
  expect(gridElement.children.length).toBe(30);
});
