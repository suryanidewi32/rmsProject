import { Button, Form, Input } from 'antd';
import React, { useState, useEffect  } from 'react';
import { useDispatch } from 'react-redux';

import { UpdateConfigs } from 'Controllers/Services/Config/module_config.service';
import Group1 from 'Views/Components/Forms/Statuses/FormConfignStatus';

const Config = (config) => {

    const id       = config.id.map((data) => data.id);
    const typee    = config.id.map((data) => data.type);
    const namee    = config.id.map((data) => data.name);
    const protocol = config.id.map((data) => data.protocol);

 const initialEditConfig = {
      id          : id[0],
      type        : typee[0],
      name        : namee[0],
      protocol    : protocol,
  };

  const [editConfig, setEditConfig] = useState(initialEditConfig);
  
  const dispatch = useDispatch();

  const updateContent = () => {
    dispatch(UpdateConfigs(id[0], editConfig)
      );
      setEditConfig(false);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    console.log('event',event.target)
    setEditConfig({ ...editConfig, [name]: value });
  };
  

  return (
    <div>
     <Group1 update={updateContent} handleInputChange={handleInputChange} id={id[0]} type={typee[0]} namee={namee[0]} protocol={protocol}/>
    </div>
  );
};

export default Config;
