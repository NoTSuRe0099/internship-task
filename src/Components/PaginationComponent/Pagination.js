import React from "react";

const Pagination = (props) => {
    const {
        pageNumber,
        handleClick,
        handleNextbtn,
        handlePrevbtn,
        currentPage,
        maxPageNumberLimit,
        minPageNumberLimit,
    } = props;

    return (
        <div className="flex mx-auto">
            <button
                onClick={handlePrevbtn}
                className={`text-gray-400 hover:text-gray-600 text-lg  ${
                    currentPage === pageNumber[0] ? "hidden" : "block"
                } `}
            >
                <i class="bx bxs-chevrons-left bx-flip-vertical"></i>
            </button>

            {pageNumber.map((number) => {
                if (
                    number < maxPageNumberLimit + 1 &&
                    number > minPageNumberLimit
                ) {
                    console.log(number);
                    return (
                        <button
                            id={number}
                            onClick={handleClick}
                            key={number}
                            className={`font-semibold  w-8 h-8 text-center flex justify-center
                         items-center rounded-full mx-2
                         ${
                             currentPage === number
                                 ? "text-gray-600 bg-white"
                                 : "text-gray-200 bg-gray-400"
                         }
                        `}
                        >
                            {number}
                        </button>
                    );
                } else {
                    return null;
                }
            })}

            <button
                onClick={handleNextbtn}
                className={`text-gray-400 hover:text-gray-600 text-lg ${
                    currentPage === pageNumber.length ? "hidden" : "block"
                } `}
            >
                <i class="bx bxs-chevrons-right bx-flip-vertical"></i>
            </button>
        </div>
    );
};

export default Pagination;
