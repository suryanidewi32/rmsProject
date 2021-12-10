import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import ConfigModule from 'Views/Components/Forms/Configs/Configs';
import DeviceModule from 'Controllers/Services/Device/module_Postdevice.service';
import HomeControl from 'Views/Components/Layout/Index';
import ItemModule from 'Views/Components/Forms/Items/Items';
import ProtocolModule from 'Views/Components/Forms/Protocols/Protocols';
import StatusModule from 'Views/Components/Forms/Statuses/Statuses';
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
