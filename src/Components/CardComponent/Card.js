import React from "react";

const Card = (props) => {
    const { title, body } = props.post;
    const { list, DeleteCard } = props;
    return (
        <div
            className={`bg-[#ffffff] flex shadow-md relative animate ${
                list
                    ? "w-[80%] p-4 h-max items-center mb-4 rounded-2xl"
                    : "p-6 flex-col-reverse max-w-[320px] max-h-[360px] justify-between rounded-lg "
            }  `}
        >
            <div
                className={`relative overflow-hidden ${
                    list
                        ? "h-16 w-16 rounded-full mr-4"
                        : "w-full max-h-[200px] rounded-md mt-2"
                } `}
            >
                <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1644962986863-d075ee548966?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
                    alt="card-img"
                />
            </div>

            <div className=" w-4/5  ">
                <h1 className=" font-bold text-lg  line-clamp-2">{title}</h1>
                <h2 className=" text-gray-800 line-clamp-2">{body}</h2>
                <h3 className=" text-gray-400 font-bold text-sm mt-2">
                    {new Date(Date()).toDateString()}
                </h3>
            </div>

            <button
                onClick={() => DeleteCard(props.post)}
                className={`w-10 h-10  flex items-center justify-center absolute ${
                    list
                        ? "-right-14 bg-[#ffffff] rounded-full"
                        : "right-2 top-2"
                }`}
            >
                <span className="text-3xl text-red-400">
                    <i class="bx bx-x"></i>
                </span>
            </button>
        </div>
    );
};

export default Card;
