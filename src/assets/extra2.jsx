import React, { useState } from "react";
import ProductCard from "../CommonComponents/ProductCard";
import { useGetAllProductQuery } from "../../Features/AllSlice/Api/product.Api";

const ProductRight = () => {
  const { data, error, isLoading } = useGetAllProductQuery();

  const [page, setPage] = useState(1);
  const [pagenation, setPagenation] = useState(12);

  const totalProducts = data?.products?.length || 0;
  const totalPages = Math.ceil(totalProducts / pagenation);
  return (
    <div className="">
      <div className="flex justify-end">
        {" "}
        <div className="flex items-center gap-x-3">
          <h2>Show</h2>
          <select
            name=""
            id=""
            className="px-3 bg-slate-200 rounded"
            value={pagenation}
            onChange={(e) => setPagenation(Number(e.target.value))}
          >
            <option value="9">9</option>
            <option value="15">15</option>
            <option value="36">36</option>
          </select>
        </div>
      </div>

      {/* Product Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {" "}
        {data?.products
          ?.slice((page - 1) * pagenation, page * pagenation)
          .map((item, index) => (
            <ProductCard itemData={item} key={index} />
          ))}
        {/* {data?.products?.slice(0, 12).map((item, index) => (
          <ProductCard itemData={item} key={index} />
        ))} */}
      </div>

      {/* pagination */}
      <div
        aria-label="Page navigation example"
        className="flex justify-center mt-7 mb-[100px]"
      >
        <ul class="inline-flex -space-x-px text-base h-10">
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
            >
              Previous
            </a>
          </li>
          {[...new Array(Math.floor(data?.products?.length / pagenation))].map(
            (item, index) => (
              <li key={index}>
                <a
                  href="#"
                  class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  {index}
                </a>
              </li>
            )
          )}

          <li>
            <a
              href="#"
              class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 "
            >
              Next
            </a>
          </li>
        </ul>
      </div>

      {/* Product Card */}
    </div>
  );
};

export default ProductRight;

// <nav aria-label="Page navigation example">
//         <ul class="inline-flex -space-x-px text-sm">
//           <li>
//             <a
//               href="#"
//               class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 "
//             >
//               Previous
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
//             >
//               1
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
//             >
//               2
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               aria-current="page"
//               class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
//             >
//               3
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
//             >
//               4
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
//             >
//               5
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 "
//             >
//               Next
//             </a>
//           </li>
//         </ul>
//       </nav>
