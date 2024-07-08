import "./Card.css"

function Card({cards, categoryTitle}) {
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
                        </li>
                    );
                })
        }
        </>
    );
}

export default Card;
