/* eslint-disable */

import React, { useEffect, useState } from "react";
import "./Notificaion.css";
import HeaderNotificaion from "../components/NotificationPage/Header/Header.jsx";
import ArrowNotification from "../components/NotificationPage/Arrow/Arrow.jsx";
import MessagesNotification from "../components/NotificationPage/messages/messages.jsx";
import MyButton from "../../common/Button/Button.jsx";
import Api_Dashboard from "../interceptor/interceptorDashboard.jsx";
import PaginationForPuttingQ from "../PuttingQussions/paginationForPutingQ/paginationForPatingQ.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setNot } from "../../redux/reducer/notification.jsx";
import { toast } from "react-toastify";
import { ToastContainer } from "react-bootstrap";

const Notification = ({ api, man, all }) => {
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [isChecked, setIsChecked] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [notificationTotal, setNotificationTotal] = useState("");
  const [metaFPagination, setMetaFPagination] = useState("");
  const [notify, setNotifiy] = useState([]);
  const totalPages = metaFPagination;
  const dispatch = useDispatch();
  const role = useSelector((state) => state.RoleAccess.role);

  const notif = (AlertPointSuccess) => {
    toast.success(AlertPointSuccess, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
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
    });
  };

  const [AlertPoint, SetAlertPoint] = useState("");
  // const [myActivityIds,setMyActivityIds]=useState({
  //   activityIds:isChecked
  // })
  let activityIds = { activityIds: isChecked };
  const payload = notificationTotal;
  useEffect(() => {
    if (payload) {
      localStorage.setItem("not", payload);
      dispatch(setNot(payload));
    }
  }, [payload]);

  useEffect(() => {
    fetchAllNotfiy();
  }, [currentPage]);

  const fetchAllNotfiy = async () => {
    await Api_Dashboard.get(`${api}?page=${currentPage}`)
      .then((response) => {
        if (all) {
          setNotifiy(response.data.data);
          setMetaFPagination(response.data.meta.pagination.last_page);
          setNotificationTotal(response.data.meta.pagination.total);
        } else {
          setNotifiy(response.data.data.data);
          setMetaFPagination(response.data.data.last_page);
          setNotificationTotal(response.data.data.total);
        }
      })
      .catch((err) => {});
  };
  const deleteNotifications = async (activityIds) => {
    await Api_Dashboard.put("/activity", activityIds)
      .then((response) => {
        notif("تم الحذف بنجاح ");

        setIsChecked([]);
        fetchAllNotfiy();
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  const handleSelectAll = () => {
    if (isCheckedAll) {
      setIsChecked([]);
    } else {
      const ids = notify.map((not) => not.id);
      setIsChecked(ids);
    }
    setIsCheckedAll(!isCheckedAll);
  };

  const handleChange = (e) => {
    const { id, checked } = e.target;
    const idNum = Number(id);

    setIsChecked((prev) =>
      checked ? [...prev, idNum] : prev.filter((item) => item !== idNum)
    );
  };
  // const getValues = () => {
  //   console.log(isChecked);
  // };

  return (
    <>
      <ToastContainer position="top-center" />;
      <div className="notification min-vh-100">
        <HeaderNotificaion content={"الإشعارات"} />

        <div className="parent min-vh-100">
          <ArrowNotification />
          {isChecked.length > 0 && (
            <div className="towButt " style={{ marginBottom: "10px" }}>
              <MyButton
                className={"btttn "}
                style={{ backgroundColor: "#0E0A43" }}
                onClick={handleSelectAll}
                content={" تحديد الكل"}
              />
              <MyButton
                className={"bttt"}
                onClick={() => deleteNotifications(activityIds)}
                style={{ marginRight: "10px", backgroundColor: "#0E0A43" }}
                content={"  حذف المحدد"}
              />
            </div>
          )}

          <hr />
          <div style={{ height: "75%", overflow: "auto" }}>
            {notify &&
              notify.map((not, index) => (
                <MessagesNotification
                  key={index}
                  isChecked={isChecked}
                  not={not}
                  handleChange={handleChange}
                  isCheckedAll={isCheckedAll}
                />
              ))}
          </div>
          <PaginationForPuttingQ
            flow="true"
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </>
  );
};

export default Notification;
