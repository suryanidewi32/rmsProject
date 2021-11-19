import React, { useEffect, useState } from 'react';

import axios from 'axios';

import Searchtree from 'Views/Components/Forms/TreeSearch';
import TreeNode from 'Views/Components/Forms/TreeNode';

const TreeModule = () => {
  const [treeGet, setTreeGet] = useState([]);
  const [search, setSearch] = useState('');
  const [searchShow, setSearchShow] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:4001/descriptors/').then((res) => {
      setTreeGet(res.data);
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

  const filter = treeGet.filter((data) => data.id.toLowerCase().includes(search.toLowerCase()));

  const trees = filter.map((data, i) => <TreeNode key={i} name={data.name} type={data.type} version={data.version} module={data.modules[i]} config={data.configs.type} protocol={data.configs.protocol[i].name} item={data.configs.protocol[i].items[i].name} typeitems={data.configs.protocol[i].items[i].type} status={data.status.type} protocolstatus={data.status.protocol[i].name} itemstatus={data.status.protocol[i].items[i].name} typeitemsstatus={data.status.protocol[i].items[i].type}/>);

  return (
    <div>
      <Searchtree handleInput={handleInput} />
      {trees}
      
    </div>
  );
};
export default TreeModule;
