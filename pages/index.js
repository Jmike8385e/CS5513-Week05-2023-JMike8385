import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedList } from '../lib/data';

// define a getStaticProps() function - this name is defined by next.js
export async function getStaticProps() {
  const allData = getSortedList();
  return {
    props: { allData }
  };
}

// export our home page component Home
export default function Home( { allData } ) {
  return (
    <Layout home>
      <h1>List of NFL Teams in the NFC West</h1>
      <div className="list-group">
        {allData && allData.map(
            ({id, team}) => (
              <Link key={id} href={`/${id}`} className="list-group-item list-group-item-action">
                {team}
              </Link>
            )
          )
        }
      </div>
    </Layout>
  );
}