import React from 'react'
import Logo from '../../img/Logo.png'
import './Sidebar.css'
import { GrWindows } from 'react-icons/gr'
import { DiLinux } from 'react-icons/di'
import { GiLaptop } from 'react-icons/gi'
import { GiConsoleController } from 'react-icons/gi'
import { RiBrushFill } from 'react-icons/ri'
import { GiAutoRepair } from 'react-icons/gi'
import { IoSettingsSharp } from 'react-icons/io5'
import { ImFolderDownload } from 'react-icons/im'
import { AiOutlineInstagram } from 'react-icons/ai'
import { RiTelegramFill } from 'react-icons/ri'
import { IoLogoFacebook } from 'react-icons/io'
import { HiArrowNarrowLeft } from 'react-icons/hi'

function Sidebar() {
  return (
    <>
      <div className="sidebar">
          <div className="sidebar-head"><img src={Logo} alt="logo" className="logo" /> < HiArrowNarrowLeft  className="menu-button"/></div>
        <div className="menu">
          <h2 className="menu-heading">Categories</h2>
          <div className="heading-line"></div>
          <div className="menu-list">
              <span className="menu-span"><GrWindows className="menu-icon menu-icon-active"/><a href="#" className="menu-list-item menu-active">Windows OS</a></span>
              <span className="menu-span"><DiLinux className="menu-icon"/><a className="menu-list-item" href="#">Linux OS</a></span>
              <span className="menu-span"><GiLaptop className="menu-icon"/><a className="menu-list-item" href="#">Programms</a></span>
              <span className="menu-span"><GiConsoleController className="menu-icon"/><a className="menu-list-item" href="#">Games</a></span>
              <span className="menu-span"><RiBrushFill className="menu-icon"/><a className="menu-list-item" href="#">Themes</a></span>
              <span className="menu-span"><GiAutoRepair className="menu-icon"/><a className="menu-list-item" href="#">Repair</a></span>
              <span className="menu-span"><ImFolderDownload className="menu-icon"/><a className="menu-list-item" href="#">Downloads & Uploads</a></span>
              <span className="menu-span"><IoSettingsSharp className="menu-icon"/><a className="menu-list-item" href="#">Settings</a></span>
          </div>
          <div className="footer-line"></div>
          <div className="menu-footer">
            <span className="menu-footer-text">Copyright &#xa9; UMDSOFT</span>
            <div className="menu-footer-social">
              <a className="menu-footer-social-icon" href=""><AiOutlineInstagram className="social-icon"/></a>
              <a className="menu-footer-social-icon" href=""><RiTelegramFill className="social-icon"/></a>
              <a className="menu-footer-social-icon" href=""><IoLogoFacebook className="social-icon"/></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )}

export default Sidebar
