import React from "react";
import { useNavigate } from "react-router-dom";

const Ifram = () => {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate("/")}
            className="absolute top-0 left-0 flex items-center justify-center z-30 h-screen w-screen bg-blur-2"
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
    );
};

export default Ifram;
