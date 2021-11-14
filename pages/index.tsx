import type { NextPage } from 'next';
import Head from 'next/head';
import { Calendar } from '../components/Calendar';
import { useWithCalendarData } from '../components/useWithCalendarData';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const { data } = useWithCalendarData('ckvzbg1bh0016sdnst0dbnklr');
  return (
    <div className={styles.container}>
      <Head>
        <title>Winter Wonderland</title>
        <meta name="description" content="Winter Wonderland" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome {data?.firstName}</h1>
        {data ? <Calendar data={data.calendar} /> : null}
      </main>
    </div>
  );
};

export default Home;
