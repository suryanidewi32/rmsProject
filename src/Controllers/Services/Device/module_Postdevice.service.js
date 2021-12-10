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
  const [configpriority, setConfigpriority] = useState('');
  const [configmax, setConfigmax] = useState('');
  const [configmin, setConfigmin] = useState('');
  const [configdesc, setConfigdesc] = useState('');
  const [configui, setConfigui] = useState('');
  const [configpersist, setConfigpersist] = useState('');

  const [statustype, setStatusType] = useState('');
  const [statusname, setStatusName] = useState('');
  const [statusprotocol, setStatusprotocol] = useState('');
  const [statusprotocolname, setStatusprotocolname] = useState('');
  const [statusitem, setStatusitem] = useState('');
  const [statusitemname, setStatusitemname] = useState('');
  const [statuspriority, setStatuspriority] = useState('');
  const [statusmax, setStatusmax] = useState('');
  const [statusmin, setStatusmin] = useState('');
  const [statusdesc, setStatusdesc] = useState('');
  const [statusui, setStatusui] = useState('');
  const [statuspersist, setStatuspersist] = useState('');

  const [dataa, setData] = useState(null);

  const handleSubmit = () => {
    const data = {
      id: id,
      type: type,
      name: name,
      version: version,
      modules: [modules,addmodule], 
      configs: [{id: id, type: configtype, name: configname, protocol:[{id: id, type: configprotocol, name: configprotocolname, items:[{id: id, type: configitem, name: configitemname, priority:configpriority,default:{max:parseInt(configmax),min:parseInt(configmin)},description:configdesc,ui:Boolean(configui),persist:Boolean(configpersist)}]}]}],
      status: [{id: id, type: statustype, name: statusname, protocol:[{id: id, type: statusprotocol, name: statusprotocolname, items:[{id: id, type: statusitem, name: statusitemname, priority:statuspriority,default:{max:parseInt(statusmax),min:parseInt(statusmin)},description:statusdesc,ui:Boolean(statusui),persist:Boolean(statuspersist)}]}]}],
    };
    axios.post('http://localhost:4001/descriptor/New', data).then((res) => {
      setData(res.data);
      console.log(res.data)
    });
  };
 console.log(dataa)

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

  const priorityvalue = (e) => {
    setConfigpriority(e.target.value);
  };

  const maxvalue = (e) => {
    setConfigmax(e.target.value);
  };

  const minvalue = (e) => {
    setConfigmin(e.target.value);
  };

  const descvalue = (e) => {
    setConfigdesc(e.target.value);
  };

  const uivalue = (e) => {
    setConfigui(e.target.value);
  };

  const persistvalue = (e) => {
    setConfigpersist(e.target.value);
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

  const statuspriorityvalue = (e) => {
    setStatuspriority(e.target.value);
  };

  const statusmaxvalue = (e) => {
    setStatusmax(e.target.value);
  };

  const statusminvalue = (e) => {
    setStatusmin(e.target.value);
  };

  const statusdescvalue = (e) => {
    setStatusdesc(e.target.value);
  };

  const statusuivalue = (e) => {
    setStatusui(e.target.value);
  };

  const statuspersistvalue = (e) => {
    setStatuspersist(e.target.value);
  };

  return (
    <div>
     <DeviceForm id={id} name={name} type={type} handleId={typeid} handleType={typevalue} handleName={namevalue} handleModule={modulevalue} handleaddModule={addmodulevalue} handleVersion={versionvalue} handleConfigType={configvalue} handleConfigName={configsvalue} handleProtocolType={protypevalue} handleProtocolName={protnamevalue} handleStatustype={statusvalue} handleStatusName={statusesvalue} handleProtocolTypestatus={statypevalue} handleProtocolNamestatus={stanamevalue} handleSubmit={handleSubmit} handleItemsTypeconfig={itemstypevalue} handleItemsNameconfig={itemsnamevalue} handleItemsTypestatus={staitemstypevalue} handleItemsNamestatus={staitemsvalue} handlePrioritystatus={statuspriorityvalue} handleMaxstatus ={statusmaxvalue} handleMinstatus={statusminvalue} handleDescstatus={statusdescvalue} handleUistatus={statusuivalue} handlePresiststatus={statuspersistvalue} handlePriorityconfig={priorityvalue} handleMaxconfig={maxvalue} handleMinconfig={minvalue} handleDescconfig={descvalue} handleUiconfig={uivalue} handlePresistconfig={persistvalue} data={dataa} />
    </div>
  );
};

export default Device;
