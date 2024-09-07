/* eslint-disable */

import React, { useCallback, useEffect, useState } from 'react'
import Api_Dashboard from '../../interceptor/interceptorDashboard'
import Plans from '../Plans'
import image from "./../../../assets/image/High Importance.svg"
import './PlansTeacher.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NotifyError } from '../../Alert/alertToast'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function PlansTeacher() {

  const navigate = useNavigate()
  const role = useSelector((state) => state.RoleAccess.role); 
  // console.log(role);
  
  const acccessDenied = ()=>{
      if (role !== "owner"){
          navigate('/dashboard/accessDenied')
      }
  }

    const [allTeacherPlanData,SetallTeacherPlanData]=useState([])
    const [editId,SetId]=useState("")
    const [deleteId,SetdeleteId]=useState("")
    const [toggled, setToggled] = useState(false);
    const [pagination,Setpagination]=useState('')
    const [current_page,SetcurrentPage]=useState(1)
    // const [totalPages,Set]
    const totalPages=pagination.last_page
    const [modalDissmiss,SetmodalDissmiss]=useState('')

    const notify = (AlertPointSuccess) => {
      toast.success(AlertPointSuccess, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
      })
  };

  
  const Errornotify = (AlertPoint) => {
      toast.error(AlertPoint, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
      })
  };



    
    const getAllTeacherPlan = async ()=>{
      await Api_Dashboard.get(`/plans/teacher?page=${current_page}`).then((response)=>{
        // console.log(response.data.meta.pagination);
        Setpagination(response.data.meta.pagination)
        SetallTeacherPlanData(response.data.data)


        }).catch((err)=>{
            // console.log(err);
        })
    }
    

    const handelNext = () => {
      if (current_page === totalPages) return;
      SetcurrentPage((prev) => prev + 1);
    };
    
    const handelPrev = () => {
      if (current_page === 1) return;
      SetcurrentPage((prev) => prev - 1);
    };
    

    

    const [InputEditTeacher,SetInputEditTeacher]=useState({
      name:'',
      description:'',
      price:1,
      allow_exam:1,
      allow_question:1,
      for_student:0,
      status:''

    })
    

  

    const tog = () => {
      setToggled(!toggled);
      SetInputEditTeacher({
        ...InputEditTeacher,
        status: InputEditTeacher.status === 1 ? 0 : 1
      });
    };



    const [name, setname] = useState('');
    const [description, setdescription] = useState('');
    const [price, setprice] = useState(1);
    const [allow_exam, setallow_exam] = useState(1);
    const [allow_question, setallow_question] = useState(1);

    const increment = (field) => {
      SetInputEditTeacher((prevState) => ({
        ...prevState,
        [field]: parseInt(prevState[field]) + 1
      }));
    };
  
    const decrement = (field) => {
      SetInputEditTeacher((prevState) => ({
        ...prevState,
        [field]: prevState[field] > 1 ? parseInt(prevState[field]) - 1 : 1
      }));
    };


    // ******get acc id edit and update ******************8 
    const handeledit = async(row)=>{
      document.body.style.overflow = '';
      await Api_Dashboard.get(`/plans/${row.id}`).then((response)=>{
      SetId(row.id)
      getAllTeacherPlan()
      SetInputEditTeacher(response.data.data)
       }).catch((err)=>{
        // console.log(err);
       })
    }


    // edit modal acc id
    const handlemodal = async(event) => {
      event.preventDefault();
      await Api_Dashboard.post(`/plans/${editId}`,{
      name:InputEditTeacher.name,
      description:InputEditTeacher.description,
      price:InputEditTeacher.price,
      allow_exam:InputEditTeacher.allow_exam,
      allow_question:InputEditTeacher.allow_question,
      status:InputEditTeacher.status,
      for_student:0  
      }).then((response)=>{
// console.log(response.data);
const modalElement = document.getElementById('add_connect_Teacher');
modalElement.style.display = "none"
notify(" تمت التعديل بنجاح ")


getAllTeacherPlan()
setTimeout((()=>{

  SetmodalDissmiss('modal')
}),300)


      }).catch((err)=>{
        // console.log(err);
        SetmodalDissmiss('')


      })
    };



  


    // get values which write in inputs 

    const getEditingInputs=(e)=>{
      let editTeacher={...InputEditTeacher}
      editTeacher[e.target.name]=e.target.value
      SetInputEditTeacher(editTeacher)
    }

    // delete connect 
    const getDeletedObject = (row)=>{
      document.body.style.overflow = '';

      SetdeleteId(row.id)
      // console.log(deleteId)
    }

