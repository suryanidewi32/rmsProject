const RetriveConfig = "RetriveConfig";
const UpdateConfig  = "UpdateConfig";
  
  const initialState = [];
  
  const ConfigReducer = (configs = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
  
      case RetriveConfig:
        return payload;
  
      case UpdateConfig:
        return configs.map((config) => {
          if (config.id === payload.id) {
            return {
              ...config,
              ...payload,
            };
          } else {
            return config;
          }
        });
  
      default:
        return configs;
    }
  };
  
  export default ConfigReducer;
  
  