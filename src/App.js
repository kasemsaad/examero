/* eslint-disable */

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/cairo"; // Defaults to weight 400
// import Header from './common/header/header';
import LayoutComp from "./layout/layoutComp/layoutComp";
import AccountSetting from "./dashboard/Account-settting/AccountSetting";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./websit/Home/home.jsx";
import Notification from "./dashboard/Notification/Notification";
import "@fontsource/cairo"; // Defaults to weight 400
import Home_dashboard from "./dashboard/Home_Dashboard/Home_dashboard.jsx";
import CreateStudentAcc from "./websit/register and login/create_stud_acc/create_stud_acc.jsx";
import Login1 from "./websit/register and login/login/login2.jsx";
import Login from "./websit/register and login/login/login1.jsx";
import CreateTechAcc from "./websit/register and login/create_taech_acc/create_teach_acc.jsx";
import Reset_page1 from "./websit/register and login/resetpage/resetpage_stud.jsx";
import Reset_code_page from "./websit/register and login/reset_password/reset_password_stud.jsx";
import New_pass from "./websit/register and login/new_pass/new_pass_stud.jsx";
import ResetPage1Teacher from "./websit/register and login/resetpage/resetpage_teach.jsx";
import ResetCodePageTech from "./websit/register and login/reset_password/reset_password_tech.jsx";
import NewPassTeach from "./websit/register and login/new_pass/new_pass_tech.jsx";
import InsertingOpenEmisTags from "./websit/teacher_view/teacher_enter_openmis/InsertingOpenEmisTags.jsx";
import PuttingExam1 from "./websit/teacher_view/PuttingExam1/PuttingExam1.jsx";
import PuttingExam2 from "./websit/teacher_view/PuttingExam1/PuttingExam2.jsx";
import PuttingExam3 from "./websit/teacher_view/PuttingExam1/PuttingExam3.jsx";
import PuttingExam4 from "./websit/teacher_view/PuttingExam1/PuttingExam4.jsx";
import PuttingExam5 from "./websit/teacher_view/PuttingExam1/PuttingExam5.jsx";
import ExamPdf from "./websit/teacher_view/PuttingExam1/ExamePdf.jsx";
import Test from "./websit/teacher_view/PuttingExam1/test.jsx";
import ExamePdfsolution from "./websit/teacher_view/PuttingExam1/ExamePdfsolution.jsx";
import ExamPdfArabic from "./websit/teacher_view/PuttingExam1/ExamPdfArabic.jsx";
import ExamPdfArabicsolution from "./websit/teacher_view/PuttingExam1/ExamPdfArabicsolution.jsx";
import Certified_exam from "./websit/teacher_view/PuttingExam1/Certified_exam.jsx";
import EmailVerificationTech from "./websit/register and login/EmailVerification/EmailVerificationtech.jsx";
import EmailVerificationStud from "./websit/register and login/EmailVerification/EmailVerificationStud.jsx";
import HomeStudentView from "./websit/Student/Student_View/homeStudentView.jsx";
import Plans from "./websit/Student/Plans/Plans.jsx";
import SuccessPayment from "./websit/Home/successpayment.jsx";
import CreateExam from "./websit/Student/createExam/createExam.jsx";
import TeacherProfile from "./websit/teacher_view/teacher profile/teacherProfile.jsx";
import DataStudentExam from "./websit/Student/dataStudentExam/dataStudentExam.jsx";
import CorrectAnswerfrom from "./websit/Student/createExam/correctAnswer.jsx";
import EditStudentProfaile from "./websit/Student/editStudentProfaile/editStudentProfaile.jsx";
import ProtectedRouteWebsite from "../src/websit/protectedRouteWebsite/protectedRouteWebsite.jsx";
import ProtectedRouteWebsiteTeacher from "../src/websit/protectedRouteWebsite/protectedRouteWebsiteTeacher.jsx";
// import Home_dashboard from './dashboard/Home_Dashboard/Home_dashboard.jsx';
import HomeDashoardLogin from "./dashboard/homeLogin/homeLogin.jsx";
import CertificateGenerator from "./dashboard/Certificate/Certificate.jsx";
import Qbank from "./dashboard/Qbank/Qbank.jsx";
import Specification from "./dashboard/Specifecation/Specification.jsx";
import ProtectedRoute from "./dashboard/protectedRouteDashboard.jsx/protectedRouteDashboard.jsx";
import PlansStudent from "./dashboard/Plans/PlansStudent/PlansStudent.jsx";
import PlansTeacher from "./dashboard/Plans/PlansTeacher/PlansTeacher.jsx";
import OpenEmis from "./dashboard/open_Emis/openEmis.jsx";
import WaitingEmis from "./dashboard/open_Emis/waitingEmis/waitingEmis.jsx";
import RecivedEmis from "./dashboard/open_Emis/recivedEmis/recivedEmis.jsx";
import FinishedEmis from "./dashboard/open_Emis/finishedEmis/finishedEmis.jsx";
import Reward from "./dashboard/Reward/reward.jsx";
import RewardManger from "./dashboard/Reward/rewardManager/rewardManger.jsx";
import RewardMoshref from "./dashboard/Reward/rewardMoshref/rewardMoshref.jsx";
import RewardTeacher from "./dashboard/Reward/rewardTeacher/rewardTeacher.jsx";
import ForgetPassDashBoard from "./dashboard/Forget_password/forget_pass.jsx";
import EnterCodeDashBoard from "./dashboard/Forget_password/enterCodeOfReset/enterCode.jsx";
import NewPassDashBoard from "./dashboard/Forget_password/DashboardNewPassword/NewPassword.jsx";
import ErrorPage from "./dashboard/Error/errorPage.jsx";
import Checks from "./dashboard/checks/checks.jsx";
import NotFound from "./websit/Student/notfound.jsx";
import PuttingQUnites from "./dashboard/PuttingQussions/ForUnits/PuttingQUnits.jsx";
import PuttingQFLessons from "./dashboard/PuttingQussions/ForLessons/PuttingQFLessons.jsx";
import PuttingKindOfQ from "./dashboard/PuttingQussions/ForKindOfQuestions/PuttingKOQuestions.jsx";
import PuttingQuestions from "./dashboard/PuttingQussions/ForClasses/PuttingQuestions.jsx";
import PuttingQForMab7as from "./dashboard/PuttingQussions/ForMab7s/PuttingQForMabhas.jsx";
import Mangers from "./dashboard/Users/Mangers/mangers.jsx";
import Supervisors from "./dashboard/Users/supervisors/supervisors.jsx";
import MangersActivity from "./dashboard/Notification/mangers.activity/mangersActivity.jsx";
import AllActivity from "./dashboard/Notification/supervisorsActivity/AllActivity.jsx";
import QbankDetails from "./dashboard/QbankDetails/QbankDetails.jsx";
import QbankEditing from "./dashboard/QbankDetails/QbankEditing/qbankEditing.jsx";
import TeacherDash from "./dashboard/Users/Teachers/TeacherDash.jsx";
import StudentsDash from "./dashboard/Users/Teachers/StudentDash.jsx";
import Certify from "./dashboard/newCertify/certify.jsx";
import AccessDinied from "./dashboard/AccessDienied/accessDinied.jsx";
import Home_teacher from "./websit/hometeacher/hometeacher.jsx";
import SpecificationTeacher from "./websit/Specification_teacher/Specification_teacher.jsx";
import OpenEmisTable from "./websit/OpenEmisTable/OpenEmisTable.jsx";
import CertificationTeacher from "./websit/certificationTeacher/certificationTeacher.jsx";
import { QbankTeacherTable } from "./websit/qbankk/qbankteacher.jsx";
import CreateQuestation from "./websit/qbankk/createquestation.jsx";
import { useEffect } from "react";
import { ExamBankTeacher } from "./websit/teacher_view/PuttingExam1/exambank.jsx";
import PrivacyPolicy from "./websit/Home/PrivacyPolicy.jsx";
import PointAll from "./dashboard/Points/pointAll/pointAll.jsx";
import Put5 from "./dashboard/teacherDashBoard/PuttingExam1/PuttingExam5.jsx";
import Put1 from "./dashboard/teacherDashBoard/PuttingExam1/PuttingExam1.jsx";
import Put2 from "./dashboard/teacherDashBoard/PuttingExam1/PuttingExam2.jsx";
import Put3 from "./dashboard/teacherDashBoard/PuttingExam1/PuttingExam3.jsx";
import Put4 from "./dashboard/teacherDashBoard/PuttingExam1/PuttingExam4.jsx";

