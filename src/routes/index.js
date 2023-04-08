import Home from '../pages/Home';
import SignIn from '../Register/SignIn';
import SignUp from '../Register/SignUp';
import ApplyTutor from '../Register/ApplyTutor';
import ForgotPassWord from '../Register/ForgotPass';
import Onboarding__Student from '../Onboarding__Student/OnBoard__Student';
import OnboardTutor__Step1 from '../Onboarding__Tutor/Onboard__Tutorstep1/Step1';
import OnboardTutor__Step2 from '../Onboarding__Tutor/OnBoard__Tutorstep2/Step2';
import OnboardTutor__Step3 from '../Onboarding__Tutor/Onboard__Tutorstep3/step3';
import OnboardTutor__Step4 from '../Onboarding__Tutor/Onboard__Tutorstep4/step4';
import stdHome from '../StudentPages/StudentHome/index';
import Mycourse from '../StudentPages/MyCourse/Course';
import Verifi from '../Register/Verifi';


const publicRoutes = [
    { path: '/', component: Home },
    { path: '/signin', component: SignIn, layout: null},
    { path: '/signup', component: SignUp, layout: null},
    { path: '/verifi', component: Verifi, layout: null},
    { path: '/applytutor', component: ApplyTutor, layout: null},
    { path: '/forgotpassword', component: ForgotPassWord, layout: null},
    { path: '/onboardstudent', component: Onboarding__Student, layout: null},
    { path: '/onboardtutorstep1', component: OnboardTutor__Step1, layout: null},
    { path: '/onboardtutorstep2', component: OnboardTutor__Step2, layout: null},
    { path: '/onboardtutorstep3', component: OnboardTutor__Step3, layout: null},
    { path: '/onboardtutorstep4', component: OnboardTutor__Step4, layout: null},
    { path: '/studenthome', component: stdHome, layout: null},
    { path: '/mycourse', component: Mycourse, layout: null},
];

const privateRoutes = [

];

export { publicRoutes, privateRoutes }