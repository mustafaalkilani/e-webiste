import { Routes, Route} from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Properties from './routes/properties/properties.component';
import Admin from './routes/adminPage/admin.component';
import DashBoard from './routes/dashboard/dashboard.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='properties' element={<Properties />} />
      </Route>
      <Route path='fsdARadcvaRc' element={<Admin />} />
      <Route path='dashboard' element={<DashBoard />} />
    </Routes>
  )
}

export default App;
