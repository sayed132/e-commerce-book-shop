import { useState } from 'react';
import data from '../../../books.json'; // Replace with the correct path to your data.json

const SearchModal = ({ closeModal }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-96">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
        <div className="mt-4">
          {filteredData.length === 0 ? (
            <p>No data found.</p>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {filteredData.map((item) => (
                <div key={item.id} className="bg-gray-200 p-2 rounded-md">
                  {item.title}
                </div>
              ))}
            </div>
          )}
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SearchModal;
