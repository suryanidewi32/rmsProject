import React, { useEffect, useState } from 'react';

import axios from 'axios';

import SearchBar from 'Views/Components/Forms/Searchbar';

import  GetConfig  from './GetDataConfig';

const ConfigModule = () => {
  const [config, setConfig] = useState([]);
  const [search, setSearch] = useState('');
  const [searchShow, setSearchShow] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:4001/descriptor/configs').then((res) => {
      setConfig(res.data);
    });
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
    if (e.target.value === '') {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  const filter = config.filter((data) => data.id.toLowerCase().includes(search.toLowerCase()));

  const searchConfig = () => {
    if (searchShow) {
      return (
        <GetConfig id={filter} />
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
export default ConfigModule;
