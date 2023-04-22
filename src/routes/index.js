import Home from '../pages/Home';
import SignIn from '../Register/SignIn';
import SignUp from '../Register/SignUp';
import ApplyTutor from '../Register/ApplyTutor';
import ForgotPassWord from '../Register/ForgotPass';
import Onboarding__Student from '../Onboarding__Student';
import OnboardTutor__Step1 from '../Onboarding__Tutor/Onboard__Tutorstep1/index';
import OnboardTutor__Step2 from '../Onboarding__Tutor/OnBoard__Tutorstep2/index';
import OnboardTutor__Step3 from '../Onboarding__Tutor/Onboard__Tutorstep3/index';
import OnboardTutor__Step4 from '../Onboarding__Tutor/Onboard__Tutorstep4/index';
import stdHome from '../StudentPages/StudentHome/index';
import myCourse from '../StudentPages/MyCourse/index'
import Verify from '../Register/Verify';
import myCoursestt from '../TutorPages/Courses/index';
import addcourse from '../TutorPages/AddCourse/index';
import sessionTutor from '../TutorPages/Session/index';
import feedBack from '../TutorPages/Feedback/index';
import myStudent from '../TutorPages/MyStudent/index';
import dashBoardtutor from '../TutorPages/Dashboard/index';
import payMentTutor from '../TutorPages/Payment/index';
import Pending from '../pages/Pending';
import ViewProfile from '../TutorPages/ViewProfile/index';


const publicRoutes = [
    { path: '/', component: Home },
    { path: '/signin', component: SignIn, layout: null},
    { path: '/signup', component: SignUp, layout: null},
    { path: '/verify', component: Verify, layout: null},
    { path: '/applytutor', component: ApplyTutor, layout: null},
    { path: '/forgotpassword', component: ForgotPassWord, layout: null},

    //onboard
    { path: '/onboardstudent', component: Onboarding__Student},
    { path: '/onboardtutorstep1', component: OnboardTutor__Step1},
    { path: '/onboardtutorstep2', component: OnboardTutor__Step2},
    { path: '/onboardtutorstep3', component: OnboardTutor__Step3},
    { path: '/onboardtutorstep4', component: OnboardTutor__Step4},

//home studen
    { path: '/studenthome', component: stdHome, layout: null},
    { path: '/mycourse', component: myCourse, layout: null},

//tutor
    { path: '/mycoursett', component: myCoursestt, layout: null},
    { path: '/addcourse', component: addcourse, layout: null},
    { path: '/sessiontt', component: sessionTutor, layout: null},
    { path: '/feedback', component: feedBack, layout: null},
    { path: '/mystudent', component: myStudent, layout: null},
    { path: '/dashboardtt', component: dashBoardtutor, layout: null},
    { path: '/paymenttutor', component: payMentTutor, layout: null},
    { path: '/viewprofile', component: ViewProfile, layout: null},

    //pending
    { path: '/pending', component: Pending, layout: null},
];

const privateRoutes = [

];

export { publicRoutes, privateRoutes }