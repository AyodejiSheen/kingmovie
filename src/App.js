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
import { ShortsVideo } from './views/dashboard/shorts';
import { Subscribed } from './views/dashboard/subscribed';
import { SubscribePage } from './views/dashboard/subscribePage/subscribepages';
import { Library } from './views/dashboard/library';
import { History } from './views/dashboard/history';
import { WatchLater } from './views/dashboard/watchLater';
import { LikedVideos } from './views/dashboard/likedVideos';
import ScrollToTop from './scrollToTop';
import { Trending } from './views/dashboard/trending/trending';
import { Plan } from './views/dashboard/plan';
import { TvHome } from './views/tvPlatform/headerNav';
import { Home } from './views/tvPlatform/home';
import { Drama } from './views/tvPlatform/drama';
import { ActionMovie } from './views/tvPlatform/actionMovie';
import { Romance } from './views/tvPlatform/romance';



function App() {

  AOS.init();

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route index element={<Login />}></Route>
          <Route path="registration" element={<SignUp />}></Route>
          <Route path="verification" element={<Verification />}></Route>
          <Route path="forgot-password" element={<ForgotPassword />}></Route>
          <Route path="reset-password" element={<ResetPassword />}></Route>
        </Route>

        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<MoviePage />}></Route>
          <Route path="watching" element={<WatchVideo />}></Route>
          <Route path="shorts" element={<ShortsVideo />}></Route>
          <Route path="subscribed" element={<Subscribed />}></Route>
          <Route path="subscribed/user" element={<SubscribePage />}></Route>
          <Route path="library" element={<Library />}></Route>
          <Route path="history" element={<History />}></Route>
          <Route path="watchlater" element={<WatchLater />}></Route>
          <Route path="likedvideos" element={<LikedVideos />}></Route>
          <Route path="trending" element={<Trending />}></Route>
          <Route path="plan" element={<Plan />}></Route>
        </Route>

        <Route path="tv_platform" element={<TvHome />}>
          <Route index element={<Home />}></Route>
          <Route path="drama" element={<Drama/>}></Route>
          <Route path="action_movie" element={<ActionMovie/>}></Route>
          <Route path="romance" element={<Romance/>}></Route>
        </Route>
      </Routes>

    </>
  );
}

export default App;
