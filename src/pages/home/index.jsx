import CharacterCard from "../../components/CharacterCard";
import useGetCharacters from "../../hooks/useGetCharachters";
import styles from "./index.module.css";

const Home = () => {
    const { characters } = useGetCharacters();

    return (
        <div className={styles.cardsContainer}>
            {characters?.results?.map((character) => (
                <CharacterCard character={character} />
            ))}
        </div>
    );
};

export default Home;
