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
        <div> Επικοινωνία: vioaerioditikiselladas@gmail.com </div>
      </main>

      <Footer />
    </div>
  )
}
