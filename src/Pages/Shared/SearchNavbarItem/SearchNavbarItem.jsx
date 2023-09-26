import  { useState } from 'react';
import Modal from 'react-modal';
import data from '../../../books.json'
// Import data.json here
Modal.setAppElement('#root');

function SearchNavbarItem() {
    console.log(data);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Logic to filter data based on search term
  const handleSearch = () => {
    const filteredData = data?.filter(item =>
      item?.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filteredData);
    setSearchResults(filteredData);
    setModalIsOpen(true);
  };

  return (
    <div>
      <div className="bg-blue-500 p-4">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 rounded-lg"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button
          className="ml-2 bg-white text-blue-500 px-4 py-2 rounded-lg"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="modal"
      >
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-3 gap-4 p-4">
            {searchResults.map(item => (
              <div key={item.id} className="border p-2">
                {item.name}
              </div>
            ))}
          </div>
        ) : (
          <p>No data found</p>
        )}
      </Modal>
    </div>
  );
}

export default SearchNavbarItem;
