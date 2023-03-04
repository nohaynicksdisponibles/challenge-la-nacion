/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
// @ts-ignore
import SideBar from './index.tsx';

test('renders SideBar', () => {
  render(
    <SideBar>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
    </SideBar>
    );

  const testElement = screen.getByTestId('sidebar');

  expect(testElement.children.length).toBe(5)
});
