import './App.css';
import React from 'react';
import { Article,CTA,Feature,Brand,Navbar } from './components';
import { Blog,Features,Footer,Header,Possibility,WhatGpt } from './containers';

 function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar></Navbar>
        <Header></Header>
        <Brand></Brand>
        <WhatGpt></WhatGpt>
        <Features />
        <Possibility></Possibility>
        <CTA></CTA>
        <Blog></Blog>  \
        <Footer></Footer>

      </div>
      
      
       </div>

  )
    
}

export default App;
