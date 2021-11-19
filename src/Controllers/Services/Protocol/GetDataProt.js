import Protocol from "./module_Putprotocol.service";

const Getid = (protocol) => {
      
  const iddata  = protocol.id.map((data) => data.id);
  const typee   = protocol.id.map((data) => data.type);
  const namee   = protocol.id.map((data) => data.name);
  const itemap  = protocol.id.map((data) => data.items);

  return (
    <div>
    <Protocol id={iddata[0]} type={typee[0]} name={namee[0]} itemap={itemap}/>
    </div>
  );
};
export default Getid;