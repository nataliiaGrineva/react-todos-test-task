import './App.scss';
import MainRouter from './routes/MainRouter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTodos } from './store/actions/todos';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('TODOS'));
    dispatch(getTodos(todos || []));
  }, []);
  return <MainRouter />;
}

export default App;
