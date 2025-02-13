'use client'
import HeaderBox from '@/components/HeaderBox'
import { RightSidebar } from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getCurrentUser } from '@/lib/session'
import React, { useEffect, useState } from 'react'



const Home = () => {

  //const loggedIn = { firstName: 'Sahan', lastName: 'Thilakaratne', email: 'sahanpradeeptha@gmail.com' }
  const [loggedIn, setLoggedIn] = useState<string | null>(null);

  

  

  

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
          type="greeting"
          title = "Welcome"
          user= {session?.userId || 'Guest'}
          subtext='Create and manage your account'/>


          <TotalBalanceBox
          accounts = {[]}
          totalBanks = {2}
          totalCurrentBalance={1250.35}

          />

        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar 
      user={loggedIn}
      transactions = {[]}
      banks = {[]}/>
      
    </section>
  )
}

export default Home
