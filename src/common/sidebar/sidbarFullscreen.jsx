/* eslint-disable */

import { Router, Link, useNavigate, useLocation } from "react-router-dom";
import homeIcon from '../../assets/icons/sidebar/majesticons_home-line.svg';
import octiconIcon from '../../assets/icons/sidebar/octicon_question-16.svg';
import ph_certificate from '../../assets/icons/sidebar/ph_certificate.svg';
import tabel from '../../assets/icons/sidebar/ph_table.svg';
import lucide_file_input from '../../assets/icons/sidebar/lucide_file-input.svg';
import create_new from '../../assets/icons/sidebar/wpf_create-new.svg';
import iconamoon_exit_light from '../../assets/icons/sidebar/iconamoon_exit-light.svg';
import akar_icons_bank from '../../assets/icons/sidebar/akar-icons_bank.svg';
import manage_accounts_outline_rounded from '../../assets/icons/sidebar/material-symbols_manage-accounts-outline-rounded.svg';
import account_supervisor_outline from '../../assets/icons/sidebar/mdi_account-supervisor-outline.svg';
import teacher from '../../assets/icons/sidebar/mdi_teacher.svg';
import "./style.css";
import Api_Website from "../../utlis/axios_utils_websit";
import imagee from '../../assets/icons/create_Exam/High Importance.svg';
import ex from '../../assets/image/لوجو examero-01 1.svg';
import Api_Dashboard from "../../dashboard/interceptor/interceptorDashboard";
import ModalLogOut from "../../dashboard/modal/modalLogOut";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// import Api_Dashboard from "../../dashboard/interceptor/interceptorDashboard";

