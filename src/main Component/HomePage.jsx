import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Details from '../components/Details'
import Team from '../components/Team'
import Indust from '../components/Indust'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className=' overflow-y-hidden relative'>
        <main>
            <Navbar/>
            <Home/>
        </main>
        <section>
            <About/>
        </section>
        <section >
          <Details/>
        </section>
        <section >
          <Team/>
        </section>
        <section >
          <Indust/>
        </section>
        <FAQ />
        <Footer />
    </div>
  )
}

export default HomePage