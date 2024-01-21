import Nav from "./Nav";
import "./App.css";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Footer from "./Footer";
import Signup from "./Signup";
import Private from "./Private";
import Login from "./Login";
// import Products from "./Products";
// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <Nav />
//       <h1>Dashboard</h1>
//       <Routes>
//       <Route element= {<Private/>}>
//         <Route   path ='/'  element = {<h1> prod component</h1>}  />
//         <Route   path ='/add' element={<h1>add component</h1>} />
//         <Route   path ='/update' element={<h1> update component</h1>} />
//         <Route   path ='/logout' element={<h1>logout component</h1>} />
//         <Route   path ='/profile' element={<h1>profile component</h1>} />
//         </Route>
      
//       <Route path ='/login' element ={<Login/>} />
//       <Route  path="/signup" element={<Signup/>} />
//       </Routes>
//       </BrowserRouter>
      
//       <Footer/>
//     </div>
//   );
// }
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <h1>Dashboard</h1>
        <Routes>
          {/* Nested Routes should be direct children of Routes */}
          <Route path="/" element={<Private />}>
            <Route index element={<h1>prod component</h1>} />
            <Route path="/add" element={<h1>add component</h1>} />
            <Route path="/update" element={<h1>update component</h1>} />
            <Route path="/logout" element={<h1>logout component</h1>} />
            <Route path="/profile" element={<h1>profile component</h1>} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}


export default App;
