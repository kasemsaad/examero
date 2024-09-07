/* eslint-disable */

import React, { useEffect, useMemo, useState } from "react";
import HeaderNotificaion from "../../components/NotificationPage/Header/Header";
import MyTable from "../../../common/Table/Table";
import Api_Dashboard from "../../interceptor/interceptorDashboard";
import ArrowForUsers from "../../components/UsersPages/ArrowOfUsers/ArrowForUsers";
import SearchAndAddUsers from "../../components/UsersPages/searchInputAndAddButton/handelSearch&AddUsers";
import AddMangerModel from "../../components/UsersPages/AddMangerModal/AddMangersModal";
import EditMangerModal from "../../components/UsersPages/EditMangerModal/EditMangerModal";
import DeleteUserModal from "../../components/UsersPages/DeletUserModal/DeleteUserModal";
import FooterOfUserFP from "../../components/UsersPages/FooterOfUsers/FooterOfUsers";
import SendMessage from "../../components/UsersPages/SendMessageModal.jsx/SendMessageModal";
import ShowUserModal from "../../components/UsersPages/ShowUserModal/ShowUser";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import FirstTriangle from "../../components/FirstTriangle/FirstTriangle";

const Supervisors = () => {
  const navigate = useNavigate();
  const role = useSelector((state) => state.RoleAccess.role);

  const acccessDenied = () => {
    if (role == "supervisor") {
      navigate("/dashboard/accessDenied");
    }
  };
  useEffect(() => {
    if (role) {
      acccessDenied();
    }
  }, [role]);
  // header of the table
  let header = {
    name1: "اسم المشرف",
    name2: "البريد الإلكتروني",
    name3: "رقم الهاتف",
    name4: "الخصائص",
    name5: "ملاحظات",
  };

  // icons object to show the icons in the table
  const icon = { eye: true, edit: true, trash: true, butt: true };
  const other = { butt: true };
  ///
  const [superIdForSendMessage, setSuperIdForSendMessage] = useState("");
  const [rowData, setRowData] = useState("");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [idOfDeleteItem, setIdOfDeleteItem] = useState("");
  const [showSuperData, setShowSuperData] = useState("");
  const punish = true;
  const { pathname } = useLocation();

  const handelMessage = (row) => {
    setSuperIdForSendMessage(row);
  };
  const handelFetchId = async (row) => {
    const response = await Api_Dashboard.get(`/supervisors/${row.id}`)
      .then((response) => {
        setRowData(response.data.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetchAllData();
  }, [currentPage]);
  const fetchAllData = async () => {
    const response = await Api_Dashboard.get(`/supervisors?page=${currentPage}`)
      .then((response) => {
        setData(response.data.data);
        setMetaFPagination(response.data.meta.pagination);
      })
      .catch((err) => {});
  };
  // take from the array object some proprety that it will pass to the table
  const newData = useMemo(
    () =>
      data.map(({ id, fullName, email, phone_number }) => ({
        id,
        fullName,
        email,
        phone_number,
      })),
    [data]
  );

  // handel the function of search

  const [filteredSubervisors, setFilteredSubervisors] = useState(newData);
  const FilteredSubervisors = (dataFormComp) => {
    setFilteredSubervisors(dataFormComp);
  };
  useEffect(() => {
    setFilteredSubervisors(newData);
  }, [newData]);
  const handelShowSuperById = async (row) => {
    document.body.style.removeProperty("overflow");
    const response = await Api_Dashboard.get(`/supervisors/${row.id}`)
      .then((response) => {
        setShowSuperData(response.data.data);
      })
      .catch((err) => {});
  };
  // handel pagination
  const [metaFPagination, setMetaFPagination] = useState("");
  const totalPages = metaFPagination.last_page;

  const handelNext = () => {
    if (currentPage === totalPages) return;
    setCurrentPage((prev) => prev + 1);
  };

  // handel prev page
  const handelPrev = () => {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <>
      {/* header */}
      <div className="container-manger min-vh-100 w-100">
        <HeaderNotificaion content={"مشرفين الموقع"} />
        <div style={{ width: "85%", margin: "auto" }} className=" cont ">
          {/* Start Arrow for navigate */}
          {role !== "manager" ? (
            <ArrowForUsers
              loc1={role === "manager" ? "" : "/dashboard/mangers"}
              loc2={"/dashboard/supervisors"}
              pathname1={pathname}
              name1={"مديرو الموقع"}
              name2={"المشرفين"}
            />
          ) : (
            <Link to={"/dashboard/supervisors"}>
              <FirstTriangle
                className={"user-man"}
                style={{
                  backgroundColor:
                    pathname === "/dashboard/supervisors"
                      ? "#4941A6"
                      : "#1D195D",
                }}
                content={"المشرفين"}
              />
            </Link>
          )}
          {/* Arrow end  */}

          {/* Start the search and add component */}
          <SearchAndAddUsers
            newData={newData}
            FilteredUsers={FilteredSubervisors}
            buttonContent={"   اضافة مشرف   "}
          />
          {/* // End */}

          {/* Start for table */}
          <div style={{ width: "100%", overflow: "auto" }}>
            <MyTable
              header={header}
              body={filteredSubervisors}
              icons={icon}
              other={other}
              handelDeleteItem={(row) => {
                setIdOfDeleteItem(row);
              }}
              handelMessage={(row) => handelMessage(row)}
              sendMessage={"#send-message-dash"}
              deleteModalName={"#deleteElementModal_users-dash"}
              editButtonName={"#edit-manger-dash"}
              showItem={"#show-manger-dash"}
              handelEdit={(row) => {
                handelFetchId(row);
              }}
              handelShow={(row) => {
                handelShowSuperById(row);
              }}
            />
          </div>
          {/* End fro table */}

          {/* Start buttons of pagination */}
          <FooterOfUserFP
            handelNext={handelNext}
            handelPrev={handelPrev}
            totalPages={totalPages}
            currentPage={currentPage}
          />
          {/* End buttons of pagination */}
          <EditMangerModal
            api={"supervisors"}
            content={"تعديل المشرف "}
            fetchAllData={fetchAllData}
            rowData={rowData}
          />
          <AddMangerModel
            api={"supervisors"}
            content={"إضافة مشرف جديد"}
            fetchAllData={fetchAllData}
          />
          <DeleteUserModal
            content={"هذا المشرف"}
            api={"supervisors"}
            fetchAllData={fetchAllData}
            idOfDeleteItem={idOfDeleteItem}
          />
        </div>
        <ShowUserModal content={"المشرف"} userData={showSuperData} />

        <SendMessage
          punish={punish}
          api={"/points/"}
          mangerID={superIdForSendMessage}
        />
      </div>
    </>
  );
};

export default Supervisors;
