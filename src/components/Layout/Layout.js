import React from 'react'
import './Layout.scss'
import { Classes } from '@blueprintjs/core'
  
const Layout = (props) => {
 
let rightContainer = 'rightContainer';
let overlayContainer = 'overlayContainer';
/*if (props.show) {
    rightContainer = 'rightContainer right-active';
    overlayContainer = 'overlayContainer right-active';
}*/

return(
    <div className={[
        'root ',
        Classes.ELEVATION_4,
    ].join('')}>
   
    <div className={rightContainer}>{props.right}</div>
    <div className={overlayContainer}>{props.overlay}</div>
    </div>
)
}


export default Layout