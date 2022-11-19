import axios from "axios";

export function getAllUsers() {
  return async function (dispatch) {
    const logPrefix = "getAllUsers";

    try {
      const get = await axios.get(
        `https://pdza3frdic.execute-api.us-east-1.amazonaws.com/users`
      );
      dispatch({
        type: "GET_All_USERS",
        payload: get.data,
      });
    } catch (error) {
      return console.log(`Èrror on ${logPrefix} action`);
    }
  };
}

export function getUserById(id) {
  return async function (dispatch) {
    const logPrefix = "getUserById";

    try {
      const get = await axios.get(
        `https://pdza3frdic.execute-api.us-east-1.amazonaws.com/users/${id}`
      );
      dispatch({
        type: "GET_USER_BY_ID",
        payload: get.data,
      });
    } catch (error) {
      return console.log(`Èrror on ${logPrefix} action`);
    }
  };
}

export function clearUserDetail() {
  return {
    type: "CLEAR_USER_DETAIL",
    payload: [],
  };
}

export function getAllTasks() {
  return async function (dispatch) {
    const logPrefix = "getAllTasks";

    try {
      const get = await axios.get(
        `https://pdza3frdic.execute-api.us-east-1.amazonaws.com/tasks`
      );
      dispatch({
        type: "GET_All_TASKS",
        payload: get.data,
      });
    } catch (error) {
      return console.log(`Èrror on ${logPrefix} action`);
    }
  };
}

export function filterTasks(completed, titleOrUser) {
  return async function (dispatch) {
    const logPrefix = "filterTasks";
    let url = "";
    if (titleOrUser) {
      if (typeof titleOrUser === "string") {
        url = `https://pdza3frdic.execute-api.us-east-1.amazonaws.com/tasks?completed=${completed}&title=${titleOrUser}`;
      } else {
        url = `https://pdza3frdic.execute-api.us-east-1.amazonaws.com/users/${titleOrUser}/tasks`;
      }
    } else {
      url = `https://pdza3frdic.execute-api.us-east-1.amazonaws.com/tasks?completed=${completed}`;
    }

    try {
      const get = await axios.get(url);
      dispatch({
        type: "FILTER_TASKS",
        payload: get.data,
      });
    } catch (error) {
      return console.log(`Èrror on ${logPrefix} action`, error);
    }
  };
}
