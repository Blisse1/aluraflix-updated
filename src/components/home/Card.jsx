import "./styles/Card.css"

function Card({cards, categoryTitle}) {
    return(
        <>
        {
            cards.filter((card) => card.category === categoryTitle)
                .map((card, idx) => {
                    return (
                        <li key={idx}>
                            <p>{card.text}</p>
                        </li>
                    );
                })
        }
        </>
    );
}

export default Card;