function SidebarFullscreen() {
  const navigate = useNavigate()
  const setId = (id) => {
    localStorage.setItem("sidbarId", JSON.stringify(id));
  };

  const logout = (id) => {
    localStorage.setItem("sidbarId", JSON.stringify(id));
   
  }

  const LogOutDashBoard = () => {
    Api_Dashboard.post(`/logout`)
      .then(response => {
        localStorage.removeItem("token_user");
        navigate("/login_dashboard")
        setId(1)
      })
      .catch(error => {
        console.error(error);
      });
  }


  const id = localStorage.getItem("sidbarId");
  const location = useLocation()
  const user=localStorage.getItem("user")
  const notification = useSelector((state) => state.not.not);



  const log= () => {

    if (user === "student") {
      Api_Website.post(`/students/logout`)
            .then(response => {
              localStorage.removeItem("token_user");
              localStorage.removeItem("user");
              navigate("/")            })
            .catch(error => {
                console.error("Error not logout ");
            });
            
    } else if (user === "teacher") {
        Api_Website.post(`/teachers/logout`)
            .then(response => {
              localStorage.removeItem("token_user");
              localStorage.removeItem("user");
              navigate("/")            })
            .catch(error => {

                console.error("Error not logout ");
            });
    }
               

}


  const [roleAceessToNav,SetroleAceessToNav]=useState(true)
  const role = useSelector((state) => state.RoleAccess.role); 
  console.log(role);
  const acccessDenied = ()=>{
      if (role != "owner"){
        SetroleAceessToNav(false)
          // navigate('/dashboard/accessDenied')
      }
  }
  useEffect(() => {
    if (role) {
      acccessDenied();
    }
  }, [role]);

  return (
    <>
      {
        location.pathname.startsWith('/dashboard') ?
        
        <div className="sidbar p-0  mt-3"  dir="rtl" >
        <div className="sidbarSidbar " >
          <ul className="pt-4 ps-4">
            <li className={`Icon  ${id === "1" ? "bgIcon":" "}`}>
              <Link to="/dashboard" onClick={() => setId(1)} >
              <img  src={homeIcon} alt="الرئيسية" />
              </Link>
            </li>
           { role === "supervisor" ? "" :<li className={`Icon  ${id === "2" ? "bgIcon":" "}`}>
            <Link  to="/dashboard/mangers" onClick={() => setId(2)} >
            <img style={{ width: 20 , height:20 }} src={manage_accounts_outline_rounded} alt="مديرو الموقع" />
              </Link>
            </li>}
            <li className={`Icon  ${id === "3" ? "bgIcon":" "}`}>
            <Link  to="/dashboard/users/teachers" onClick={() => setId(3)}>
            <img style={{ width: 20 , height:20 }} src={account_supervisor_outline} alt="مشرفو الموقع" />
              </Link>
            </li>
           { roleAceessToNav?<li className={`Icon  ${id === "4" ? "bgIcon":" "}`}>
            <Link  to="/dashboard/planstudent" onClick={() => setId(4)}>
            <img style={{ width: 20 , height:20 }} src={teacher} alt="المعلمين" />
              </Link>
            </li>:""}
            <li className={`Icon  ${id === "5" ? "bgIcon":" "}`}>
            <Link  to="/dashboard/putting/questions/levels=1" onClick={() => setId(5)}>
            <img style={{ width: 20 , height:20 }} src={octiconIcon} alt=" بنك الاسئلة" />
              </Link>
            </li>
            <li className={`Icon  ${id === "12" ? "bgIcon":" "}`}>
            <Link  to="/dashboard/qbank_details" onClick={() => setId(12)}>
            <img style={{ width: 20 , height:20 }} src={akar_icons_bank} alt="تفاصيل بنك الاسئلة" />
              </Link>
            </li>
            {/* <li className={`Icon  ${id === "6" ? "bgIcon":" "}`}>
            <Link to="/dashboard/rewardSupervisor" onClick={() => setId(6)}>
              <img style={{ width: 23 , height:23 }} src={akar_icons_bank} alt="الي حين "  />
              </Link>
            </li> */}
      <li className={`Icon  ${id === "7" ? "bgIcon":" "}`}>
        <Link to="/dashboard/certify" onClick={() => setId(7)}>
          <img style={{ width: 23 , height:23 }} src={ph_certificate } alt="الشهادات"  />
          </Link>
        </li>
           <li className={`Icon  ${id === "8" ? "bgIcon":" "}`}>
            <Link to="/dashboard/waitingemis" onClick={() => setId(8)}>
              <img style={{ width: 20 , height:20 }} src={lucide_file_input } alt=" وضع o.p.s"  />
              </Link>
            </li>
            <li className={`Icon  ${id === "9" ? "bgIcon":" "}`}>
            <Link to="/dashboard/specify" onClick={() => setId(9)}>
              <img style={{ width: 23 , height:23 }} src={tabel} alt=" تالمواصفات"  />
              </Link>
            </li>
           {role !== "owner" ? "" :  <li className={`Icon  ${id === "10" ? "bgIcon":" "}`}>
            <Link to="/dashboard/put1" onClick={() => setId(10)}>
              <img  style={{ width: 18 , height:18 }} src={create_new} alt="وضع الامتحان"  />
              </Link>
            </li>}
            <li className={`Icon  ${id === "11" ? "bgIcon":" "}`}>
            <Link   onClick={() => logout(11)}>
              <img data-bs-toggle="modal" data-bs-target="#log_out_dashboard" src={iconamoon_exit_light} alt=" تسجيل الخروج"  />
              </Link>
            </li>
            {/* <li className={`Icon  ${id === "11" ? "bgIcon":" "}`}>
            <Link to="/" onClick={() => setId(11)}>
              <img  src={iconamoon_exit_light} alt="وضع الاسئله"  />
              </Link>
            </li> */}
          </ul>
          </div>
          <ul className="sidbarUl pt-4  " >
            <li className="sidbarli">
            <Link to="/dashboard" onClick={() => setId(1)} className={`Icon  ${id === "1" ? "Id":" "}`}>الرئيسية</Link>
            </li>
          { role === "supervisor" ? "": <li className="sidbarli">
              <Link to="/dashboard/mangers" onClick={() => setId(2)} className={`Icon  ${id === "2" ? "Id":" "}`}>مديرو الموقع</Link>
            </li>}
            <li className="sidbarli">
            <Link to="/dashboard/users/teachers" onClick={() => setId(3)} className={`Icon  ${id === "3" ? "Id":" "}`}> المستخدمين</Link>
            </li>
           {roleAceessToNav? <li className="sidbarli">
            <Link to="/dashboard/planstudent" onClick={() => setId(4)} className={`Icon  ${id === "4" ? "Id":" "}`}>باقات الاشتراك</Link>
            </li>:""}
            <li className="sidbarli">
            <Link to="/dashboard/putting/questions/levels=1" onClick={() => setId(5)} className={`Icon  ${id === "5" ? "Id":" "}`}>وضع الأسئلة</Link>
            </li>
            <li className="sidbarli">
            <Link to="/dashboard/qbank_details" onClick={() => setId(12)} className={`Icon  ${id === "12" ? "Id":" "}`} > بنك الأسئلة</Link>
            </li>
            {/* <li className="sidbarli">
            <Link to="/dashboard/rewardSupervisor" onClick={() => setId(6)} className={`Icon  ${id === "6" ? "Id":" "}`}>المكافئات و العقوبات</Link>
            </li> */}
           <li className="sidbarli">
            <Link to="/dashboard/certify" onClick={() => setId(7)} className={`Icon  ${id === "7" ? "Id":" "}`}>شهادات التقدير</Link>
            </li>
          <li className="sidbarli">
            <Link to="/dashboard/waitingemis" onClick={() => setId(8)} className={`Icon  ${id === "8" ? "Id":" "}`}>إدخال علامات Open Emis</Link>
            </li>
         <li className="sidbarli">
            <Link to="/dashboard/specify" onClick={() => setId(9)} className={`Icon  ${id === "9" ? "Id":" "}`}>جدول المواصفات</Link>
            </li>
           { role !== "owner" ? "" : <li className="sidbarli">
            <Link to="/dashboard/put1" onClick={() => setId(10)} className={`Icon  ${id === "10" ? "Id":" "}`}> انشاء الامتحان</Link>
            </li>}
            <li className="sidbarli">
            <Link data-bs-toggle="modal" data-bs-target="#log_out_dashboard" onClick={() => setId(11)} className={`Icon  ${id === "11" ? "Id":" "}`}>تسجيل الخروج</Link>
            </li>
          </ul>
        </div>

          :
          location.pathname.startsWith('/student') ?

          <div className="sidbar p-0 pb-2 mt-3 "  dir="rtl" style={{height:"340px", width:"300px"}} >
          <div className="sidbarSidbar "  style={{paddingBottom:"13.5rem"}} >
            <ul className="pt-4 ">
                  <li className={`Icon  ${id === "1" ? "bgIcon" : " "}`}>
                    <Link to="/student/HomeStudentview" onClick={() => setId(1)} >
                      <img src={homeIcon} alt="الرئيسية" />
                    </Link>
                  </li>
                  <li className={`Icon  ${id === "10" ? "bgIcon" : " "}`}>
                    <Link to="datastudentexam" onClick={() => setId(10)}>
                      <img style={{ width: 18, height: 18 }} src={create_new} alt="إنشاء الامتحان" />
                    </Link>
                  </li>
                  <li className={`Icon  ${id === "12" ? "bgIcon" : " "}`}>
                    <Link to="/" onClick={() => setId(12)} style={{ textDecoration: "none" }}>
                      <i className="fas fa-globe text-white" alt="الموقع" ></i>
                    </Link>
                  </li>
                  <li className={`Icon  ${id === "11" ? "bgIcon" : " "}`}>
                    <Link onClick={() => {
                      logout(11);
                    }}>
                      <img data-bs-toggle="modal" data-bs-target="#logout" src={iconamoon_exit_light} alt="تسجيل الخروج" />
                    </Link>
                  </li>

                </ul>
              </div>
              <ul className="sidbarUl pt-4  " >
                <li className="sidbarli">
                  <Link to="/student/HomeStudentview" onClick={() => setId(1)} className={`Icon  ${id === "1" ? "Id" : " "}`}>الرئيسية</Link>
                </li>
                <li className="sidbarli">
                  <Link to="/student/datastudentexam" onClick={() => setId(10)} className={`Icon  ${id === "10" ? "Id" : " "}`}>إنشاء الامتحان</Link>
                </li>
                <li className="sidbarli">
                  <Link to="/" onClick={() => setId(12)} className={`Icon  ${id === "12" ? "Id" : " "}`}>الموقع</Link>
                </li>
                <li className="sidbarli">
                  <Link data-bs-toggle="modal" data-bs-target="#logout" onClick={() => setId(11)} className={`Icon  ${id === "11" ? "Id" : " "}`}>تسجيل الخروج</Link>
                </li>

              </ul>
            </div>





            ////////////////////teacher//////////////////////////////////////////////////////

            : location.pathname.startsWith('/teacher') ?



            <div className="sidbar p-0  mt-3"  dir="rtl" >
            <div className="sidbarSidbar " >
              <ul className="pt-4 ps-2">
                    <li className={`Icon  ${id === "1" ? "bgIcon" : " "}`}>
                      <Link to="/teacher/Home_teacher" onClick={() => setId(1)} >
                        <img src={homeIcon} alt="الرئيسية" />
                      </Link>
                    </li>
                    <li className={`Icon  ${id === "2" ? "bgIcon" : " "}`}>
                      <Link to="/teacher/CreateQuestation" onClick={() => setId(2)}>
                        <img style={{ width: 20, height: 20 }} src={octiconIcon} alt="تفاصيل بنك الاسئلة" />
                      </Link>
                    </li>
                    <li className={`Icon  ${id === "3" ? "bgIcon" : " "}`}>
                  <Link to="/teacher/QbankTeacherTable" onClick={() => setId(3)}>
                    <img style={{ width: 23, height: 23 }} src={akar_icons_bank} alt="بنك الاسءله " />
                  </Link>
                </li>
                    <li className={`Icon  ${id === "4" ? "bgIcon" : " "}`}>
                      <Link to="/teacher/CertificationTeacher" onClick={() => setId(4)}>
                        <img style={{ width: 23, height: 23 }} src={ph_certificate} alt="الشهادات" />
                      </Link>
                    </li>
                    <li className={`Icon  ${id === "5" ? "bgIcon" : " "}`}>
                      <Link to="/teacher/InsertingOpenEmisTags" onClick={() => setId(5)}>
                        <img style={{ width: 20, height: 20 }} src={lucide_file_input} alt=" وضع o.p.s" />
                      </Link>
                    </li>
                    <li className={`Icon  ${id === "6" ? "bgIcon" : " "}`}>
                      <Link to="/teacher/SpecificationTeacher" onClick={() => setId(6)}>
                        <img style={{ width: 23, height: 23 }} src={tabel} alt=" تالمواصفات" />
                      </Link>
                    </li>
                    <li className={`Icon  ${id === "7" ? "bgIcon" : " "}`}>
                      <Link to="/teacher/ExamBankTeacher" onClick={() => setId(7)}>
                        <img style={{ width: 18, height: 18 }} src={create_new} alt="انشاء الامتحان" />
                      </Link>
                    </li>
                    <li className={`Icon  ${id === "8" ? "bgIcon" : " "}`}>
                    <Link to="/" onClick={() => setId(8)} style={{ textDecoration: "none" }}>
                      <i className="fas fa-globe text-white" alt="الموقع" ></i>
                    </Link>
                    </li>

                    <li className={`Icon  ${id === "11" ? "bgIcon" : " "}`}>
                      <Link onClick={() => {
                        logout(11);
                      }}>
                        <img data-bs-toggle="modal" data-bs-target="#logout" src={iconamoon_exit_light} alt="تسجيل الخروج" />
                      </Link>
                    </li>
                  </ul>
                  

                </div>
                <ul className="sidbarUl pt-4  " >
                  <li className="sidbarli">
                    <Link to="/teacher/Home_teacher" onClick={() => setId(1)} className={`Icon  ${id === "1" ? "Id" : " "}`}>الرئيسية</Link>
                  </li>
                  <li className="sidbarli">
                    <Link to="/teacher/CreateQuestation" onClick={() => setId(2)} className={`Icon  ${id === "2" ? "Id" : " "}`} > وضع الأسئلة</Link>
                  </li>
                  <li className="sidbarli">
                    <Link to="/teacher/QbankTeacherTable" onClick={() => setId(3)} className={`Icon  ${id === "3" ? "Id" : " "}`}>بنك الأسئلة</Link>
                  </li>
                  <li className="sidbarli">
                    <Link to="/teacher/CertificationTeacher" onClick={() => setId(4)} className={`Icon  ${id === "4" ? "Id" : " "}`}>شهادات التقدير</Link>
                  </li>
                  <li className="sidbarli">
                    <Link to="/teacher/InsertingOpenEmisTags" onClick={() => setId(5)} className={`Icon  ${id === "5" ? "Id" : " "}`}>إدخال علامات Open Emis</Link>
                  </li>
                  <li className="sidbarli">
                    <Link to="/teacher/SpecificationTeacher" onClick={() => setId(6)} className={`Icon  ${id === "6" ? "Id" : " "}`}>جدول المواصفات</Link>
                  </li>
                  <li className="sidbarli">
                    <Link to="/teacher/ExamBankTeacher" onClick={() => setId(7)} className={`Icon  ${id === "7" ? "Id" : " "}`}>إنشاء الامتحان</Link>
                  </li>
                  <li className="sidbarli">
                    <Link to="/" onClick={() => setId(8)} className={`Icon  ${id === "8" ? "Id" : " "}`}>الموقع</Link>
                  </li>
                  <li className="sidbarli">
                    <Link data-bs-toggle="modal" data-bs-target="#logout" onClick={() => setId(11)} className={`Icon  ${id === "11" ? "Id" : " "}`}>تسجيل الخروج</Link>
                  </li>

                </ul>
              </div>




              : ""



      }
      <div

        className="modal fade DElementFade  "
        id="logout"
        tabIndex="-1"
        aria-labelledby="deleteElementModalLabel"
        aria-hidden="true"
        style={{zIndex:"999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999"}}
      >
        <div className="modal-dialog DElementDialog modal-dialog-centered ele_2 ">
          <div className="modal-content DElementContent modal-backdrop1">
            <div className="modal-body DElementBody text-center">
              <img src={imagee} alt="Warning Icon" className="warning-icon" />
              <p className="modal-title DElementTitle" id="deleteElementModalLabel">هل أنت متأكد ؟</p>
              <p className="parag">سيتم تسجيل الخروج </p>
            </div>
            <div className="modal-footer DElementFooter">
              <div>
                <button
                  type="button"
                  className="btn btn-danger cancel-btn DElementSave mx-1"
                  data-bs-dismiss="modal"
                  onClick={()=>{log()}}
                  
                >
                  نعم
                </button>
                <button
                  type="button"
                  className="btn-secondary cancel-btn DElementCancel mx-1"
                  data-bs-dismiss="modal"
                >
                  لا
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalLogOut LogOut={LogOutDashBoard} />

    </>
  );
}


export default SidebarFullscreen;