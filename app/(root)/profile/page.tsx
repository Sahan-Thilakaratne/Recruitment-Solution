'use client'
import { CVUpload } from '@/components/CVUpload'
import { FileUpload } from '@/components/FileUpload'
import HeaderBox from '@/components/HeaderBox'
import { MyProfile } from '@/components/MyProfile'
import { RightSidebar } from '@/components/RightSidebar'
import React from 'react'

const Profile = () => {
    const loggedIn = { firstName: '', lastName: '', email: '' }

    loggedIn.firstName = localStorage.getItem('currentUser')??''
  
    console.log("Logged in user: ", loggedIn)
  
    
  
    return (
      <section className='home'>
        <div className='home-content'>
  
          
          <MyProfile />
          
  
          
        </div>
  
        
        
      </section>
    )
  }


export default Profile