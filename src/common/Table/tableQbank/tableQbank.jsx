/* eslint-disable */

import React from "react";
import MyButton from "../../Button/Button";
import image from "../../../assets/icons/MyTable/trash.svg";
import { Link, useNavigate } from "react-router-dom";
import './tableQbank.css'
function TableQbank(
    
    {
  header,
  body,
  icons,
  other,
  handelDelete,
  handelEdit,
  handelEye,
  handelNot,
  delet,
  delteModalName,
  editButtonName,
  handel,
  Deletehandel
}) {
  const { trash, edit, eye } = icons || {};
  const { toggle, butt, imag, checkbox } = other || {};
  let Navigate = useNavigate()
  const forword =()=>{
    Navigate('/')
    
  }
 

  return (
    <table className="rounded-table-plan">
      {/* <DeleteAnItem /> */}
      {/* <AddOrEditModal /> */}

      <thead>
        <tr>
          <th>#</th>
          {Object.values(header).map((element, index) => (
            <th key={index}>{element}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {/* {Object.values(row).map((value, cellIndex) => (
              <td key={`${rowIndex}-${cellIndex}`}>{value}</td>
            ))} */}
            <td>
             {`${rowIndex+1}`}
            </td>
            <td>
             { row.name}
            </td>
            <td>
              {row.semster[1]}
            </td>
            <td>
              {row.group.name}
            </td>
            <td>
              {row.subject.name
              }
            </td>
            <td>
                {row.unit.name}
            </td>
            <td>
                {row.lesson.name}
            </td>
            {toggle && (
              <td>
              </td>
            )}
            {icons && (
              <td>
                {trash && (
                  <button
                  onClick={()=>Deletehandel(row)}
                    type="button"
                    className=" trash"
                    data-bs-toggle="modal"
                    data-bs-target={delteModalName}
                    data-whatever="@mdo"
                  >
                    <img src={image} className="trash" alt="" />
                  </button>
                  // <button className="trash">

                  // </button>
                )}
                {edit && (
                  <button
                  onClick={()=>handel(row)}
                  type="button"
                  
                 

                    className="square fa-regular fa-pen-to-square"
                  ></button>
                )}
                {eye && (
                  <MyButton
                    onClick={handelEye}
                    className="eye fa-regular fa-eye"
                  />
                )}
              </td>
            )}
            {butt && (
              <td>
                <MyButton
                  onClick={handelNot}
                  className={"buttonOfTable"}
                  content={"أرسل ملحوظه"}
                />
              </td>
            )}
            {imag && (
              <td>
                <Link style={{ textDecoration: "underline", color: "#FE4F60" }}>
                  تحميل
                </Link>
              </td>
            )}
            {checkbox && (
              <td>
                <input type="checkbox" />
              </td>
            )}
            {checkbox && (
              <td>
                <input type="checkbox" />
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableQbank;