// delete api _________________________
    const deleteConnect=async()=>{
      await Api_Dashboard.delete(`/plans/${deleteId}`).then((response)=>{
        // console.log(response);
        NotifyError("تم الحذف بنجاح")
        getAllTeacherPlan()
      }).catch((err)=>{
        // console.log(err);
      })
    }
// ____________________________________________




      //********* */ add connect post *************8
      const addConnect =async(event)=>{
        document.body.style.overflow = '';
        event.preventDefault();
      await  Api_Dashboard.post('/plans',{
        name:InputEditTeacher.name,
        description:InputEditTeacher.description,
        price:InputEditTeacher.price,
        allow_exam:InputEditTeacher.allow_exam,
        allow_question:InputEditTeacher.allow_question,
        for_student:0  ,
        }).then((response)=>{
           const modalElement = document.getElementById('add_connect_Teacher_add');
           modalElement.style.display = "none"
           getAllTeacherPlan()
           notify("تمت الاضافه بنجاح")


        }).catch((err)=>{
          // console.log(err);
      
        })
      }

    useEffect(()=>{
        getAllTeacherPlan()
        if (role) {
          acccessDenied();
        }
    },[current_page,role])
  return (
    <>
    <ToastContainer position='top-left' />


        <Plans  totalPages={totalPages}
         current_page={current_page} 
         next={handelNext} handelPrev={handelPrev} 
          dataRender={allTeacherPlanData}
           dataConnect={"البيانات الباقات المعلمين"} 
           edit={"#add_connect_Teacher"} delete={"#deleteElementModal_teacher_dash"} 
            handel={(row)=>handeledit(row)}
             Deletehandel={(row)=>getDeletedObject(row)} 
             nameOfPageModalTarget={"#add_connect_Teacher_add"}
             flagNoContent={allTeacherPlanData.length === 0} 

             
             />
{/* edit modal */}

        <div
      className="modal fade"
      id="add_connect_Teacher"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog" >
        <div className="modal-content" style={{backgroundColor:"#1D195D",borderRadius:"20px"}}>
          <div className="modal-header" >
            <h5 style={{color:'#FF8A00',margin:"auto"}} className="modal-title" id="exampleModalLabel">إضافة باقة جديدة</h5>
          </div>

          <div className="modal-body">
            <div className="container  text-white">
              <form onSubmit={(e)=>handlemodal(e)}>
                

                <div className="form-group">
                  <label htmlFor="name">اسم الباقة</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name='name'
                    placeholder="أدخل اسم الباقة"
                    value={InputEditTeacher.name}
                    // onChange={(e) => setname(e.target.value)}
                    onChange={(e)=>getEditingInputs(e)}
                    required
                  />
                </div>



                <div className="form-group mt-4">
                  <label htmlFor="description">وصف الباقة</label>
                  <textarea
                    className="form-control"
                    id="description"
                    name='description'
                    rows="3"
                    placeholder="أدخل وصف الباقة"
                    value={InputEditTeacher.description}
                    // onChange={(e) => setdescription(e.target.value)}
                    onChange={(e)=>getEditingInputs(e)}
                    required

                  />
                </div>



                <div className="mt-4 wraber_all_button" style={{display:"flex",justifyContent:"space-between"}}>
                  <div className="form-group col-md-3">
                    <label htmlFor="price">سعر الباقة</label>
                    <div className="input-group" style={{flexWrap:"noWrap",width:"134px"}}>
                      <div className="input-group-prepend">
                        <button
                          type="button"
                          className="btn input-group-text side_inc_dec "
                          onClick={() => decrement("price")}
                        >
                          -
                        </button>
                      </div>
                      <input
                        type="number"
                        className="form-control text-center"
                        id="price"
                        name='price'
                        value={InputEditTeacher.price}
                        onChange={(e)=>getEditingInputs(e)}
                        
                      />
                      <div className="input-group-append">
                        <button
                          type="button"
                          className="btn input-group-text side_inc_dec"
                          onClick={() => increment("price")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-md-3 wraber_plus_dec">
                    <label htmlFor="allow_exam"> الامتحانات المتاحة</label>
                    <div className="input-group" style={{width:"134px"}}>
                      <div className="input-group-prepend">
                        <button
                          type="button"
                          className="btn input-group-text side_inc_dec"
                          onClick={() => decrement("allow_exam")}
                        >
                          -
                        </button>
                      </div>
                      <input
                        type="number"
                        className="form-control text-center"
                        id="allow_exam"
                        name='allow_exam'
                        value={InputEditTeacher.allow_exam}
                        
                        onChange={(e)=>getEditingInputs(e)}

                      />
                      <div className="input-group-append">
                        <button
                          type="button"
                          className="btn input-group-text side_inc_dec"
                          onClick={() => increment("allow_exam")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-md-3 wraber_plus_dec">
                    <label htmlFor="allow_question"> الأسئلة المتاحة</label>
                    <div className="input-group" style={{width:"127px"}}>
                      <div className="input-group-prepend">
                        <button
                          type="button"
                          className="btn input-group-text side_inc_dec"
                          onClick={() => decrement("allow_question")}
                        >
                          -
                        </button>
                      </div>
                      <input
                        type="number"
                        className="form-control text-center"
                        id="allow_question"
                        name='allow_question'
                        value={InputEditTeacher.allow_question}
                        onChange={(e)=>getEditingInputs(e)}

                      />
                      <div className="input-group-append">
                        <button
                          type="button"
                          className="btn input-group-text side_inc_dec"
                          // onClick={() => increment(setallow_question, allow_question)}
                          onClick={() => increment('allow_question')}

                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

        <div className='input_toogle mt-4 ' style={{display:"flex",alignItems:"center"}}>
          <input type="text" name='status'
           value={InputEditTeacher.status} 
           onChange={(e)=>getEditingInputs(e)}
           style={{display:"none"}}

           />
        <label htmlFor="">الحالة</label>
              <button type="button"
        style={{ marginLeft: "6px",marginRight:"20px" ,backgroundColor: InputEditTeacher.status === 0 ? '#FE4F60' : 'green'}}
        className={`toggle-btnn ${toggled ? "toggled" : ""}`}
        onClick={() => tog()}

      >
        <span
          style={{
            marginTop: "-6px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className={toggled ? "white-text" : "whit"}
        >
        {InputEditTeacher.status === 1 ? 'مفعل' : 'معطل'}
        </span>
        <div className="thumb"></div>
      </button>
                </div>

                <div className='mt-5' style={{textAlign:"center",display:"flex",justifyContent:"center"}}>
                  <div className='submitButton'>
                <button  type="submit" className="btn btn-primary">حفظ</button>

                </div>
                <div style={{marginRight:"30px"}}>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">إلغاء</button>
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>


    
    {/* delete modal  */}
            <div
                className="modal fade DElementFade"
                id="deleteElementModal_teacher_dash"
                tabIndex="-1"
                aria-labelledby="deleteElementModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog DElementDialog modal-dialog-centered ele_2">
                    <div className="modal-content DElementContent">
                        <div className="modal-body DElementBody text-center">
                            <img src={image} alt="Warning Icon" className="warning-icon" />
                            <p className="modal-title DElementTitle" id="deleteElementModalLabel">هل أنت متأكد ؟</p>
                            <p className="parag" >  سيتم حذف هذه الباقه </p>
                        </div>
                        <div className="modal-footer DElementFooter">
                            <button
                                type="button"
                                className="btn-secondary cancel-btn DElementCancel"
                                data-bs-dismiss="modal"
                            >
                                لا
                            </button>
                            <button  data-bs-dismiss="modal"

    onClick={deleteConnect} 
     type="button" className="btn-danger save-btn DElementSave">
                                نعم
                            </button>
                        </div>
                    </div>
                </div>
            </div>



{/* modal add connect */}
      <div
      className="modal fade"
      id="add_connect_Teacher_add"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog" >
        <div className="modal-content" style={{backgroundColor:"#1D195D",borderRadius:"20px"}}>
          <div className="modal-header" >
            <h5 style={{color:'#FF8A00',margin:"auto"}} className="modal-title" id="exampleModalLabel">إضافة باقة جديدة</h5>
          </div>

          <div className="modal-body">
            <div className="container  text-white">
              <form onSubmit={(e)=>addConnect(e)}>
                

                <div className="form-group">
                  <label htmlFor="name">اسم الباقة</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name='name'
                    required
                    placeholder="أدخل اسم الباقة"
                    // value={InputEditTeacher.name}
                    // onChange={(e) => setname(e.target.value)}
                    onChange={(e)=>getEditingInputs(e)}
                  />
                </div>



                <div className="form-group mt-4">
                  <label htmlFor="description">وصف الباقة</label>
                  <textarea
                    className="form-control"
                    id="description"
                    name='description'
                    rows="3"
                    placeholder="أدخل وصف الباقة"
                    // value={InputEditTeacher.description}
                    // onChange={(e) => setdescription(e.target.value)}
                    onChange={(e)=>getEditingInputs(e)}
                    required

                  />
                </div>



                <div className="mt-4 wraber_all_button" style={{display:"flex",justifyContent:'space-between'}}>
                  <div className="form-group col-md-3  wraber_plus_dec">
                    <label htmlFor="price">سعر الباقة</label>
                    <div className="input-group" style={{flexWrap:"noWrap",width:"134px"}}>
                      <div className="input-group-prepend">
                        <button
                          type="button"
                          className="btn input-group-text side_inc_dec "
                          onClick={() => decrement("price")}
                        >
                          -
                        </button>
                      </div>
                      <input
                        type="number"
                        className="form-control text-center"
                        id="price"
                        name='price'
                        value={InputEditTeacher.price}
                        onChange={(e)=>getEditingInputs(e)}
                        
                      />
                      <div className="input-group-append">
                        <button
                          type="button"
                          className="btn input-group-text side_inc_dec"
                          onClick={() => increment("price")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-md-3  wraber_plus_dec">
                    <label className='examAailable' htmlFor="allow_exam"> الامتحانات المتاحة</label>
                    <div className="input-group" style={{width:"134px"}}>
                      <div className="input-group-prepend">
                        <button
                          type="button"
                          className="btn input-group-text side_inc_dec"
                          onClick={() => decrement("allow_exam")}
                        >
                          -
                        </button>
                      </div>
                      <input
                        type="number"
                        className="form-control text-center"
                        id="allow_exam"
                        name='allow_exam'
                        value={InputEditTeacher.allow_exam}
                        
                        onChange={(e)=>getEditingInputs(e)}

                      />
                      <div className="input-group-append">
                        <button
                          type="button"
                          className="btn input-group-text side_inc_dec"
                          onClick={() => increment("allow_exam")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-md-3  wraber_plus_dec">
                    <label htmlFor="allow_question"> الأسئلة المتاحة</label>
                    <div className="input-group" style={{width:"127px"}}>
                      <div className="input-group-prepend">
                        <button
                          type="button"
                          className="btn input-group-text side_inc_dec"
                          onClick={() => decrement("allow_question")}
                        >
                          -
                        </button>
                      </div>
                      <input
                        type="number"
                        className="form-control text-center"
                        id="allow_question"
                        name='allow_question'
                        value={InputEditTeacher.allow_question}
                        
                        onChange={(e)=>getEditingInputs(e)}

                      />
                      <div className="input-group-append">
                        <button
                          type="button"
                          className="btn input-group-text side_inc_dec"
                          // onClick={() => increment(setallow_question, allow_question)}
                          onClick={() => increment('allow_question')}

                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-5' style={{textAlign:"center",display:"flex",justifyContent:"center"}}>
                  <div className='submitButton'>
                <button   type="submit" className="btn btn-primary">حفظ</button>
                </div>
                <div style={{marginRight:"30px"}}>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">إلغاء</button>
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>


        </>
    );
}

    
  