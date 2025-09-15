import React, { useState } from "react";
import ProductCard from "../CommonComponents/ProductCard";
import { useGetAllProductQuery } from "../../Features/AllSlice/Api/product.Api";

const ProductRight = () => {
  const { data, error, isLoading } = useGetAllProductQuery();

  const [page, setPage] = useState(1);
  const [pagenation, setPagenation] = useState(12);

  const totalProducts = data?.products?.length || 0;
  const totalPages = Math.ceil(totalProducts / pagenation);

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className="">
      {/* Show Limit Dropdown */}
      <div className="flex justify-end">
        <div className="flex items-center gap-x-3">
          <h2>Show</h2>
          <select
            className="px-3 bg-slate-200 rounded"
            value={pagenation}
            onChange={(e) => {
              setPagenation(Number(e.target.value));
              setPage(1); // reset to first page when per-page changes
            }}
          >
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
          </select>
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.products
          ?.slice((page - 1) * pagenation, page * pagenation)
          .map((item, index) => (
            <ProductCard itemData={item} key={index} />
          ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-7 mb-[100px] ">
        <ul className="inline-flex -space-x-px text-base h-10 cursor-pointer">
          {/* Previous */}
          <li>
            <a
              onClick={handlePrev}
              disabled={page === 1}
              className={`flex items-center justify-center px-4 h-10 ms-0 leading-tight border border-gray-300 rounded-s-lg 
                ${
                  page === 1
                    ? "text-gray-300 bg-gray-100 cursor-not-allowed"
                    : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 "
                }`}
            >
              Previous
            </a>
          </li>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, index) => {
            const pageNum = index + 1;
            return (
              <li key={pageNum}>
                <a
                  onClick={() => setPage(pageNum)}
                  className={`flex items-center justify-center px-4 h-10 border border-gray-300 
                    ${
                      page === pageNum
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
                    }`}
                >
                  {pageNum}
                </a>
              </li>
            );
          })}

          {/* Next */}
          <li>
            <a
              onClick={handleNext}
              disabled={page === totalPages}
              className={`flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 rounded-e-lg 
                ${
                  page === totalPages
                    ? "text-gray-300 bg-gray-100 cursor-not-allowed"
                    : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
                }`}
            >
              Next
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductRight;
