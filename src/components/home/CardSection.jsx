import "./CardSection.css"
import Card from "../home/Card"

function CardSection({cards, categories, handleDelete, toggleDialog}) {
    return(
        <>
        {
            categories.map(( category, idx ) => {
                return (
                    <div className="cardContainer" key={idx}>
                        <article>
                            <h2>{category.title}</h2>
                            <ul>
                                {
                                    cards.length ? <Card categoryTitle={category.title} cards={cards} 
                                    handleDelete={handleDelete} toggleDialog={toggleDialog}/>                                      
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
