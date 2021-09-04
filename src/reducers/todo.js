import * as actions from "../actions/actionType";

let lastId = 0;

export default function todoReducer(state = [], action) {
  switch (action.type) {
    case actions.TASK_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          text: action.payload.text,
          status: false
        }
      ];
    case actions.TASK_REMOVED:
      return state.filter(task => task.id !== action.payload.id);
    case actions.TASK_TOGGLE:
      return state.map((task) => task.id === action.payload.id ? { ...task, status: !task.status } : task);
    default:
      return state;
  }
}
