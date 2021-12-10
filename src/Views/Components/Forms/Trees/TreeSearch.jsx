import { Input } from 'antd';

const { Search } = Input;

const Searchtree = (props) => {
    
return (
    <div>
      <Search style={{ marginBottom: 8 }} placeholder="Search" onChange={props.handleInput}/>
    </div>
  );
}


export default Searchtree;