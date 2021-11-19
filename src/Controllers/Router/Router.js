import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import ConfigModule from 'Controllers/Services/Config/module_Getconfig.service';
import DeviceModule from 'Controllers/Services/Device/module_Postdevice.service';
import HomeControl from 'Views/Components/Layout/Index';
import ItemModule from 'Controllers/Services/Item/module_Getitem.service';
import ProtocolModule from 'Controllers/Services/Protocol/module_Getprotocol.service';
import StatusModule from 'Controllers/Services/Status/module_Getstatus.service';
import TreeModule from 'Controllers/Services/Tree/module_Gettree.service';

const Routing = () => (
  <BrowserRouter>
    <Switch>
      <HomeControl path="/device" component={DeviceModule} />
      <HomeControl path="/status" component={StatusModule} />
      <HomeControl path="/config" component={ConfigModule} />
      <HomeControl path="/protocol" component={ProtocolModule} />
      <HomeControl path="/item" component={ItemModule} />
      <HomeControl path="/" component={TreeModule} />
    </Switch>
  </BrowserRouter>
);
export default Routing;
