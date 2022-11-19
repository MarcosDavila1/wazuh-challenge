const initialState = {
  users: [],
  userDetail: [],
  tasks: [],
  taskDetail: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_All_USERS":
      return {
        ...state,
        users: action.payload.body.data.data,
      };

    case "GET_USER_BY_ID":
      return {
        ...state,
        userDetail: [action.payload.body.data],
      };

    case "CLEAR_USER_DETAIL":
      return {
        ...state,
        userDetail: action.payload,
      };

    case "GET_All_TASKS":
      return {
        ...state,
        tasks: action.payload.body.data.data,
      };

    case "FILTER_TASKS":
      return {
        ...state,
        tasks: action.payload.body.data.data,
        page: 1,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
