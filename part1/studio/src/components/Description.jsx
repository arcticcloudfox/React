import React from "react";
import styles from "./Description.module.css";

function RecipeAuthor() {
    const authorLink = "https://www.spoonforkbacon.com/";
    const authorPhoto = "https://spoonforkbacon.com/wp-content/uploads/2020/05/Jenny_with_text.jpg";
    const authorName = "Jenny Park";

    return (
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="Jenny Park" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Spoon Fork Bacon</a>
            </div>
        </div>
    );
}

class RecipeDescription extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <h1>One Pot Pasta Recipe</h1>
                    <p>A one pot pasta dish with zucchini and sausage</p>
                </div>
                <RecipeAuthor />
            </div>
        )
    }
}

export default RecipeDescription;