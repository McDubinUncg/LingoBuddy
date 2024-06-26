import CloseButton from "./close-button";
import TryAgainButton from "./tryagain-button";
const Modal = ({ children, isOpen, onClose, onTryAgain }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          {children}
          <TryAgainButton onTryAgain={onTryAgain} />
          <CloseButton onClose={onClose} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
