import { Route, Routes, HashRouter } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
import TodosScreen from '../screens/TodosScreen';
import TodoScreen from '../screens/TodoScreen';
import PhotosScreen from '../screens/PhotosScreen';

function MainRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="todos/:todoId" element={<TodoScreen />} />
        <Route path="todos" element={<TodosScreen />} />
        <Route path="photos" element={<PhotosScreen />} />
      </Routes>
    </HashRouter>
  );
}

export default MainRouter;
