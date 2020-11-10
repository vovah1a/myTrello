import React from 'react';
import "./TrelloList.css";
import TrelloCard from "./TrelloCard";
import { CardTravelSharp } from '@material-ui/icons';

const TrelloList = ({title}) =>{
    return(
        <div className = "container">
            <h4>{title}</h4>
            {CardTravelSharp.map(card => (
                <TrelloCard text={card.txt}/>
            ))}
        </div>
    )
}

export default TrelloList;