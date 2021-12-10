const RetriveItem = "RetriveItem";
const UpdateItem  = "UpdateItem";
  
  const initialState = [];
  
  const ItemReducer = (items = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
  
      case RetriveItem:
        return payload;
  
      case UpdateItem:
        return items.map((item) => {
          if (item.id === payload.id) {
            return {
              ...item,
              ...payload,
            };
          } else {
            return item;
          }
        });
  
      default:
        return items;
    }
  };
  
  export default ItemReducer;
  
  