import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RetriveStatuses} from 'Controllers/Services/Status/module_status.service';
import SearchBar from 'Views/Components/Forms/Searchbar';

import Status from './StatusPut';

const StatusModule = () => {
  const [search, setSearch] = useState('');
  const [searchShow, setSearchShow] = useState(false);

  const statuses = useSelector(state => state.statuses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(RetriveStatuses());
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
    if (e.target.value === '') {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  const filter = statuses.filter((data) => data.id.toLowerCase().includes(search.toLowerCase()));

  const searchConfig = () => {
    if (searchShow) {
      return (
        <Status id={filter} />
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
