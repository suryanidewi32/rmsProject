import http from 'Controllers/Services/http';

  const RetriveProtocol = "RetriveProtocol";
    
  const getAll = () => {
    return http.get("descriptor/protocols");
  };

  export const RetriveProtocols = () => async (dispatch) => {
    try {
      const res = await getAll();
  
      dispatch({
        type: RetriveProtocol,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const UpdateProtocol  = "UpdateProtocol";
  
  const update = (id, data) => {
    return http.put(`descriptor/protocol/${id}`, data);
  };
 
  export const UpdateProtocols = (id, data) => async (dispatch) => {
    try {
      const res = await update(id, data);
  
      dispatch({
        type: UpdateProtocol,
        payload: data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  