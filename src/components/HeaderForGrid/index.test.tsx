/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import { ContextProvider } from '../../context';
import { getFoodLocal } from '../../services/food';
// @ts-ignore
import HeaderForGrid from './index.tsx';

test('renders HeaderForGrid', async () => {
  const gridData = await getFoodLocal()

  render(
    <ContextProvider>
        <HeaderForGrid tagsData={gridData.data}/>
    </ContextProvider>
  );

  const tagsElement = screen.getByTestId('tags');
  const eggElement = screen.getByText(/Huevo/i);
  const milkElement = screen.getByText(/Leche/i);
  const riceElement = screen.getByText(/Arroz/i);
  const butterElement = screen.getByText(/Manteca/i);
  const sugarElement = screen.getByText(/Azúcar/i);
  const flourElement = screen.getByText(/Harina 0000/i);
  const fishElement = screen.getByText(/Pescados/i);
  const garlicElement = screen.getByText(/Ajo/i);
  const fruitElement = screen.getByText(/Frutas/i);
  const cinnamonElement = screen.getByText(/Canela/i);

  expect(eggElement).toBeInTheDocument();
  expect(milkElement).toBeInTheDocument();
  expect(riceElement).toBeInTheDocument();
  expect(butterElement).toBeInTheDocument();
  expect(sugarElement).toBeInTheDocument();
  expect(flourElement).toBeInTheDocument();
  expect(fishElement).toBeInTheDocument();
  expect(garlicElement).toBeInTheDocument();
  expect(fruitElement).toBeInTheDocument();
  expect(cinnamonElement).toBeInTheDocument();
  expect(tagsElement.children.length).toBe(10);
});
