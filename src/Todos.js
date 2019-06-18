import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout'
import TodosNew from './containers/New/New'
import Tasks from './containers/Task/Task'
import Overlay from './components/Layout/Overlay/Overlay'
import Summary from './components/Summary/Summary'
import Home from './components/Home/Home'

  class Todos extends React.Component{


render(){
//const { viewAll, changeView } = props
const overlay = (
  <Overlay
 //   left={<Summary />}
    right={<Home />}
  />
)
 
  
    return (
      <div>
        <Layout 
     //   left={<TodosNew />}
        right={<Tasks />}
        overlay={overlay}
        />
      </div>
    );
  }}

  

  export default Todos

  /*export default connect(null,
    mapDispatchToProps,
  )(Todos)
*/