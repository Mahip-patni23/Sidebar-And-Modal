import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './Context'

const Modal = () => {
  const {isModal, setIsModal} = useGlobalContext()
    return <section className={`${isModal? 'modal-center show-modal': 'modal-center'}`}>
              <article className='modal-content'>
                <button className="close-btn modal-close-btn" onClick={() => setIsModal(false)}><FaTimes></FaTimes></button>
                <h3>modal content</h3>
              </article>
            </section>
}

export default Modal;