function App(props) {

setInterval(() => {
  
  const backdrop = document.querySelector('.modal-backdrop');
  if (backdrop) {
    backdrop.classList.remove('show');
  }
  document.body.style.removeProperty('overflow');

}, 100);

    useEffect(()=>{
document.title="Examero | Site"

    },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="student/payment/SuccessPayment"
          element={
              <SuccessPayment />
          }
        />
        <Route
          path="teacher/payment/SuccessPayment"
          element={
              <SuccessPayment />
          }
        />
        <Route path="/PrivacyPolicy"
        element={<PrivacyPolicy/>        }
        />
        <Route
          path="/verify-account-teacher"
          element={<EmailVerificationTech />}
        />
        <Route
          path="/verify-account-student"
          element={<EmailVerificationStud />}
        />
        <Route path="/CreateStudentAccount" element={<CreateStudentAcc />} />
        <Route path="/CreateTecherAccount" element={<CreateTechAcc />} />
        <Route path="/login_student" element={<Login1 />} />
        <Route path="/login_teacher" element={<Login />} />
        <Route path="/StudentNewPassword" element={<New_pass />} />

        <Route path="/StudentEnterCode" element={<Reset_code_page />} />
        <Route path="/StudentSendEmail" element={<Reset_page1 />} />

        <Route path="/TeacherNewPassword" element={<NewPassTeach />} />
        <Route path="/TeacherEnterCode" element={<ResetCodePageTech />} />
        <Route path="/TeacherSendEmail" element={<ResetPage1Teacher />} />

        <Route path="/student" element={<LayoutComp />}>
          <Route index element={<Home />} />
          <Route
            path="homeStudentView"
            element={
              <ProtectedRouteWebsiteTeacher>
                <HomeStudentView />
              </ProtectedRouteWebsiteTeacher>
            }
          />

          <Route
            path="createExam"
            element={
              <ProtectedRouteWebsiteTeacher>
                <CreateExam />
              </ProtectedRouteWebsiteTeacher>
            }
          />
          <Route
            path="Plans"
            element={
              <ProtectedRouteWebsiteTeacher>
                <Plans />
              </ProtectedRouteWebsiteTeacher>
            }
          />
          <Route
            path="dataStudentExam"
            element={
              <ProtectedRouteWebsiteTeacher>
                <DataStudentExam />
              </ProtectedRouteWebsiteTeacher>
            }
          />
          <Route
            path="CorrectAnswerfrom/:id"
            element={
              <ProtectedRouteWebsiteTeacher>
                <CorrectAnswerfrom />
              </ProtectedRouteWebsiteTeacher>
            }
          />
          <Route
            path="editStudentProfaile"
            element={
              <ProtectedRouteWebsiteTeacher>
                <EditStudentProfaile />
              </ProtectedRouteWebsiteTeacher>
            }
          />
        </Route>
        QbankTeacher
        <Route path="/teacher/" element={<LayoutComp />}>
          <Route path="TeacherProfile" element={
            <ProtectedRouteWebsiteTeacher>
              <TeacherProfile />
            </ProtectedRouteWebsiteTeacher>
          } />
          <Route
            path="InsertingOpenEmisTags"
            element={
              <ProtectedRouteWebsiteTeacher>
                <InsertingOpenEmisTags />
              </ProtectedRouteWebsiteTeacher>
            }
          />
          <Route
            path="Plans"
            element={
              <ProtectedRouteWebsiteTeacher>
                <Plans />
              </ProtectedRouteWebsiteTeacher>
            }
          />
          <Route path="PuttingExam1" element={
            <ProtectedRouteWebsiteTeacher>
              <PuttingExam1 />
            </ProtectedRouteWebsiteTeacher>

          } />
          
          <Route path="ExamBankTeacher" element={
            <ProtectedRouteWebsiteTeacher>
              <ExamBankTeacher/>
            </ProtectedRouteWebsiteTeacher>
          } />

          <Route path="PuttingExam2" element={
            <ProtectedRouteWebsiteTeacher>
              <PuttingExam2 />
            </ProtectedRouteWebsiteTeacher>
          } />
          <Route path="PuttingExam3" element={
            <ProtectedRouteWebsiteTeacher>
              <PuttingExam3 />
            </ProtectedRouteWebsiteTeacher>
          } />
          <Route path="PuttingExam4" element={
            <ProtectedRouteWebsiteTeacher>
              <PuttingExam4 />
            </ProtectedRouteWebsiteTeacher>
          } />
          <Route path="PuttingExam5/:page" element={
            <ProtectedRouteWebsiteTeacher>
              <PuttingExam5 />
            </ProtectedRouteWebsiteTeacher>
          } />
        

          <Route path="Certified_exam" element={
            <ProtectedRouteWebsiteTeacher>
              <Certified_exam />
            </ProtectedRouteWebsiteTeacher>

          } />
          <Route path="QbankTeacherTable" element={
            <ProtectedRouteWebsiteTeacher>
              <QbankTeacherTable />
            </ProtectedRouteWebsiteTeacher>

          } />
          <Route path="Home_teacher" element={
            <ProtectedRouteWebsiteTeacher>

              <Home_teacher />
            </ProtectedRouteWebsiteTeacher>

          } />
          <Route path="SpecificationTeacher" element={
            <ProtectedRouteWebsiteTeacher>

              <SpecificationTeacher />
            </ProtectedRouteWebsiteTeacher>

          } />
          <Route path="OpenEmisTable" element={
            <ProtectedRouteWebsiteTeacher>
              <OpenEmisTable />
            </ProtectedRouteWebsiteTeacher>
          } />

          <Route path="CertificationTeacher" element={
            <ProtectedRouteWebsiteTeacher>
              <CertificationTeacher />
            </ProtectedRouteWebsiteTeacher>
          }

          />

          <Route path="CreateQuestation" element={
            <ProtectedRouteWebsiteTeacher>
              <CreateQuestation />
            </ProtectedRouteWebsiteTeacher>
          } />

          Home_teacher
        </Route>
        <Route path="ExamPdf" element={
            // <ProtectedRouteWebsiteTeacher>
              <ExamPdf />
            // </ProtectedRouteWebsiteTeacher>
          } />
        <Route path="Test" element={
            // <ProtectedRouteWebsiteTeacher>
              <Test />
            // </ProtectedRouteWebsiteTeacher>
          } />
        <Route path="ExamPdfArabic" element={
            // <ProtectedRouteWebsiteTeacher>
              <ExamPdfArabic />
            // </ProtectedRouteWebsiteTeacher>
          } />
        <Route path="ExamePdfsolution" element={
            // <ProtectedRouteWebsiteTeacher>
              <ExamePdfsolution />
            // </ProtectedRouteWebsiteTeacher>
          } />
        <Route path="ExamPdfArabicsolution" element={
            // <ProtectedRouteWebsiteTeacher>
              <ExamPdfArabicsolution />
            // </ProtectedRouteWebsiteTeacher>
          } />
        <Route path="login_dashboard" element={<HomeDashoardLogin />} />
        <Route path="forget_password" element={<ForgetPassDashBoard />} />
        <Route path="dashBoardEnterCode" element={<EnterCodeDashBoard />} />
        <Route path="DashboardNewPassword" element={<NewPassDashBoard />} />

        <Route path="/dashboard/" element={<LayoutComp />}>
          <Route
            index
            element={
              <ProtectedRoute>
                <Home_dashboard />
              </ProtectedRoute>
            }
          />

          <Route path="b" element={ <ProtectedRoute><AccountSetting /></ProtectedRoute>} />
          <Route path="certify" element={  <ProtectedRoute><CertificateGenerator />  </ProtectedRoute>} />
          <Route path="qbank" element={  <ProtectedRoute><Qbank /></ProtectedRoute>} />
          <Route path="specify" element={ <ProtectedRoute><Specification /></ProtectedRoute>} />
          <Route path="PlansTeacher" element={ <ProtectedRoute><PlansTeacher /></ProtectedRoute>} />
          <Route path="planstudent" element={<ProtectedRoute><PlansStudent /></ProtectedRoute>} />
          <Route path="waitingemis" element={<ProtectedRoute><WaitingEmis /></ProtectedRoute>} />
          <Route path="recivedemis" element={<ProtectedRoute><RecivedEmis /></ProtectedRoute>} />
          <Route path="finishedEmis" element={<ProtectedRoute><FinishedEmis /></ProtectedRoute>} />
          <Route path="manger" element={<ProtectedRoute><RewardManger /></ProtectedRoute>} />
          <Route path="rewardSupervisor" element={<ProtectedRoute><RewardMoshref /></ProtectedRoute>} />
          <Route path="rewardteacher" element={<ProtectedRoute><RewardTeacher /></ProtectedRoute>} />
          <Route path="check" element={<ProtectedRoute><Checks /></ProtectedRoute>} />
          <Route path="qbank_details" element={<ProtectedRoute><QbankDetails /></ProtectedRoute>} />
          <Route path="qbank_edit" element={<ProtectedRoute><QbankEditing /></ProtectedRoute>} />
          <Route path="activity/mangers" element={<ProtectedRoute><MangersActivity /></ProtectedRoute>} />
          <Route path="activity/all" element={<ProtectedRoute><AllActivity /></ProtectedRoute>} />
          <Route path="accessDenied" element={<ProtectedRoute><AccessDinied /></ProtectedRoute>} />
          <Route path="PointAll" element={<ProtectedRoute><PointAll /></ProtectedRoute>} />
          <Route path="put1" element={<ProtectedRoute><Put1 /></ProtectedRoute>} />
          <Route path="put2" element={<ProtectedRoute><Put2 /></ProtectedRoute>} />
          <Route path="put3" element={<ProtectedRoute><Put3 /></ProtectedRoute>} />
          <Route path="put4" element={<ProtectedRoute><Put4/></ProtectedRoute>} />
          <Route path="put5/:page" element={<ProtectedRoute><Put5 /></ProtectedRoute>} />

          <Route
            path="putting/questions/levels=1"
            element={
              <ProtectedRoute>
                <PuttingQuestions />
              </ProtectedRoute>
            }
          />
          <Route
            path="putting/questions/subjects=2"
            element={
              <ProtectedRoute>
                <PuttingQForMab7as />
              </ProtectedRoute>
            }
          />
          <Route
            path="putting/questions/units=3"
            element={
              <ProtectedRoute>
                <PuttingQUnites />
              </ProtectedRoute>
            }
          />
          <Route
            path="putting/questions/lessons=4"
            element={
              <ProtectedRoute>
                <PuttingQFLessons />
              </ProtectedRoute>
            }
          />

          <Route
            path="putting/questions/kinds=5"
            element={
              <ProtectedRoute>
                <PuttingKindOfQ />
              </ProtectedRoute>
            }
          />

          <Route
            path="mangers"
            element={
              <ProtectedRoute>
                <Mangers />
              </ProtectedRoute>
            }
          />
          <Route
            path="supervisors"
            element={
              <ProtectedRoute>
                <Supervisors />
              </ProtectedRoute>
            }
          />
          <Route
            path="users/teachers"
            element={
              <ProtectedRoute>
                <TeacherDash />
              </ProtectedRoute>
            }
          />
          <Route
            path="users/student"
            element={
              <ProtectedRoute>
                <StudentsDash />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
