import React, { useState } from "react";
import "./pagination.css";
const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button
        className="button"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <button
        className="button"
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
      >
        1
      </button>
      <button
        className="button"
        onClick={() => handlePageChange(2)}
        disabled={currentPage === 2}
      >
        2
      </button>
      <button
        className="button"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
