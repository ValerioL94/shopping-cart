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
                <img src="/assets/icons/icons8-home-48.png" alt="" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'shop'}
                className={({ isActive, isPending }) =>
                  isActive ? 'active' : isPending ? 'pending' : ''
                }
              >
                <img src="/assets/icons/icons8-shopping-bag-48.png" alt="" />
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'cart'}
                className={({ isActive, isPending }) =>
                  isActive ? 'active' : isPending ? 'pending' : ''
                }
              >
                <img src="assets/icons/icons8-cart-48.png" alt="" />
                Cart
              </NavLink>
            </li>
          </ul>
        </nav>
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
