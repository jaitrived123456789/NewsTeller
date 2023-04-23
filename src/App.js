
import './App.css';
import NavBar from './components/NavBar';
import React, { Component } from 'react'
import News from './components/News';

import {
  BrowserRouter as Router,

  Route,
 
  Routes
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>

        <Router>

          <NavBar />

          <Routes>
            <Route path='/general' element={<News key='general' pageSize={10} country='us' category='general' />}></Route>
            <Route path='/business' element={<News key='business' pageSize={10} country='us' category='business' />}></Route>
            <Route path='/entertainment' element={<News key='entertainment' pageSize={10} country='us' category='entertainment' />}></Route>
            <Route path='/health' element={<News key='health' pageSize={10} country='us' category='health' />}></Route>
            <Route path='/science' element={<News key='science' pageSize={10} country='us' category='science' />}></Route>
            <Route path='/sports' element={<News key='sports' pageSize={10} country='us' category='sports' />}></Route>
            <Route path='/technology' element={<News key='technology' pageSize={10} country='us' category='technology' />}></Route>
          </Routes>

          {/* <Routes>
            <Route path="/" element={<News pageSize={10} country='in' category='general' />}></Route>
            <Route path="/business" element={<News pageSize={10} country='in' category='business'/>}></Route>
            <Route path="/science" element={<News pageSize={10} country='in' category='science'/>}></Route>
            <Route path="/entertainment" element={<News pageSize={10} country='in' category='entertainment'/>}></Route>
            <Route path="/general" element={<News pageSize={10} country='in' category='general'/>}></Route>
            <Route path="/health" element={<News pageSize={10} country='in' category='health'/>}></Route>
            <Route path="/sports" element={<News pageSize={10} country='in' category='sports'/>}></Route>
            <Route path="/technology" element={<News pageSize={10} country='in' category='technology'/>}></Route>
         </Routes> */}

        </Router>





      </div>
    )
  }
}
