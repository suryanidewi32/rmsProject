import http from 'Controllers/Services/http';

  const RetriveConfig = "RetriveConfig";
    
  const getAll = () => {
    return http.get("descriptor/configs");Config
  };

  export const RetriveConfigs = () => async (dispatch) => {
    try {
      const res = await getAll();
  
      dispatch({
        type: RetriveConfig,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  const UpdateConfig  = "UpdateConfig";

  const update = (id, data) => {
    return http.put(`descriptor/configs/${id}`, data);
  };
 
  export const UpdateConfigs = (id, data) => async (dispatch) => {
    try {
      const res = await update(id, data);
  
      dispatch({
        type: UpdateConfig,
        payload: data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  