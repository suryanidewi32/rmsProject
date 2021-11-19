import React, { useEffect, useState } from 'react';

import axios from 'axios';

import SearchBar from 'Views/Components/Forms/Searchbar';

import Getid from './GetDataProt';

const ProtocolModule = () => {
  const [protocol, setProtocol] = useState([]);
  const [search, setSearch] = useState('');
  const [searchShow, setSearchShow] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:4001/descriptor/protocols').then((res) => {
      setProtocol(res.data);
    });
  }, []);

  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
    if (e.target.value === '') {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  const filter = protocol.filter((data) => data.id.toLowerCase().includes(search.toLowerCase()));
  
  const searchConfig = () => {
    if (searchShow) {
      return (
        <Getid id={filter} />
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
