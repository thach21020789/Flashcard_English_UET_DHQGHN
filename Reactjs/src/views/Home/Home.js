import React from 'react'
import Hero from './Hero'
import Introduction from "./Introduction";
import Companion from './Companion';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <>
      <div>
        <Helmet><title>Home</title></Helmet>
        <Hero
          cName="hero"
          heroImg="https://images.unsplash.com/photo-1498435999018-6803de1f1c1f?ixlib=
      rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
          title="Start Learning English"
          text="Now or Never"
          buttonText="Research"
          url="/Home"
          btnClass="show"
        />
        <Introduction />
        <Companion />
        <Footer />
      </div>
    </>
  )
}

export default Home