import styles from "./index.module.css";

const CharacterCard = ({ character }) => {
    return (
        <div key={character.id} className={styles.cardContainer}>
            <img src={character.image} />
            <div className={styles.cardTextData}>
                <p>Name: {character.name}</p>
                <p>Gender: {character.gender}</p>
                <p>Status: {character.status}</p>
            </div>
        </div>
    );
};

export default CharacterCard;
