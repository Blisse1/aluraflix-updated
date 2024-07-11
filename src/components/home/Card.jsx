import "./Card.css"

function Card({cards, categoryTitle, handleDelete, toggleDialog}) {
    return(
        <>
        {
            cards.filter((card) => card.option === categoryTitle)
                .map((card, idx) => {
                    return (
                        <li key={idx} className="Card">
                            <img src={card.imagen} height="100px"/>
                            <button onClick={() => handleDelete(card.id)}>Delete</button>
                            <button onClick={() => toggleDialog({card})}>Edit</button>
                        </li>
                    );
                })
        }
        </>
    );
}

export default Card;
