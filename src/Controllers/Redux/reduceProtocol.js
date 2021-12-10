const RetriveProtocol = "RetriveProtocol";
const UpdateProtocol  = "UpdateProtocol";
  
  const initialState = [];
  
  const ProtocolReducer = (protocols = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
  
      case RetriveProtocol:
        return payload;
  
      case UpdateProtocol:
        return protocols.map((protocol) => {
          if (protocol.id === payload.id) {
            return {
              ...protocol,
              ...payload,
            };
          } else {
            return protocol;
          }
        });
  
      default:
        return protocols;
    }
  };
  
  export default ProtocolReducer;
  
  