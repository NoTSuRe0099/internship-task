import React from "react";
import FeedbackForm from "../FormComponent/FeedbackForm";

const Sidebard = ({ list, setList, toggleForm, setToggleForm }) => {
    return (
        <div
            className={`bg-[#E3EBF1] h-screen shadow-2xl rounded-r-[30px] p-[3%] animate fixed z-20 flex w-[20%] ${
                toggleForm && "w-[60%] "
            }`}
        >
            <div
                className={`notransition ${
                    toggleForm ? "w-[27%] mr-16 " : "w-full"
                }`}
            >
                <div className="flex items-center bg-[#ffffff] relative p-3 rounded-md mb-6 shadow-xl transition-none max-w-[270px]">
                    <div className="h-12 w-12 relative rounded-full overflow-hidden mr-4">
                        <img
                            className="w-full h-full object-cover"
                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt="avatar"
                        />
                    </div>
                    <div className="">
                        <h1 className="font-bold text-lg ">Hi Reader</h1>
                        <h3 className="font-semibold text-sm -mt-2 text-gray-700">
                            Here's your News!
                        </h3>
                    </div>
                </div>

                {!toggleForm ? (
                    <div className="flex flex-col items-center max-w-[270px] bg-[#ffffff] relative px-8 py-4 rounded-md mb-6 shadow-xl">
                        <h1 className="text-3xl font-bold mb-4 ">
                            View Toggle
                        </h1>
                        <div className="inverted-shadow h-16 w-full relative flex items-center rounded-md overflow-hidden">
                            <span
                                onClick={() => {
                                    localStorage.setItem("list", !list);
                                    return setList(false);
                                }}
                                shadow-lg
                                className={` ${
                                    !list
                                        ? "bg-green-300 hover:bg-green-200 animate "
                                        : null
                                } text-4xl w-full h-full flex items-center justify-center cursor-pointer animate`}
                            >
                                <i class="bx bxs-grid"></i>
                            </span>
                            <span
                                onClick={() => {
                                    localStorage.setItem("list", !list);
                                    return setList(true);
                                }}
                                className={` ${
                                    list
                                        ? "bg-green-300 hover:bg-green-200 animate"
                                        : "bg-transparent"
                                } text-4xl w-full h-full flex items-center justify-center cursor-pointer animate`}
                            >
                                <i class="bx bx-list-ul"></i>
                            </span>
                        </div>
                    </div>
                ) : null}

                <div className="flex flex-col items-center max-w-[270px] bg-[#ffffff] relative px-8 py-4 rounded-md shadow-xl">
                    <h1 className="text-2xl font-bold mb-4 ">Have Feedback?</h1>
                    <button
                        onClick={() => {
                            setToggleForm(!toggleForm);
                        }}
                        className={` h-16 w-full rounded-md font-bold text-lg flex items-center justify-center  ${
                            toggleForm
                                ? "bg-red-300 animate hover:bg-red-200"
                                : "bg-green-300 animate hover:bg-green-200"
                        } `}
                    >
                        We're Listening?
                    </button>
                </div>
            </div>
            {toggleForm && <FeedbackForm />}
        </div>
    );
};

export default Sidebard;
