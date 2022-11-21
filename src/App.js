import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Auth } from './views/auth';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Login } from './views/login';
import { SignUp } from './views/signup';
import { Verification } from './views/verification';
import { ForgotPassword } from './views/forgotpassword';
import { ResetPassword } from './views/resetPassword';
import { Dashboard } from './views/dashboard/dashboard';
import { MoviePage } from './views/dashboard/moviePage';
import { WatchVideo } from './views/dashboard/watchVideo';



function App() {

  AOS.init();

  return ( 
    <>
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route index element={<Login />}></Route>
          <Route path="registration" element={<SignUp />}></Route>
          <Route path="verification" element={<Verification />}></Route>
          <Route path="forgot-password" element={<ForgotPassword />}></Route>
          <Route path="reset-password" element={<ResetPassword />}></Route>
        </Route>

        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<MoviePage/>}></Route>
          <Route path="watching" element={<WatchVideo/>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
