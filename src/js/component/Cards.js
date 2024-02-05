import React from "react";
import Card from './Card';

const Cards = () => {
    let cardsInfo = [
        {title: "Practicando", text: "Apreniendo a usar react", image:"https://picsum.photos/200?random=1"},
        {title: "Gatitos", text: "Me gustan los memes de gatitos", image:"https://picsum.photos/200?random=2"},
        {title: "Distracion", text: "Menos redes sociales y mas code", image:"https://picsum.photos/200?random=3"},
        {title: "Calvo", text: "Me arranco un pelo cada vez que veo un error", image:"https://picsum.photos/200?random=4"},
        {title: "Comida", text: "Pensar tanto me da hambre", image:"https://picsum.photos/200?random=5"},
        {title: "Comida", text: "Pensar tanto me da hambre", image:"https://picsum.photos/200?random=6"},
    ]
    return (
        <div className="container-fluid row">
            {cardsInfo.map((card,)=>{
                return <Card title={card.title} text={card.text} image={card.image} />
            })}
        </div>
    )
}

export default Cards;