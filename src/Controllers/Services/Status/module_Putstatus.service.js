import React, { useState } from 'react';

import axios from 'axios';

import Group1 from 'Views/Components/Forms/FormConfignStatus';

const Status = (status) => {

  const protocol=status.protocols

  const [id, setId] = useState(status.id);
  const [type, setType] = useState(status.type);
  const [name, setName] = useState(status.name);
  const [protocoll, setProtocoll] = useState(status.protocols);

  const [dataa, setData] = useState(null);

  const handleSubmit = () => {
    const data = {
      id: id,
      type: type,
      name: name,
      protocol: protocoll
    };

    axios.put(`http://localhost:4001/descriptor/status/${id}`, data).then((res) => {
      setData(res.data);
    });
  };

  const typevalue = (e) => {
    setType(e.target.value);
  };

  const namevalue = (e) => {
    setName(e.target.value);
  };


  return (
    <div>
    {<Group1 protocols={protocoll} handleType={typevalue} handleName={namevalue} handleSubmit={handleSubmit} data={dataa} id={id} type={type} name={name} />}
    </div>
  );
};

export default Status;
