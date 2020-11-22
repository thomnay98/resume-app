import React from 'react';

function ModalImage({ image, showModal, setShowModal }) {
    return (
        <div className={showModal?"modal-img show":"modal-img"}>
          <span onClick={()=>setShowModal(false)}>×</span>
          <img 
            src={image} 
            alt=" modal" 
          />
        </div>
    )
}

export default ModalImage;
