import { BannerProps } from "../interfaces";

// const XMarkIcon = () => {
//   return (
//     <>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={1.5}
//         stroke="currentColor"
//         className="w-6 h-6 text-white"
//         aria-hidden="true"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M6 18L18 6M6 6l12 12"
//         />
//       </svg>
//     </>
//   );
// };

const Banner: React.FC<BannerProps> = ({ children }) => {
  return (
    <>
      <div className="bg-red-600">
        <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between">
            {children}

            {/* <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                className="-mr-1 flex p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              >
                <span className="sr-only">Dismiss</span>
                <XMarkIcon />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
