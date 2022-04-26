import React from "react"
import Mart from "../components/Mart/Mart"
import Layout from "../components/Layout/Layout"

const About = () => {
  return (
    <Layout>
      <div className="container py-5">
        <h2 className="pb-2 border-bottom text-center">Mart</h2>
      </div>
      <Mart />
    </Layout>
  )
}

export default About
