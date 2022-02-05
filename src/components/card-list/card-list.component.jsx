import './card-list.styles.css';
import { Card } from '../card/card.component.jsx';

export const CardList = ({ items }) => 
    <div className='card-list'>
        {items.map((item, index) => <Card item={item} key={index}/>)}
    </div>;