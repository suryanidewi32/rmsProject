import React, { useEffect, useState } from 'react';

import axios from 'axios';

import SearchBar from 'Views/Components/Forms/Searchbar';

import GetData from './GetDataStatus';

const StatusModule = () => {
  const [status, setStatus] = useState([]);
  const [search, setSearch] = useState('');
  const [searchShow, setSearchShow] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:4001/descriptor/statuses').then((res) => {
      setStatus(res.data);
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

  const filter = status.filter((data) => data.id.toLowerCase().includes(search.toLowerCase()));

  const searchConfig = () => {
    if (searchShow) {
      return (
        <GetData id={filter} />
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
export default StatusModule;
