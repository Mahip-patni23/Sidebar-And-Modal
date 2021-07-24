import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { links, social } from './data'
import { useGlobalContext } from './Context'

const Sidebar = () => {
  const {isSideBar, setIsSideBar} = useGlobalContext()
    return <section className={`${isSideBar? 'sidebar-center show-sidebar':'sidebar-center'}`}>
      <div className="heading">
        <h2>sidebar-<span>modal</span></h2>
        <button className="close-btn" onClick={() => setIsSideBar(false)}>
          <FaTimes></FaTimes>
        </button>
      </div>
      <ul className="links">
          
        {
          links.map((link) => {
            const {id, url, name, icon} = link;
            return <li key={id}>
              <a href={url}>
                {icon} {name}
              </a>
            </li>
          })
        }
      </ul>
      <ul className="social-icons">
        {
          social.map((singleIcon) => {
            const {id, url, icon} = singleIcon;
            return <li key={id}>
              <a href={url}>
                {icon}
              </a>
            </li>
          })
        }
      </ul>
    </section>
}

export default Sidebar;

