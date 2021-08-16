import MainNavigation from './main-navigation';

function Layout(props) {
  const { children } = props;
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
}

export default Layout;
