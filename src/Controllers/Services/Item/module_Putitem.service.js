import React, { useState }  from 'react';

import axios from 'axios';

import FormItem from 'Views/Components/Forms/FormItem';

const Item = (items) => {

  const [iddata, setIddata]           = useState(items.id);
  const [type, setType]               = useState(items.type);
  const [name, setName]               = useState(items.name);
  const [priority, setPriority]       = useState(items.priority);
  const [min, setMin]                 = useState(items.min);
  const [max, setMax]                 = useState(items.max);
  const [description, setDescription] = useState(items.description);
  const [ui, setUi]                   = useState(items.ui);
  const [persist, setPersist]         = useState(items.persist);
  const [dataa, setData]              = useState(null);
  const handleSubmit = () => {
    const data = {
      id: items.id,
      type: items.type,
      name: items.name,
      priority: items.priority,
      description: items.description,
      ui: items.ui,
      persist: items.persist
    };
    axios.put(`http://localhost:4001/descriptor/item/${items.id}`, data).then((res) => {
      setData(res.data);
    });
  };

  const typevalue = (e) => {
    setType(e.target.value);
  };

  const namevalue = (e) => {
    setName(e.target.value);
  };

  const priorityvalue = (e) => {
    setPriority(e.target.value);
  };
  

  const minvalue = (e) => {
    setMin(e.target.value);
  };

  const maxvalue = (e) => {
    setMax(e.target.value);
  };
  
  const descriptionvalue = (e) => {
    setDescription(e.target.value);
  };
  
  const uivalue = (e) => {
    setUi(e.target.value);
  };

  const persistvalue = (e) => {
    setPersist(e.target.value);
  };

  return (
    <div>
    <FormItem handleType={typevalue} handleName={namevalue} handlePriority={priorityvalue} handleMin={minvalue} handleMax={maxvalue} handleDescription={descriptionvalue} handleUi={uivalue} handlePersist={persistvalue} handleSubmit={handleSubmit} data={dataa} id={items.id} type={items.type} name={items.name} priority={items.priority} max={items.max} min={items.min} description={items.description} ui={items.ui} persist={items.persist}/>
    </div>
  );
};

export default Item;
