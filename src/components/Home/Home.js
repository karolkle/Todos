import React from 'react'
import './Home.scss'
import NavigationItem from '../Navigation/NavigationItem/NavigationItem'


const Home = ({test}) => {
  
return(
  <div>
        <h1>Hi Guest!</h1>
        <h3>What are you doing today?</h3>
        <ul className="NavigationItems">
        <NavigationItem link="/new">New Task</NavigationItem>
        <NavigationItem link="/task" active>View Task</NavigationItem>
    </ul>
  </div>
  )
}
export default Home;