import { Routes, Route} from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';

const PageTwo = () => {
  return (
    <div><h1>PageTwo</h1></div>
  )
}


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='pageTwo' element={<PageTwo />} />
      </Route>
    </Routes>
  )
}

export default App;
