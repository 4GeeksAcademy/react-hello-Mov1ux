import React from "react";
import Card from './Card';

const Cards = () => {
    let cardsInfo = [
        {title: "Practicando", text: "Apreniendo a usar react", Image:"https://picsum.photos/seed/picsum/200/300"},
        {title: "Gatitos", text: "Me gustan los memes de gatitos"},
        {title: "Distracion", text: "Menos redes sociales y mas code"},
        {title: "Calvo", text: "Me arranco un pelo cada vez que veo un error"},
        {title: "Comida", text: "Pensar tanto me da hambre"},
        {title: "Comida", text: "Pensar tanto me da hambre"},
        {title: "Comida", text: "Pensar tanto me da hambre"},
    ]
    return (
        <div className="container-fluid row">
            {cardsInfo.map((card)=>{
                return <Card className="col-lg-6 col-md-6" title={card.title} text={card.text} />
            })}
        </div>
    )
}

export default Cards;