import '@styles/globals.css';


import Nav from '@components/Nav';


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