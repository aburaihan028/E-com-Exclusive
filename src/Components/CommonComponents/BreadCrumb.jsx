import React from "react";
import { useLocation, Link } from "react-router"; // v7 এ react-router-dom ব্যবহার করুন

const BreadCrumb = () => {
  const { pathname } = useLocation();
  // উদাহরণ: pathname = "/products/electronics"
  const pathNameArray = pathname.split("/").filter((path) => path);
  // উদাহরণ: ["products", "electronics"]

  return (
    <div className="py-5">
      <div className="container m-auto flex gap-2 items-center">
        {/* Home link */}
        <Link to="/" className="text-blue-500 hover:underline">
          Home
        </Link>

        {pathNameArray.map((item, index) => {
          // প্রতিটি item এর জন্য route তৈরি করা
          const routeTo = "/" + pathNameArray.slice(0, index + 1).join("/");
          // Capitalize: প্রথম অক্ষর বড় করা
          const displayName = item.charAt(0).toUpperCase() + item.slice(1);

          return (
            <React.Fragment key={routeTo}>
              <span className="text-gray-500">/</span>
              {index === pathNameArray.length - 1 ? (
                <span className="text-gray-700">{displayName}</span> // last item plain text
              ) : (
                <Link to={routeTo} className="text-blue-500 hover:underline">
                  {displayName}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default BreadCrumb;
