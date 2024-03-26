import { Outlet, NavLink } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>Fake Shop</h1>
        <nav>
          <ul>
            <li>
              <NavLink
                to={'home'}
                className={({ isActive, isPending }) =>
                  isActive ? 'active' : isPending ? 'pending' : ''
                }
              >
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
                Cart
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div id="content">
        <Outlet />
      </div>
    </>
  );
}
