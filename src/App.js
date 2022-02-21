import React, { useState, useEffect } from "react";
import Card from "./Components/CardComponent/Card";
import Sidebard from "./Components/SidebarComponent/Sidebard";
import axios from "axios";
import Pagination from "./Components/PaginationComponent/Pagination";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ifram from "./Components/Ifram";

const App = () => {
    const [list, setList] = useState(
        JSON.parse(localStorage.getItem("list")) || false
    );
    const [toggleForm, setToggleForm] = useState(false);
    const [show, setShow] = useState(false);

    const [posts, setPosts] = useState([]);

    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(5);

    const [pageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(3);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    useEffect(() => {
        if (!list) {
            setitemsPerPage(6);
        } else {
            setitemsPerPage(5);
        }
    }, [list]);

    const handleClick = (event) => {
        setcurrentPage(Number(event.target.id));
    };

    const pages = [];

    for (let i = 1; i <= Math.ceil(posts.length / itemsPerPage); i++) {
        pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = posts.slice(indexOfFirstItem, indexOfLastItem);

    // console.log("indexOfLastItem", indexOfLastItem);
    // console.log("indexOfFirstItem", indexOfFirstItem);
    useEffect(() => {
        console.log(
            "maxPageNumberLimit",
            maxPageNumberLimit,
            "|",
            "minPageNumberLimit",
            minPageNumberLimit
        );
    }, [maxPageNumberLimit, minPageNumberLimit]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => setPosts(res.data));
    }, []);

    const handleNextbtn = () => {
        setcurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit - 2);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit - 2);
        }
    };

    const handlePrevbtn = () => {
        setcurrentPage(currentPage - 1);

        if (currentPage + 1 < maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + 2 - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + 2 - pageNumberLimit);
        }
    };
    // console.log("maxPageNumberLimit", maxPageNumberLimit);
    // console.log("minPageNumberLimit", minPageNumberLimit);

    const DeleteCard = (event, item) => {
        event.preventDefault();
        const newData = posts.filter((data) => data.id !== item.id);
        setPosts(newData);
    };

    const card = currentItems.map((post) => {
        return (
            <Card
                key={post.id}
                post={post}
                list={list}
                DeleteCard={DeleteCard}
                show={show}
                setShow={setShow}
            />
        );
    });

    return (
        <>
            <Router>
                <div className="flex bg-[#E3EBF1] h-screen w-screen relative justify-between">
                    <Sidebard
                        list={list}
                        setList={setList}
                        toggleForm={toggleForm}
                        setToggleForm={setToggleForm}
                    />
                    <div className="w-[20%] h-screen bg-transparent"></div>

                    <div className="mx-auto relative w-full">
                        <div
                            className={`mx-auto relative pt-[3%]  ${
                                toggleForm && "blur-sm"
                            }  ${
                                list
                                    ? "w-4/5  flex flex-col items-center animate"
                                    : " grid grid-cols-3 gap-6 animate h-max w-max max-w-[80%] relative"
                            } `}
                        >
                            {card}
                        </div>
                        {/* {show && (
                            <div
                                onClick={(e) => {
                                    setShow(!show);
                                    e.preventDefault();
                                }}
                                className="absolute top-0 -left-[20%] flex items-center justify-center z-30 h-screen w-screen bg-blur-2"
                            >
                                <iframe
                                    className="center w-4/5 h-4/5 z-20 border-8 border-gray-800 rounded-2xl"
                                    title="jwt"
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    frameborder="2"
                                >
                                    fff
                                </iframe>
                            </div>
                        )} */}
                        <div className=" absolute bottom-10 left-[50%] transform -translate-x-[50%] ">
                            <Pagination
                                pageNumber={pages}
                                handleClick={handleClick}
                                handleNextbtn={handleNextbtn}
                                handlePrevbtn={handlePrevbtn}
                                currentPage={currentPage}
                                maxPageNumberLimit={maxPageNumberLimit}
                                minPageNumberLimit={minPageNumberLimit}
                            />
                        </div>
                    </div>
                </div>
                <Routes>
                    <Route exact path="/iframe" element={<Ifram />} />
                    {/* <Route exact path="/" element={<App />} /> */}
                </Routes>
            </Router>
        </>
    );
};

export default App;
