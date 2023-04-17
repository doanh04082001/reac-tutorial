import React, { useState } from 'react';

import BaseModal from '../component/baseModal';
import ConfirmModal from '../component/modals/ConfirmModal';

export const ModalContext = React.createContext();

const ModalContextProvide = ({ children }) => {
  const [open, setOpen] = useState(false);

  const initialModal = {
    content: <> </>,
    maxWidth: 'sm',
    closeCancel: true
  }

  const [baseModalState, setBaseModalState] = useState(initialModal);

  const initialConfirmModal = {
    title: "Confirm modal",
    message: "Do you want",
    onApply: () => null,
    onCancel: () => null,
    applyLabel: "Yes",
    cancelLabel: "No",
  }

  const [baseConfirmModalState, setBaseConfirmModalState] = useState(initialConfirmModal);

  const showModal = (config) => {
    setOpen(true);
    setBaseModalState({ ...initialModal, ...config });
  }

  const closeModal = () => {
    setOpen(false);
  }

  const confirmModal = (configConfirm) => {
    showModal({
      content: <ConfirmModal {...configConfirm} />,
      maxWidth: "sm",
      closeCancel: false
    });

  }

  return <ModalContext.Provider
    value={{
      showModal,
      closeModal,
      confirmModal
    }}>
    {children}
    <BaseModal open={open}
      showModal={showModal}
      closeModal={closeModal}
      baseModalState={baseModalState}
    >
    </BaseModal>
  </ModalContext.Provider>
}
export default ModalContextProvide
