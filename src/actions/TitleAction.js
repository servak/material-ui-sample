import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';

exports.changeTitle = (val) => {
  Dispatcher.dispatch({
    actionType: ActionTypes.CHANGE_TITLE,
    value: val,
  });
};
