import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Rider from './components/Registrations/Rider/Rider';
import Driving from './components/Registrations/Driving/Driving';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/rider' element={<Rider></Rider>} />
          <Route path='/driving' element={<Driving></Driving>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
