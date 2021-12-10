import { combineReducers } from "redux";

import configs from './reduceConfig';
import items from './reduceItem';
import protocols from './reduceProtocol';
import statuses from './reduceStatus';
import trees from './reduceTree';

export default combineReducers({
    items,
    configs,
    statuses,
    protocols,
    trees
});