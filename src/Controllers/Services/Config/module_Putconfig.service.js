import React, { useState } from 'react';

import axios from 'axios';

import Group1 from 'Views/Components/Forms/FormConfignStatus';

const Config = (config) => {

  const protocol=config.protocols

  const [id, setId] = useState(config.id);
  const [type, setType] = useState(config.type);
  const [name, setName] = useState(config.name);
  const [protocoll, setProtocoll] = useState(config.protocols);

  const [dataa, setData] = useState(null);

  const handleSubmit = () => {
    const data = {
      id: id,
      type: type,
      name: name,
      protocol: protocoll
    };

    axios.put(`http://localhost:4001/descriptor/configs/${id}`, data).then((res) => {
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

export default Config;
