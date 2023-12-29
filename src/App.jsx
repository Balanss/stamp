
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./Components/Navbar";
import {UserProvider} from './Components/Context/User';
import Mobilebar from "./Components/Mobilebar";



const Home = lazy(() => import("./Components/Home/Home"));
// const NotFound = lazy(() => import("./Components/NotFound"));
const Signup = lazy(() => import("./Components/signing/Signup"));
const Login = lazy(() => import("./Components/signing/Login"));
const Profile = lazy(() => import("./Components/profile/ProfilePage"));



function App() {
  return (
    <>
    <UserProvider>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
        <div className="fixed top-0  z-[1] w-screen">
              {window.innerWidth < 1023 ? (
                <Mobilebar/>
              ) : (
                <Navbar />
              )}
            </div>
          <Routes>
            <Route path="/stamps" element={< Home/>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile/:userid/:companyName" element={<Profile />} />

            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Suspense>
      </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
