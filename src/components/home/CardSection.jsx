import "./styles/CardSection.css"
import Card from "../home/Card"

function CardSection({cards, categories}) {
    return(
        <>
        {
            categories.map(( category, idx ) => {
                return (
                    <div className="container" key={idx}>
                        <article>
                            <h2>{category.title}</h2>
                            <ul>
                                {
                                    cards.length ? <Card categoryTitle={category.title} cards={cards}/>                                      
                                    : <p>No hay productos disponibles.</p>
                                }
                            </ul>
                        </article>
                    </div>
                );
            })
        }
        </>
    );
}

export default CardSection;
