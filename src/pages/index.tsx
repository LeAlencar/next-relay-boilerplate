import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useLazyLoadQuery, graphql, PreloadedQuery } from 'react-relay'
import preloadQuery, { pagesIndexQuery } from '../../__generated__/pagesIndexQuery.graphql'
import { getPreloadedQuery } from '../lib/network'
import styles from '../styles/Home.module.css'

interface IndexProps {
  queryRefs: {
    pagesIndexQuery: PreloadedQuery<pagesIndexQuery>;
  };
};

const pagesIndexQuery = graphql`
query pagesIndexQuery @preloadable{
repository(owner: "facebook", name: "relay") {
  name
  owner {
    login
  }
}
}
`;

const Home = ({queryRefs}: IndexProps) => {
  const response = useLazyLoadQuery<pagesIndexQuery>(pagesIndexQuery, queryRefs.pagesIndexQuery,
  {
    fetchPolicy: "network-only"
  }
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Relay Next App</title>
        <meta name="description" content="relay next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to a Nextjs with Relay Template
        </h1>

        <p className={styles.description}>
          This query was made using getStaticProps
        </p>

        <div>
          <h3>The repo: {response.repository?.name}</h3>
          <h3>The owner: {response.repository?.owner.login}</h3>
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      preloadedQueries: {
        pagesIndexQuery: await getPreloadedQuery(preloadQuery, {}),
      },
    },
  };
}

export default Home
