import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './Context'

const Home = () => {
    const {setIsSideBar, setIsModal} = useGlobalContext();
    
    return <main>
      <button className="toggle-btn" onClick={() => setIsSideBar(true)}>
        <FaBars></FaBars>
      </button>
      <button className='modal-btn' onClick={() => setIsModal(true)}>
        show modal
      </button>
    </main> 
}

export default Home;