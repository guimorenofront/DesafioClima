import React,{useState} from 'react';
import SearchButton from './SearchButton';
import '../Styles/SearchPage.scss'
import Modal from './ClimateModal';
function SearchBar() {
    const [value, setValue] = useState('')
  return (
    <div className='Search__PageContainer'>
      <Modal/>
        <input className='Search__PageContainer__Bar' type={'text'} onChange={e => setValue(e.target.value)} placeholder="Cidade, UF"></input>
        <SearchButton Search={value}></SearchButton>
    </div>
  );
}

export default SearchBar;