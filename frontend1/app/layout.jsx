import '@styles/globals.css';


import Nav from '@components/Nav';
import Hero from '@components/Hero';
import Insights from '@components/Insights';
import Commitment from '@components/Commitment';


export const metadata = {
    title: "Frontend",
    description: 'Frontend Testing Site'
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <div className="main">
            </div>

            <main className="app">
                <Nav />
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout