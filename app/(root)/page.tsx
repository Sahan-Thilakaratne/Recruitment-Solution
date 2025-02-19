'use client'
import { FileUpload } from '@/components/FileUpload'
import HeaderBox from '@/components/HeaderBox'
import { RightSidebar } from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getCurrentUser } from '@/lib/session'
import React, { useEffect, useState } from 'react'



const Home = () => {

  const loggedIn = { firstName: '', lastName: '', email: '' }

  loggedIn.firstName = localStorage.getItem('currentUser')??''

  console.log("Logged in user: ", loggedIn)

  

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
          type="greeting"
          title = "Welcome"
          user= {loggedIn?.firstName || 'Guest'}
          subtext='Create and manage your account'/>


          <TotalBalanceBox
          accounts = {[]}
          totalBanks = {2}
          totalCurrentBalance={1250.35}

          />

        </header>

        RECENT TRANSACTIONS

        <FileUpload />

        
      </div>

      <RightSidebar 
      user={loggedIn}
      transactions = {[]}
      banks = {[]}/>
      
    </section>
  )
}

export default Home
