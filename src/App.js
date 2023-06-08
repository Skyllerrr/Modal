import React, { useState } from 'react';
import './App.css';

// Modal이라는 이름의 함수를 만들어, 모달 창을 열기 위한 상태를 useState로 관리한다.
const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  // openModal이라는 함수를 만들어, isOpen의 상태를 true로 만든다.
  const openModal = () => {
    setIsOpen(true);
  };

  // closeModal이라는 함수를 만들어, isOpen의 상태를 false로 만든다.
  const closeModal = () => {
    setIsOpen(false);
  };

  // 모달 창을 열기 위한 버튼, 닫기 위한 버튼과 열었을 때의 꾸며진 모달 창을 나타낸다.
  return (
    <div className='wrapper'>
      <section className='sub-wrapper'>
        <p>버튼을 누르면 제가 하고싶은 말이 있어요</p>
        <button onClick={openModal} className="OpenButton">눌러봐요</button>
      </section>
    
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>글로벌 한국 네트워크 IT기업 멋쟁이 사자 추진 온라인 위원회</h2>
            <p>4조 여러분 프로젝트 하시다가 지치고 힘들면 저희 회고조원분들을 찾아봐요🙂</p>
            <button onClick={closeModal} className="CloseButton">화이팅</button>
          </div>
        </div>
      )}
      {isOpen && <div className="modal-backdrop" onClick={closeModal} />}
    </div>
  );
};

export default Modal;