import { render, screen } from '@testing-library/react';
import { formatDate } from '../../utils/formatDate';
// @ts-ignore
import Card from './index.tsx';

test('renders Card', () => {
  const object = {
    display_date: new Date(),
    headlines: {
        basic: 'TEST'
    },
    promo_items: {
        basic: {url: 'https://www.rae.es/sites/default/files/styles/wysiwyg_100_/public/2021-07/ramdomtwitter_Mesa%20de%20trabajo%201.png?itok=JfO9YVoD'}
    }
  }

  const formatedDate = formatDate(object.display_date)

  render(<Card display_date={object.display_date} headlines={object.headlines} promo_items={object.promo_items}/>);

  const headlineElement = screen.getByText(/TEST/i);
  const dateElement = screen.getByText(formatedDate);
  const imgElement = screen.getByAltText(/card/i)

  expect(headlineElement).toBeInTheDocument();
  expect(dateElement).toBeInTheDocument();
  expect(imgElement).toBeInTheDocument();
});
