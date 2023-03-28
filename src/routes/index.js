import Home from '../pages/Home';
import Tutor from '../pages/Tutor';
import Resources from '../pages/Resources';
import SignIn from '../Register/SignIn';
import SignUp from '../Register/SignUp';
import ApplyTutor from '../Register/ApplyTutor';
import ForgotPassWord from '../Register/ForgotPass';
import Onboarding__Student from '../Onboarding__Student/OnBoard__Student';
import Onboarding__Tutor from '../Onboarding__Tutor/OnBoard__Tutor';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/tutor', component: Tutor, },
    { path: '/resources', component: Resources, },
    { path: '/signin', component: SignIn, layout: null},
    { path: '/signup', component: SignUp, layout: null},
    { path: '/applytutor', component: ApplyTutor, layout: null},
    { path: '/forgotpassword', component: ForgotPassWord, layout: null},
    { path: '/onboardstudent', component: Onboarding__Student, layout: null},
    { path: '/onboardtutor', component: Onboarding__Tutor, layout: null},
];

const privateRoutes = [

];

export { publicRoutes, privateRoutes }