import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Biogas Western Greece </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Βιοαέριο Δυτικής Ελλάδας" />
        <address> Επικοινωνία: <a href="mailto:vioaerioditikiselladas@gmail.com"> vioaerioditikiselladas@gmail.com </a> </address>
  
      </main>

      <Footer />
    </div>
  )
}
