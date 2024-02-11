import React from 'react';


const SearchResultCard = ({ fileName, pageNumber, instances, found }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 max-w-md mx-auto my-4">
      <h3 className="text-lg font-semibold">{fileName}</h3>
      <p className="text-gray-600">Page Number: {pageNumber}</p>
      <p className="text-gray-600">Instances: {instances}</p>
      <div className="flex items-center text-green-500">
        {/* Replace this span with an actual icon component if you prefer */}
        {found && <span className="material-icons">check_circle</span>}
        <span className="ml-2">{found ? 'Text Found' : 'Text Not Found'}</span>
      </div>
    </div>
  );
};

export default SearchResultCard;

