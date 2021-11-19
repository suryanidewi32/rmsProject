import Status from './module_Putstatus.service';

const GetData = (status) => {
  
    const id       = status.id.map((data) => data.id);
    const typee    = status.id.map((data) => data.type);
    const namee    = status.id.map((data) => data.name);
    const protocol = status.id.map((data) => data.protocol);
  
    return (
        <div> 
        <Status id={id[0]} type={typee[0]} name={namee[0]} protocols={protocol}/> 
        </div>
      );
    };
    
    export default GetData;