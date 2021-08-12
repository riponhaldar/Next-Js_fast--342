import styles from './../styles/Home.module.scss';
import dynamic from 'next/dynamic';

const Conten = dynamic(() => import('../component/Content'), {
  loading: function id() {
    return <p>loading....</p>;
  },
  ssr: false,
});

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <h6>Home pages</h6>
        <Conten />
      </div>
    </>
  );
}
