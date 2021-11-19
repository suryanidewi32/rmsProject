import React, { useEffect, useState } from 'react';

import axios from 'axios';

import SearchBar from 'Views/Components/Forms/Searchbar';

import Item from './module_Putitem.service';

const ItemModule = () => {
  const [item, setItem] = useState({
    id:'',
    type:'',
    name:'',
    priority:'',
    default:'',
    description:'',
    ui:'',
    persist:''
  });
  const [search, setSearch] = useState('');
  const [searchShow, setSearchShow] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:4001/descriptor/item/101').then((res) => {
      setItem(res.data);
    });
  }, []);

  // const handleInput = (e) => {
  //   console.log(e.target.value);
  //   setSearch(e.target.value);
  //   if (e.target.value === '') {
  //     setSearchShow(false);
  //   } else {
  //     setSearchShow(true);
  //   }
  // };

  // const filter = item.filter((data) => data.id.toLowerCase().includes(search.toLowerCase()));

  // const searchConfig = () => {
  //   if (searchShow) {
  //     return (
  //       <Item id={filter} />
  //     );
  //   }
  // };

  return (
    <div>
      {/* <SearchBar handleInput={handleInput} />
      {searchConfig()} */}
      <Item id={item.id} type={item.type} name={item.name} priority={item.priority} max={item.default.max} min={item.default.min} description={item.description} ui={item.ui} persist={item.persist}/>
    </div>
  );
};
export default ItemModule;
