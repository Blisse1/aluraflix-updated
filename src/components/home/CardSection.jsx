import "./CardSection.css"
import Card from "../home/Card"

function CardSection({categories, children}) {
    return(
        <>
        {
            categories.map(( category, idx ) => {
                return (
                    <div className="container" key={idx}>
                        <article>
                            <h2>{category.title}</h2>
                        </article>
                    </div>
                );
            })
        }
        </>
    );
}

export default CardSection;
