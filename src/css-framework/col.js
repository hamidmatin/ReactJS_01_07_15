import React from 'react'
import styles from './css-framework.module.css'

const Col = ({sm, md, children}) => {
    let className = ''
    
    switch (sm){
        case 1:
            className += styles['col-sm-1'];
            break;
        case 2:
            className += styles['col-sm-2'];
            break;
        case 3:
            className += styles['col-sm-3'];
            break;
        case 4:
            className += styles['col-sm-4'];
            break;
        default:

    }
  return (
    <div className={className}>{children}</div>
  )
}

export default Col