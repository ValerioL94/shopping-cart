import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Root from '../src/routes/root';

describe('Root component', () => {
  const user = userEvent.setup();
  it('renders home page after button click', async () => {
    render(<Root />);
    const homeLogo = screen.getByRole('heading', { name: 'Fake Shop' });
    const homeLink = screen.getByRole('span', { name: 'Home' });

    await user.click(homeLogo);
    expect(screen.getByRole('div', { id: 'home-page' })).toBeInTheDocument();
    await user.click(homeLink);
    expect(screen.getByRole('div', { id: 'home-page' })).toBeInTheDocument();
  });

  //   it('renders shop page after button click');

  //   it('renders cart page after button click');
});
