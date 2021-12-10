import { Button, Form, Input } from 'antd';
import React, { useState, useEffect  } from 'react';
import { useDispatch } from 'react-redux';

import { UpdateStatuses } from 'Controllers/Services/Status/module_status.service';

import Group1 from './FormConfignStatus';

const Status = (status) => {

    const id       = status.id.map((data) => data.id);
    const typee    = status.id.map((data) => data.type);
    const namee    = status.id.map((data) => data.name);
    const protocol = status.id.map((data) => data.protocol);
    console.log(namee)

 const initialEditStatus = {
      id          : id[0],
      type        : typee[0],
      name        : namee[0],
      protocol    : protocol,
  };

  const [editStatus, setEditStatus] = useState(initialEditStatus);
  console.log(id[0],editStatus)
  
  const dispatch = useDispatch();

  const updateContent = () => {
    dispatch(UpdateStatuses(id[0], editStatus)
      );
      setEditStatus(false);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    console.log('event',event.target)
    setEditStatus({ ...editStatus, [name]: value });
  };
  

  return (
    <div>
     <Group1 update={updateContent} handleInputChange={handleInputChange} id={id[0]} type={typee[0]} namee={namee[0]} protocol={protocol}/>
    </div>
  );
};

export default Status;
