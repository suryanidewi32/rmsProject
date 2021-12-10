import { Button, Form, Input } from 'antd';
import React, { useState, useEffect  } from 'react';
import { useDispatch } from 'react-redux';

import { UpdateProtocols } from 'Controllers/Services/Protocol/module_protocol.service';

import Group from './FormProtocol';

const Protocol = (protocol) => {
  
  const iddata  = protocol.id.map((data) => data.id);
  const typee   = protocol.id.map((data) => data.type);
  const namee   = protocol.id.map((data) => data.name);
  const itemap  = protocol.id.map((data) => data.items);
  
const initialEditProtocol = {
      id          : iddata[0],
      type        : typee[0],
      name        : namee[0],
      item        : itemap,
  };

  const [editProtocol, setEditProtocol] = useState(initialEditProtocol);
  console.log(iddata[0],editProtocol)
  
  const dispatch = useDispatch();

  const updateContent = () => {
    dispatch(UpdateProtocols(iddata[0], editProtocol)
      );
      setEditProtocol(false);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    console.log('event',event.target)
    setEditProtocol({ ...editProtocol, [name]: value });
  };
  
  return (
    <div>
    <Group  update={updateContent} handleInputChange={handleInputChange} id={iddata[0]} type={typee[0]} namee={namee[0]} itemap={itemap}/>
    </div>
  );
};

export default Protocol;
