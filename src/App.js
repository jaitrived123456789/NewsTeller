
import './App.css';
import NavBar from './components/NavBar';
import React, { Component } from 'react'
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,

  Route,

  Routes
} from "react-router-dom";


export default class App extends Component {

  apiKey = process.env.REACT_APP_API


  state = {
    progress:0

  }


setProgress = (progress)=>{
  this.setState({progress: progress })
}


  render() {
    return (
      <div>

        <Router>

          <NavBar />
          <LoadingBar
        color='#f11946'
        height = {3}
        progress={this.state.progress}
        />
          <Routes>
            <Route path='/general' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='general' pageSize={12} country='us' category='general' />}></Route>
            <Route path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='business' pageSize={12} country='us' category='business' />}></Route>
            <Route path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='entertainment' pageSize={12} country='us' category='entertainment' />}></Route>
            <Route path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='health' pageSize={12} country='us' category='health' />}></Route>
            <Route path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='science' pageSize={12} country='us' category='science' />}></Route>
            <Route path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='sports' pageSize={12} country='us' category='sports' />}></Route>
            <Route path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='technology' pageSize={12} country='us' category='technology' />}></Route>
          </Routes>

         {/* <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} pageSize={12} country='in' category='general' />}></Route>
            <Route exact path="/business" element={<News setProgress={this.setProgress} pageSize={12} country='in' category='business'/>}></Route>
            <Route exact path="/science" element={<News setProgress={this.setProgress} pageSize={12} country='in' category='science'/>}></Route>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} pageSize={12} country='in' category='entertainment'/>}></Route>
            <Route exact path="/general" element={<News setProgress={this.setProgress} pageSize={12} country='in' category='general'/>}></Route>
            <Route exact path="/health" element={<News setProgress={this.setProgress} pageSize={12} country='in' category='health'/>}></Route>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} pageSize={12} country='in' category='sports'/>}></Route>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} pageSize={12} country='in' category='technology'/>}></Route>
         </Routes> */}

        </Router>





      </div>
    )
  }
}
