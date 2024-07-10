import "./Card.css"

function Card({cards, categoryTitle, handleDelete, toggleDialog}) {

    return(
        <>
        {
            cards.filter((card) => card.option === categoryTitle)
                .map((card, idx) => {
                    return (
                        <li key={idx}>
                            <p>{card.titulo}</p>
                            <p>{card.imagen}</p>
                            <p>{card.video}</p>
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
