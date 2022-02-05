import './card.styles.css';

export const Card = ({ item: { src, name, email } }) =>
    <div className='card'>
        <img src={src} alt='a muzzle of a cat'/>
        <div className='card-name'>{name}</div>
        <div className='card-email'>{email}</div>
    </div>;