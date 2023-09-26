import  { useState } from 'react';
import SearchModal from './SearchModal';

const ItemNavbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <div className="bg-blue-500 p-4">
        <button
          className="bg-white text-blue-500 px-4 py-2 rounded-md"
          onClick={openModal}
        >
          Open Modal
        </button>
      </div>
      {isModalOpen && <SearchModal closeModal={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default ItemNavbar;
