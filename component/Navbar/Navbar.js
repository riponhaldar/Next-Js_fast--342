import styles from './Navbar.module.scss';
import Link from 'next/link';
function Navbar() {
  return (
    <div className={styles.nav}>
      <p>LOGO</p>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>{' '}
        </li>
        <li>
          <Link href='/blogs'>
            <a>blogs</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>about</a>
          </Link>
        </li>
        <li>
          <Link href='/news'>
            <a>NewsAriticle</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
