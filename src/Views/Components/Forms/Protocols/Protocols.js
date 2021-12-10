import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RetriveProtocols } from 'Controllers/Services/Protocol/module_protocol.service';
import SearchBar from 'Views/Components/Forms/Searchbar';

import Protocol from './ProtocolsPut';

const ProtocolModule = () => {
  const [search, setSearch] = useState('');
  const [searchShow, setSearchShow] = useState(false);

  const protocols = useSelector(state => state.protocols);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(RetriveProtocols());
  }, []);


  const handleInput = (e) => {
    setSearch(e.target.value);
    if (e.target.value === '') {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  const filter = protocols.filter((data) => data.id.toLowerCase().includes(search.toLowerCase()));
  
  const searchConfig = () => {
    if (searchShow) {
      return (
        <Protocol id={filter} />
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
export default ProtocolModule;
