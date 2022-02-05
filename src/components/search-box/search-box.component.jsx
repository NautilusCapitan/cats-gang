import './search-box.styles.css';

export const SearchBox = ({ onChange }) =>
    <input 
        className='search-box'
        type='search'
        placeholder='Choose a cat:'
        onChange={onChange}
    />;