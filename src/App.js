import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import Home from './Home';
import Student from './Student';
import ContactUs from './ContactUs';
import AddNewStudent from './AddNewStudent';
import EditDetail from './EditDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/student" element={<Student/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/addnewstudent" element={<AddNewStudent/>}/>
        <Route path="/editdetails" element={<EditDetail/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}
export default App;
