import { useModal } from "../../hooks/useModal";

const DemoModal = () => {
  const { showModal, closeModal, confirmModal } = useModal();
  const handleYes = () => {
    alert("yue");
  }
  const handle = () => {
    confirmModal(
      {
        title: "Confirm modal 123123",
        message: "Do you want 123123123",
        onApply: () => handleYes(),
        onCancel: () => closeModal(),
        // applyLabel: "Yes ser",
        // cancelLabel: "No ser ",
      }
    );
  }
  return (
    <>
      <button type="" onClick={handle}> ấn</button>
    </>

  );
}
export default DemoModal