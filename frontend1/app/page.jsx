import Hero from '@components/Hero';
import Insights from '@components/Insights';
import Commitment from '@components/Commitment';


const Home = () => {
  return (
    <section className="w-full flex-center flex-col font-libre">
        <Hero />
        <Insights />
        <Commitment />
    </section>
  )
}

export default Home