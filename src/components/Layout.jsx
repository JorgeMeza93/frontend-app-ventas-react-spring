import React from 'react'
import Header from "./Header";
import Menu from './Menu';

const Layout = (props) => {
  return (
    <div>
        <Header/>
        <div className="container">
            <div className="columns">
                <div className="column is-one-quarter">
                    <Menu/>
                </div>
                <div className='column'>
                    <div>{props.children}</div>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Layout