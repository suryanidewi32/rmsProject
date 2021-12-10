import http from 'Controllers/Services/http';

  const RetriveStatus = "RetriveStatus";
    
  const getAll = () => {
    return http.get("descriptor/statuses");
  };

 
  export const RetriveStatuses = () => async (dispatch) => {
    try {
      const res = await getAll();
  
      dispatch({
        type: RetriveStatus,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  const UpdateStatus  = "UpdateStatus";

  const update = (id, data) => {
    return http.put(`descriptor/status/${id}`, data);
  };
  
  export const UpdateStatuses = (id, data) => async (dispatch) => {
    try {
      const res = await update(id, data);
  
      dispatch({
        type: UpdateStatus,
        payload: data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  