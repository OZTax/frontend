import Hero from '@components/Hero';
import Insights from '@components/Insights';
import Commitment from '@components/Commitment';
import Introduction from '@components/Introduction';
import Whatwedo from '@components/Whatwedo';


const Home = () => {
  return (
    <section className="w-full flex-center flex-col font-libre">
        <Hero />
        <Introduction />
        <Whatwedo />
        <Insights />
        <Commitment />
    </section>
  )
}

export default Home