import { useState, useEffect } from "react";
import { Alert } from "antd";

const useGetCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [errorHandler, setErrorHandler] = useState({
        hasError: false,
        errorResponse: {},
    });

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/?page=1")
            .then((response) => response.json())
            .then((data) => setCharacters(data))
            .catch((error) =>
                setErrorHandler({ hasError: true, errorResponse: error })
            );
    }, []);

    useEffect(() => {
        changePage();
    }, [currentPage]);

    useEffect(() => {
        if (errorHandler.hasError) {
            <Alert message="Error Text" type="error" />;
        }
    }, [errorHandler.hasError]);

    const changePage = () => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
            .then((response) => response.json())
            .then((data) => setCharacters(data))
            .catch((error) =>
                setErrorHandler({ hasError: true, errorResponse: error })
            );
    };

    return {
        characters,
        errorHandler,
        currentPage,
        setCurrentPage,
    };
};

export default useGetCharacters;
