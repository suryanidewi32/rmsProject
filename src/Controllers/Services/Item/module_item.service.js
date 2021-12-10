import http from 'Controllers/Services/http';

  const RetriveItem = "RetriveItem";
    
  const getAll = () => {
    return http.get("descriptor/items");
  };

  export const RetriveItems = () => async (dispatch) => {
    try {
      const res = await getAll();
  
      dispatch({
        type: RetriveItem,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  const UpdateItem  = "UpdateItem";

  const update = (id, data) => {
    return http.put(`descriptor/item/${id}`, data);
  };
 
  export const UpdateItems = (id, data) => async (dispatch) => {
    try {
      const res = await update(id, data);
  
      dispatch({
        type: UpdateItem,
        payload: data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  