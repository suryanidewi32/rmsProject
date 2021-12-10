const RetriveTree = "RetriveTree";
  
  const initialState = [];
  
  const TreeReducer = (trees = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
  
      case RetriveTree:
        return payload;
  
      default:
        return trees;
    }
  };
  
  export default TreeReducer;
  
  