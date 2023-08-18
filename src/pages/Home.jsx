import React from 'react'
import Layout from '../Components/Layout/layout'
import { Link } from 'react-router-dom'
import Banner from '../images/3-banner.jpg';
import '../styles/HomeStyles.css';

const Home = () => {
  return (
    <Layout>
      <div className="Home" style={{backgroundImage:`url(${Banner})`}}>
        <div className="Headercontainer">
          <h1>Food Website</h1>
          <p>Best Food In Indea</p>
          <Link to='/menu'>
          <button>Order Now</button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home
