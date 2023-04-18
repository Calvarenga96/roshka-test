import { useState } from "react";
import { Pagination } from "antd";
import CharacterCard from "../../components/CharacterCard";
import useGetCharacters from "../../hooks/useGetCharachters";
import styles from "./index.module.css";

const Home = () => {
    const { characters, setCurrentPage, currentPage } = useGetCharacters();

    return (
        <div>
            <div className={styles.cardsContainer}>
                {characters?.results?.map((character) => (
                    <CharacterCard character={character} />
                ))}
            </div>
            <div className={styles.paginationContainer}>
                <Pagination
                    total={characters?.info?.count}
                    current={currentPage}
                    onChange={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default Home;
