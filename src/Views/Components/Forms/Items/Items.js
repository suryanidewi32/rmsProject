import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RetriveItems } from 'Controllers/Services/Item/module_item.service';
import SearchBar from 'Views/Components/Forms/Searchbar';

import Item from './ItemsPut';

const ItemModule = () => {

  const items = useSelector(state => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(RetriveItems());
  }, []);

  const [search, setSearch] = useState('');
  const [searchShow, setSearchShow] = useState(false);
  
   const filter = items.filter((data) => data.id.toLowerCase().includes(search.toLowerCase()));

  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
    if (e.target.value === '') {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  const searchConfig = () => {
    if (searchShow) {
      return (
        <Item id={filter} />
      );
    }
  };

  return (
    <div>
      <SearchBar handleInput={handleInput} />
      {searchConfig()}
    </div>
  );
};
export default ItemModule;
