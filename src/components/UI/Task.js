import React from 'react';
import Layout from '../../components/Layout/Layout'
import Tasks from '../../containers/Task/Tasks'
import Overlay from '../../components/Layout/Overlay/Overlay'
import Home from '../Home/Home'

class Task extends React.Component{
  render(){
    const overlay = (
    <Overlay
    right={<Home />}
   />
    )
    return (
      <div>
        <Layout 
        right={<Tasks />}
        overlay={overlay}
        />
      </div>
      );
  }
}

export default Task