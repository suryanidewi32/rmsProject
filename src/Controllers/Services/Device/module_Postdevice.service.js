import React, { useState } from 'react';

import axios from 'axios';

import DeviceForm from 'Views/Components/Forms/FormDevice';

const Device = () => {

  const [id, setId] = useState('');
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [version, setVersion] = useState('');
  const [modules, setModule] = useState('');
  const [addmodule, setAddModule] = useState('');
  
  const [configtype, setConfigType] = useState('');
  const [configname, setConfigName] = useState('');
  const [configprotocol, setConfigprotocol] = useState('');
  const [configprotocolname, setConfigprotocolname] = useState('');
  const [configitem, setConfigitem] = useState('');
  const [configitemname, setConfigitemname] = useState('');

  const [statustype, setStatusType] = useState('');
  const [statusname, setStatusName] = useState('');
  const [statusprotocol, setStatusprotocol] = useState('');
  const [statusprotocolname, setStatusprotocolname] = useState('');
  const [statusitem, setStatusitem] = useState('');
  const [statusitemname, setStatusitemname] = useState('');

  const [dataa, setData] = useState(null);

  const handleSubmit = () => {
    const data = {
      id: id,
      type: type,
      name: name,
      version: version,
      modules: [modules,addmodule], 
      configs: {id: id, type: configtype, name: configname, protocol:[{id: id, type: configprotocol, name: configprotocolname, items:[{id: id, type: configitem, name: configitemname}]}]},
      status: {id: id, type: statustype, name: statusname, protocol:[{id: id, type: statusprotocol, name: statusprotocolname, items:[{id: id, type: statusitem, name: statusitemname}]}]},
    };
    axios.post('http://localhost:4001/descriptor/New', data).then((res) => {
      setData(res.data);
    });
  };

  const typeid = (e) => {
    setId(e.target.value);
  };

  const typevalue = (e) => {
    setType(e.target.value);
  };

  const namevalue = (e) => {
    setName(e.target.value);
  };
  
  const modulevalue = (e) => {
    setModule(e.target.value);
  };

  const addmodulevalue = (e) => {
    setAddModule(e.target.value);
  };

  const versionvalue = (e) => {
    setVersion(e.target.value);
  };


  const configvalue = (e) => {
    setConfigType(e.target.value);
  };

  const configsvalue = (e) => {
    setConfigName(e.target.value);
  };

  const protypevalue = (e) => {
    setConfigprotocol(e.target.value);
  };

  const protnamevalue = (e) => {
    setConfigprotocolname(e.target.value);
  };

  const itemstypevalue = (e) => {
    setConfigitem(e.target.value);
  };

  const itemsnamevalue = (e) => {
    setConfigitemname(e.target.value);
  };

  const statusvalue = (e) => {
    setStatusType(e.target.value);
  };

  const statusesvalue = (e) => {
    setStatusName(e.target.value);
  };

  const statypevalue = (e) => {
    setStatusprotocol(e.target.value);
  };

  const stanamevalue = (e) => {
    setStatusprotocolname(e.target.value);
  };

  const staitemstypevalue = (e) => {
    setStatusitem(e.target.value);
  };

  const staitemsvalue = (e) => {
    setStatusitemname(e.target.value);
  };


  return (
    <div>
     <DeviceForm id={id} name={name} type={type} handleId={typeid} handleType={typevalue} handleName={namevalue} handleModule={modulevalue} handleaddModule={addmodulevalue} handleVersion={versionvalue} handleConfigType={configvalue} handleConfigName={configsvalue} handleProtocolType={protypevalue} handleProtocolName={protnamevalue} handleStatustype={statusvalue} handleStatusName={statusesvalue} handleProtocolTypestatus={statypevalue} handleProtocolNamestatus={stanamevalue} handleSubmit={handleSubmit} handleItemsTypeconfig={itemstypevalue} handleItemsNameconfig={itemsnamevalue} handleItemsTypestatus={staitemstypevalue} handleItemsNamestatus={staitemsvalue} data={dataa} />
    </div>
  );
};

export default Device;
