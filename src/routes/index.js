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
import Verify from '../Register/Verify';
import myCoursestt from '../TutorPages/Courses/index';
import addcourse from '../TutorPages/AddCourse/index';
import sessionTutor from '../TutorPages/Session/index';
import feedBack from '../TutorPages/Feedback/index';


const publicRoutes = [
    { path: '/', component: Home },
    { path: '/signin', component: SignIn, layout: null},
    { path: '/signup', component: SignUp, layout: null},
    { path: '/verify', component: Verify, layout: null},
    { path: '/applytutor', component: ApplyTutor, layout: null},
    { path: '/forgotpassword', component: ForgotPassWord, layout: null},
    { path: '/onboardstudent', component: Onboarding__Student},
    { path: '/onboardtutorstep1', component: OnboardTutor__Step1},
    { path: '/onboardtutorstep2', component: OnboardTutor__Step2},
    { path: '/onboardtutorstep3', component: OnboardTutor__Step3},
    { path: '/onboardtutorstep4', component: OnboardTutor__Step4},
    { path: '/studenthome', component: stdHome, layout: null},
    { path: '/mycourse', component: Mycourse, layout: null},
    { path: '/mycoursett', component: myCoursestt, layout: null},
    { path: '/addcourse', component: addcourse, layout: null},
    { path: '/sessiontt', component: sessionTutor, layout: null},
    { path: '/feedback', component: feedBack, layout: null},
];

const privateRoutes = [

];

export { publicRoutes, privateRoutes }