import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/app");
        }, 2000);
    }, []);

    return (
        <div className=" flex justify-center items-center h-screen">
            <img src="./assets/images/404.png" alt="404" width="50%" />
        </div>
    );
}
