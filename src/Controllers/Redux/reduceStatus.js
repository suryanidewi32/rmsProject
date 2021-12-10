const RetriveStatus = "RetriveStatus";
const UpdateStatus  = "UpdateStatus";
  
  const initialState = [];
  
  const StatusReducer = (statuses = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
  
      case RetriveStatus:
        return payload;
  
      case UpdateStatus:
        return statuses.map((status) => {
          if (status.id === payload.id) {
            return {
              ...status,
              ...payload,
            };
          } else {
            return status;
          }
        });
  
      default:
        return statuses;
    }
  };
  
  export default StatusReducer;
  
  