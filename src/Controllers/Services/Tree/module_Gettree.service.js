import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import http from 'Controllers/Services/http';
import Searchtree from 'Views/Components/Forms/Trees/TreeSearch';
import TreeNode from 'Views/Components/Forms/Trees/TreeNode';


const TreeModule = () => {

  const [search, setSearch] = useState('');
  const [searchShow, setSearchShow] = useState(false);

  const RetriveTree = "RetriveTree";
    
  const getAll = () => {
    return http.get("/descriptors/");
  };
  const RetriveItems = () => async (dispatch) => {
    try {
      const res = await getAll();
  
      dispatch({
        type: RetriveTree,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const trees = useSelector(state => state.trees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(RetriveItems());
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
    if (e.target.value === '') {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

const filter =()=>{
  for (var i = 0; i < trees.length; i++) {
    let array = trees[i]
    const data= array.data.filter((datas) => datas.id.toLowerCase().includes(search.toLowerCase()));
    return data.map((datas) => <TreeNode key={i} name={datas.name} type={datas.type} version={datas.version} module={datas.modules} config={datas.configs[i].type} protocol={datas.configs[i].protocol[i].name} item={datas.configs[i].protocol[i].items[i].name} typeitems={datas.configs[i].protocol[i].items[i].type} status={datas.status[i].type} protocolstatus={datas.status[i].protocol[i].name} itemstatus={datas.status[i].protocol[i].items[i].name} typeitemsstatus={datas.status[i].protocol[i].items[i].type}/>);
}}

  const dataTree= filter()

  return (
    <div>
      <Searchtree handleInput={handleInput} />
      {dataTree}

      
    </div>
  );
};
export default TreeModule;
