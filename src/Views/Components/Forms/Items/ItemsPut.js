import { Button, Form, Input } from 'antd';
import React, { useState, useEffect  } from 'react';
import { useDispatch } from 'react-redux';

import FormItem from './FormItem';
import { UpdateItems } from 'Controllers/Services/Item/module_item.service';

const Item = (item) => {

  const iddata       = item.id.map((data) => data.id);
  const typee        = item.id.map((data) => data.type);
  const namee        = item.id.map((data) => data.name);
  const priority     = item.id.map((data) => data.priority);
  const max          = item.id.map((data) => data.default.max);
  const min          = item.id.map((data) => data.default.min);
  const description  = item.id.map((data) => data.description);
  const ui           = item.id.map((data) => data.ui);
  const persist      = item.id.map((data) => data.persist);

  const initialEditItem = {
      id          : iddata[0],
      type        : typee[0],
      name        : namee[0],
      priority    : priority[0],
      default     : {max: parseInt(max[0]), min: parseInt(min[0])},
      description : description[0],
      ui          : Boolean(ui[0]),
      persist     : Boolean(persist[0])
  };

  const [editItem, setEditItem] = useState(initialEditItem);
  
  const dispatch = useDispatch();

  const updateContent = () => {
    dispatch(UpdateItems(iddata[0], editItem)
      );
      setEditItem(false);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    console.log('event',event.target)
    setEditItem({ ...editItem, [name]: value });
  };
  
  return (
    <div>
    <FormItem update={updateContent} handleInputChange={handleInputChange} id={iddata[0]} type={typee[0]} name={namee[0]} priority={priority[0]} max={max[0]} min={min[0]} description={description[0]} ui={ui[0]} persist={persist[0]}/>
    </div>
  );
};

export default Item;
