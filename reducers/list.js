export const list = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_LIST_RESULTS':
      return Object.assign({}, state, {
        items: action.items,
      });

    case 'ADD_TO_LIST':
      return Object.assign({}, {items: action.items});

    default:
      return state;
  }
};

export default list;
