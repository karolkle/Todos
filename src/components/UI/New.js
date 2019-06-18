import React from 'react';
import Layout from '../../components/Layout/Layout'
import News from '../../containers/New/New'
import Overlay from '../../components/Layout/Overlay/Overlay'
import Home from '../Home/Home'

class New extends React.Component{
  render(){
    const overlay = (
    <Overlay
    right={<Home />}
    />
  )
    return (
      <div>
        <Layout 
          right={<News />}
         overlay={overlay}
       />
      </div>
    );
  }
}

export default New