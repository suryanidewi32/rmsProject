import React, { useState }  from 'react';

import axios from 'axios';

import Group from 'Views/Components/Forms/FormProtocol';

const Protocol = (protocol) => {
  
  const itemap = protocol.itemap;

  const [id, setId] = useState(protocol.id);
  const [type, setType] = useState(protocol.type);
  const [name, setName] = useState(protocol.name);
  const [item, setItem] = useState(protocol.itemap);
  
  const [dataa, setData] = useState(null);

  const handleSubmit = () => {
    const data = {
      id: id,
      type: type,
      name: name,
      item: item,
    };
    axios.put(`http://localhost:4001/descriptor/protocol/${id}`, data).then((res) => {
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
    {<Group item={itemap} handleType={typevalue} handleName={namevalue} handleSubmit={handleSubmit} data={dataa} id={id} type={type} name={name} />}
    </div>
  );
};

export default Protocol;
