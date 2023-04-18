import { useState, useEffect } from "react";

const useGetCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [errorHandler, setErrorHandler] = useState({
        hasError: false,
        errorResponse: {},
    });

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((data) => setCharacters(data))
            .catch((error) =>
                setErrorHandler({ hasError: true, errorResponse: error })
            );
    }, []);

    return {
        characters,
        errorHandler,
    };
};

export default useGetCharacters;
