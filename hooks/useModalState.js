import { useState } from 'react';

/**
 * @function useModalState
 * @description A custom hook used for modal
 * @param {Number} status - initial default modal status
 */
const useModalState = (status = false) => {
  const [openModal, setModalStatus] = useState(status);

  const toggleModal = () => {
    setModalStatus(!openModal);
  };

  return {
    openModal,
    toggleModal,
    setModalStatus,
  };
};

export default useModalState;
