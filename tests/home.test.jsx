import { render, screen } from '@testing-library/react';
import Home from '../src/routes/home';

describe('Home component', () => {
  it('renders a random quote', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /"[^"]+"/ }));
  });
});
