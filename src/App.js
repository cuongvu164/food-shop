import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { routers } from './routers'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Loading from './components/Loading/Loading'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
// import Component from './components'

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Router>
          <ScrollToTop />
          <div id="all">
            <Header />
            <Navbar />
            <div id="content" className="site-content">
              <Switch>
                {
                  routers.map((item, index) => {
                    const { Component } = item
                    return (
                      <Route path={item.path} exact={item.exact} key={index}>
                        <Component />
                      </Route>
                    )
                  })
                }
                {/* <Component/> */}
              </Switch>

            </div>
            <Footer />
          </div>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
