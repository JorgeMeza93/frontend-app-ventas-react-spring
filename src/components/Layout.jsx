import React from 'react'
import Header from "./Header";
import Menu from './Menu';

const Layout = () => {
  return (
    <div>
        <Header/>
        <div className="container">
            <div className="columns">
                <div className="column is-one-quarter">
                    <Menu/>
                </div>
                <div className='column'>
                    <p>Este es el resto del contenido</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Layout