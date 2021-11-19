import Config from './module_Putconfig.service';

const GetConfig = (config) => {
      
  const iddata  = config.id.map((data) => data.id);
  const typee   = config.id.map((data) => data.type);
  const namee   = config.id.map((data) => data.name);
  const protocol = config.id.map((data) => data.protocol);

  return (
    <div>
    <Config id={iddata[0]} type={typee[0]} name={namee[0]} protocols={protocol}/>
    </div>
  );
};
export default GetConfig;