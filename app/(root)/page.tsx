import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {

  const loggedIn = { firstName: 'Sahan', lastName: 'Thilakaratne' }

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
      </div>
      
    </section>
  )
}

export default Home
