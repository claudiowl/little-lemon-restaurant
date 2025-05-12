// src/__mocks__/react-router-dom.js
const React = require('react');

// Navegación globalmente accesible para tus tests
global.navigateMock = jest.fn();

module.exports = {
  BrowserRouter: ({ children }) => <>{children}</>,
  Routes:         ({ children }) => <>{children}</>,
  Route:          ({ element }) => element,
  NavLink:        ({ to, children, className, onClick, ...rest }) =>
    React.createElement(
      'a',
      { href: to, className, onClick, ...rest },
      children
    ),
  Link:           ({ to, children, ...rest }) =>
    React.createElement('a', { href: to, ...rest }, children),
  Outlet:         ({ context }) => {
    // expón el contexto para tus tests
    global.routeContext = context;
    return null;
  },
  useNavigate:    () => global.navigateMock,
  useLocation:    () => ({ pathname: '/' }),
};
