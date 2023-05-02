import Home from "../pages/Home";
import SignIn from "../Register/SignIn";
import SignUp from "../Register/SignUp";
import ApplyTutor from "../Register/ApplyTutor";
import ForgotPassWord from "../Register/ForgotPass";
import Onboarding__Student from "../Onboarding__Student";
import OnboardTutor__Step1 from "../Onboarding__Tutor/Onboard__Tutorstep1/index";
import OnboardTutor__Step2 from "../Onboarding__Tutor/OnBoard__Tutorstep2/index";
import OnboardTutor__Step3 from "../Onboarding__Tutor/Onboard__Tutorstep3/index";
import OnboardTutor__Step4 from "../Onboarding__Tutor/Onboard__Tutorstep4/index";
import stdHome from "../StudentPages/StudentHome/index";
import myCourse from "../StudentPages/StudentMyCourse/index";
import Verify from "../Register/Verify";
import myCoursestt from "../TutorPages/Courses/index";
import sessionTutor from "../TutorPages/Session/index";
import feedBack from "../TutorPages/Feedback/index";
import myStudent from "../TutorPages/MyStudent/index";
import dashBoardtutor from "../TutorPages/Dashboard/index";
import payMentTutor from "../TutorPages/Payment/index";
import Pending from "../pages/Pending";
import ViewProfile from "../TutorPages/ViewProfile/index";
import StudentSchedule from "../StudentPages/StudentSchedule/index";
import StudentPayment from "../StudentPages/StudentPayment/index";
import StudentProfile from "../StudentPages/StudentProfile/index";
import SideBarLayout from "../StudentPages/component/SideBar";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/sign-in", component: SignIn, layout: null },
  { path: "/sign-up", component: SignUp, layout: null },
  { path: "/verify", component: Verify, layout: null },
  { path: "/apply-tutor", component: ApplyTutor, layout: null },
  { path: "/forgot-password", component: ForgotPassWord, layout: null },
  { path: "/pending", component: Pending, layout: null },
];

export const routerStudent = [
  { path: "/onboarding", component: Onboarding__Student },
  { path: "/dashboard", component: stdHome, layout: SideBarLayout },
  { path: "/courses", component: myCourse, layout: SideBarLayout },
  { path: "/schedules", component: StudentSchedule, layout: SideBarLayout },
  { path: "/payments", component: StudentPayment, layout: SideBarLayout },
  { path: "/profile", component: StudentProfile, layout: SideBarLayout },
];
export const routerTutor = [
  { path: "/onboarding/step-1", component: OnboardTutor__Step1 },
  { path: "/onboarding/step-2", component: OnboardTutor__Step2 },
  { path: "/onboarding/step-3", component: OnboardTutor__Step3 },
  { path: "/onboarding/step-4", component: OnboardTutor__Step4 },
  { path: "/courses", component: myCoursestt, layout: SideBarLayout },
  //   { path: "/courses/new-course", component: addcourse, layout: null },
  { path: "/sessions", component: sessionTutor, layout: SideBarLayout },
  { path: "/feedbacks", component: feedBack, layout: SideBarLayout },
  { path: "/students", component: myStudent, layout: SideBarLayout },
  { path: "/dashboard", component: dashBoardtutor, layout: SideBarLayout },
  { path: "/payments", component: payMentTutor, layout: SideBarLayout },
  { path: "/profile", component: ViewProfile, layout: SideBarLayout },
  { path: "/schedules", component: ViewProfile, layout: SideBarLayout },
  //   { path: "/viewcourse", component: ViewCourse, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
