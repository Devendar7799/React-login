import { render, screen } from '@testing-library/react';
import App from './App';

global.fetch = jest.fn(() => 
  Promise.resolve({
    data: () => Promise.resolve([
      { name: 'Name 1', url: 'url1'},
      { name: 'Name 2', url: 'url2'}
    ])
  })
);

test('renders List ', () => {
  render(<App />);

  await waitFor(() => expect(screen.getByText('Name 1')));
  const listElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
