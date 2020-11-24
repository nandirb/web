import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import './header.css';


class Header extends React.Component{
    render(){
      return (
        <nav>
          <ul>
            <li>
              <a href="/getting-started.html">Getting Started</a>
              </li>
              <li>
                <a href="p2.html">States</a>
                </li>
                <li>
                  <a href="p4.html">Page 4</a>
                  </li>
      
                    </ul>
                    </nav>
    )
    }
}
export default Header;