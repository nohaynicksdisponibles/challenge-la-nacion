import { render, screen } from '@testing-library/react';
// @ts-ignore
import StateWrapper from './index.tsx';

test('renders StateWrapper', () => {
  render(//isLoading, isError, isSuccess
    <StateWrapper isSuccess={true} isLoading={false} isError={false}>
        <p>TEST</p>
    </StateWrapper>
    );

  const testElement = screen.getByText(/TEST/i);

  expect(testElement).toBeInTheDocument();

  render(//isLoading, isError, isSuccess
    <StateWrapper isSuccess={false} isLoading={false} isError={true}>
        <p>TEST</p>
    </StateWrapper>
    );
    
  const errorElement = screen.getByText(/ERROR/i);

  expect(errorElement).toBeInTheDocument();

  render(//isLoading, isError, isSuccess
    <StateWrapper isSuccess={false} isLoading={true} isError={false}>
        <p>TEST</p>
    </StateWrapper>
    );
    
  const loadingElement = screen.getByText(/CARGANDO.../i);

  expect(loadingElement).toBeInTheDocument();
});
