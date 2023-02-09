import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import authOperations from '../store/auth/auth-operations';

const actions = {
  ...authOperations,
};

export default function useActions() {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
}
