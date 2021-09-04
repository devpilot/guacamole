import * as actions from "../actions/actionType";

export default function todoReducer(state = [], action) {
  switch (action.type) {
    case actions.TASK_ADDED:
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          desc: action.payload.desc,
          status: false
        }
      ];
    case actions.TASK_REMOVED:
      return state.filter(task => task.id !== action.payload.id);
    case actions.TASK_TOGGLE:
      return state.map((task) => task.id === action.payload.id ? { ...task, status: !task.status } : task);
    case actions.TASK_POPULATE:
      return state.todo = action.payload;
    default:
      return state;
  }
}
