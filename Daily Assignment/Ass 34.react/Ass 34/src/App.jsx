import React from 'react'
import Name from './components/Task 2'
import Profile from './components/Task 3'
import Card from './components/Task 4'
import ProfileCard from './components/Task 6'
import Product from './components/Task 7'
import Card1 from './components/Task 8'
import BlogPost from './components/Task 9'

function App() {
  return (
    <div>
      <Name/>

      <Profile Age="22"/>

      <Card title="MY First Card">
        <h2> This is Card Components </h2>
      </Card>


      <Card title="MY Second Card">
        <h3> This is Card Components </h3>
      </Card>

     <ProfileCard name="Anbarasu" role=" 💻Full Stack Developer📈"/>
     <ProfileCard name="Keerthana" role="💉💊Pharmacy🩺"/>


     <Product name="💻Loptop" price="67,000"/>
     <Product name="📱Phone" price="20,000"/>
     <Product name="🏍Bike" price="1,50,000"/>


     <Card1>
      <h2>Product</h2>
      <p>💻Laptop</p>
      <p>Price: ₹63,000</p>

     </Card1>


     <BlogPost/>

    </div>
  )
}

export default App