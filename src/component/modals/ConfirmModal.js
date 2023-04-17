const ConfirmModal = (configConfirm) => {
  const { title, message, onApply, onCancel, applyLabel, cancelLabel } = configConfirm;
  return (
    <div className={`block`}>
      <div className="z-50 overflow-y-auto">
        <div className="py-4 text-left px-6">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900">{title ? title : 'Confirm modal'}</h2>
          </div>
          <div className="my-5">
            <p className="text-gray-700">{message ? message : 'Content of modal'}</p>
          </div>
          <div className="my-5 flex justify-end">
            <button onClick={() => onApply ? onApply() : null} className="text-gray-500 bg-transparent font-semibold py-2 px-4 border border-gray-500 rounded mr-2">
              {applyLabel ? applyLabel : 'Yes'}
            </button>
            <button onClick={() => onCancel ? onCancel() : null} className="text-white bg-red-500 hover:bg-red-700 font-semibold py-2 px-4 rounded">
              {cancelLabel ? cancelLabel : 'No'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ConfirmModal;