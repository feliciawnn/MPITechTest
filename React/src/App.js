import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Landing from './component/Landing'
import CountChar from './component/CountChar'
import SumOrder from "./component/SumOrder";
import UserLanding from "./component/UserLogin";
import UserRegister from "./component/UserRegister";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/MPITechTest" element={<Landing />}/>
          <Route path="/MPITechTest/task1" element={<CountChar />} />
          <Route path="/MPITechTest/task2" element={<SumOrder />} />
          <Route path="/MPITechTest/task3" element={<UserLanding />} />
          <Route path="/MPITechTest/task3/register" element={<UserRegister />} />
          {/* <Route path="/MPITechTest/task3/dashboard" /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
