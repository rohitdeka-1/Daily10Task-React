import { useState } from 'react'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'
function App() {

  return (
    <div>
      <Header/>
      <div className='flex flex-wrap'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div >
      <Footer/>
    </div>
  )
}

export default App
