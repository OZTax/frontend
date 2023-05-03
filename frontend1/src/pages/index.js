import Hero from '../components/Hero/Hero';
import Insights from '../components/Insights/Insights';
import Commitment from '../components/Commitment/Commitment';
import { Layout } from '../layout/Layout';

const Home = () => {
  return (
    <Layout>
    <Hero/>
    <Insights/>
    <Commitment/>
    </Layout>
  );
};

export default Home;