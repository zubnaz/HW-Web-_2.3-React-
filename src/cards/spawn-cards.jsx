import { useState } from "react";
import { CARDS } from "./cards-list";
import "./card-list.css";

export function SpawnCards() {
    const [cards, setNewCard] = useState(CARDS);
    let generate = async () => {
        let data = await fetch("https://www.deckofcardsapi.com/api/deck/new/draw/?count=1");
        let card = await data.json();
        if (card != null) {
            setNewCard([...cards, card.cards[0].image]);
            console.log(cards);
        }

    }
    return (
        <div className="main">
            <div className="card-list">
                {cards.map((c) =>
                    <img src={c}></img>
                )}
            </div>
            <button onClick={generate}>Generate card</button>
        </div>


    );
} 