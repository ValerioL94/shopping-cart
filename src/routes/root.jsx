import { Outlet, NavLink, Link, useNavigation } from 'react-router-dom';

export default function Root() {
  const navigation = useNavigation();
  return (
    <>
      <div id="sidebar">
        <Link to={'/'} className="home-link">
          <h1>Fake Shop</h1>
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink
                to={'/'}
                className={({ isActive, isPending }) =>
                  isActive ? 'active' : isPending ? 'pending' : ''
                }
              >
                <span>Home</span>
                <img src="/assets/icons/icons8-home-48.png" alt="" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'shop'}
                className={({ isActive, isPending }) =>
                  isActive ? 'active' : isPending ? 'pending' : ''
                }
              >
                <span>Shop</span>
                <img src="/assets/icons/icons8-shopping-bag-48.png" alt="" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'cart'}
                className={({ isActive, isPending }) =>
                  isActive ? 'active' : isPending ? 'pending' : ''
                }
              >
                <span>Cart</span>
                <img src="assets/icons/icons8-cart-48.png" alt="" />
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="footer">
          <div className="empty-links">
            <Link to={'/'}>About</Link>
            <Link to={'/'}>Contact us</Link>
            <Link to={'/'}>Terms</Link>
            <Link to={'/'}>Help</Link>
          </div>
          <div className="github-link">
            <p>Copyright © 2024 ValerioL94</p>
            <a href="https://github.com/ValerioL94">
              <img
                className="github-logo"
                src="/assets/icons/github-mark.svg"
                alt="github logo"
              />
            </a>
          </div>
        </div>
      </div>
      <div
        id="content"
        className={navigation.state === 'loading' ? 'loading' : ''}
      >
        <Outlet />
      </div>
    </>
  );
}
