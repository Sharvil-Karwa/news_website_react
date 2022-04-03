import React, { Component } from 'react';
import NavBar from './compnents/NavBar';
import News from './compnents/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
         <Router>
         <NavBar />
          <Routes>
            <Route  path="/" element={<News pageSize={21} key="1" country="in" category="general"/>} />
            <Route  path="/entertainment" element={<News pageSize={21} key="1" country="in" category="entertainment"/>} />
            <Route  path="/business"  element={<News pageSize={21} key="2" country="in" category="business"/>} />
            <Route  path="/environment" element={<News pageSize={21} key="3" country="in" category="environment"/>} />
            <Route  path="/food" element={<News pageSize={21} key="4" country="in" category="food"/>} />
            <Route  path="/health" element={<News pageSize={21} key="5" country="in" category="health"/>} />
            <Route  path="/politics" element={<News pageSize={21} key="6" country="in" category="politics"/>} />
            <Route  path="/science" element={<News pageSize={21} key="7" country="in" category="science"/>} />
            <Route  path="/sports" element={<News pageSize={21} key="8" country="in" category="sports"/>} />
            <Route  path="/technology" element={<News pageSize={21} key="9" country="in" category="technology"/>} />
            <Route  path="/top" element={<News pageSize={21} key="10" country="in" category="top"/>} />
          </Routes>
          </Router>
      </div>
    )
  }
}

