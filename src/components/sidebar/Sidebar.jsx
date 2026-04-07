import React from 'react'
import { HiMenuAlt2 } from "react-icons/hi";
import { CiCirclePlus } from "react-icons/ci";
import { FaGem } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { IoIosHelpCircleOutline } from "react-icons/io";


import "./sidebar.css"
const Sidebar = () => {

  const handleMenu = () => {
    let sidebar = document.querySelector("#sidebar");

    if(sidebar.classList.contains("sidebar-open")) {
      sidebar.classList.remove("sidebar-open");
      sidebar.classList.add("sidebar");
    }else {
      sidebar.classList.add("sidebar-open");
      sidebar.classList.remove("sidebar");
    }
    
    
  }
  return (
    <div className='sidebar-open' id='sidebar'>
      <HiMenuAlt2 onClick={handleMenu} className='menu' />
      <div className='chat-btn-div'>
      <CiCirclePlus className='plusIcons' size={20} />
        <button className='btn-chat'> 
         New Chat</button>
      </div>
      <div className='recents-chats'>
        <h2>Recents</h2>
        <div className='chat-items'>
          <p>This is a Chat</p>
          <p>This is a Chat</p>
          <p>This is a Chat</p>
        </div>
        <a className='show-more' href='#'>Show More</a>
        <button className='clear-btn'>Clear All</button>
      </div>
      <div className="footer-section">
          <div className='footer-items'>
          <FaGem className='icons' color='white' size={20} /> <span>Gem Manager</span>


          </div>
          <div className='footer-items'>
          <IoIosHelpCircleOutline className='icons' color='white' size={20} /> <span>Help</span>


          </div>
          <div className='footer-items'>
          <GoHistory className='icons' color='white' size={20} /> <span>Activity</span>


          </div>
          <div className='footer-items'>
          <MdOutlineSettings  className='icons'color='white' size={20} /> <span>Settings</span>


          </div>
      </div>
      <div className="footer-sec2">
        <p>Location</p>
        <p>🇮🇳 India</p>
      </div>
    </div>
  )
}

export default Sidebar