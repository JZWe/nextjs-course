import classes from './main-navigation.module.css';
import Link from 'next/link';
import Logo from './logo';

// <Link /> will prefetch pages in the background
// if it doesn't explictly set prefetch={false}
// , but when preftech={false}, prefetching still occur on hover

// When using component as Link's children, should wrap the component with <a> tag
function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
