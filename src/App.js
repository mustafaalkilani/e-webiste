import { Routes, Route} from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Properties from './routes/properties/properties.component';
import Admin from './routes/adminPage/admin.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='properties' element={<Properties />} />
      </Route>
      <Route path='fsdARadcvaRc' element={<Admin />} />
    </Routes>
  )
}

export default App;
