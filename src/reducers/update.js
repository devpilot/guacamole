import * as actions from "../actions/actionType";

export default function updateReducer(state = '', action) {
  switch (action.type) {
    case actions.TASK_EDIT:
      return (
        {
          id: action.payload.id,
          title: action.payload.title,
          desc: action.payload.desc,
          status: action.payload.status
        }
      );
      case actions.TASK_EDIT_CLEAR:
      return state = '';
    default:
      return state;
  }
}
