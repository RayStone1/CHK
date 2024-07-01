import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/lk");
    }, [navigate]);

    return (
        <div>
            <h1>home</h1>
        </div>
    );
};

export default Home;
