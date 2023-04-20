import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import HomeContent from "./module/home/HomeContent";
import BookAppointmentPage from "./pages/BookAppointmentPage";
import BAContent from "./module/bookAppointment/BAContent";
import MakeAppPage from "./pages/MakeAppPage";
import MyProfilePage from "./pages/MyProfilePage";
function App() {
  return (
    <Routes>
      <Route element={<HomePage />}>
        <Route path="/" element={<HomeContent />}></Route>
      </Route>
      <Route element={<BookAppointmentPage />}>
        <Route
          path="/book_appointment"
          element={<BAContent></BAContent>}
        ></Route>
      </Route>
      <Route path="/my_profile" element={<MyProfilePage />}></Route>
      <Route path="/make_app" element={<MakeAppPage />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
    </Routes>
  );
}

export default App;
