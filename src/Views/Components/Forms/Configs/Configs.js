import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RetriveConfigs} from 'Controllers/Services/Config/module_config.service';
import SearchBar from 'Views/Components/Forms/Searchbar';

import Config from './ConfigPut';

const ConfigModule = () => {
  
  const [config, setConfig] = useState([]);
  const [search, setSearch] = useState('');
  const [searchShow, setSearchShow] = useState(false);

  const configs = useSelector(state => state.configs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(RetriveConfigs());
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
    if (e.target.value === '') {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  const filter = configs.filter((data) => data.id.toLowerCase().includes(search.toLowerCase()));

  const searchConfig = () => {
    if (searchShow) {
      return (
        <Config id={filter} />
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
