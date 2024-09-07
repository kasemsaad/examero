/* eslint-disable */

import MyButton from "../Button/Button";
import "./table.css";
import image from "../../assets/icons/MyTable/trash.svg";
import ToggledButton from "../../dashboard/components/ToggledButton/ToggledButton";
import { Link } from "react-router-dom";
import { useState } from "react";
function MyTable({
  header,
  body,
  icons,
  other,
  deleteModalName,
  editButtonName,
  handelShow,
  showItem,
  togellValue,
  handelEdit,
  handelDeleteItem,
  classIds,
  handelMessage,
  sendMessage,
  flag,
}) {
  const { trash, edit, eye } = icons || {};
  const { toggle, butt, imag, checkbox } = other || {};

  return (
    <>
      {body && body.length !== 0 ? (
        <table className="my-rounded-table-ta">
          <thead>
            <tr>
              <th>#</th>
              {body &&
                Object.values(header).map((element, index) => (
                  <th key={index}>{element}</th>
                ))}
            </tr>
          </thead>

          <tbody>
            {body &&
              body.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td>{`${rowIndex + 1}`}</td>
                  {Object.entries(row)
                    .filter(([key]) => key !== "id")
                    .map(([key, value], cellIndex) => (
                      <td key={`${rowIndex}-${cellIndex}`}>{value}</td>
                    ))}

                  {toggle && togellValue && (
                    <td>
                      <ToggledButton
                        flag={flag}
                        togel={togellValue[rowIndex].status}
                      />
                    </td>
                  )}
                  {icons && (
                    <td>
                      {trash && (
                        <button
                          type="button"
                          className=" trashT-but"
                          data-bs-toggle="modal"
                          data-bs-target={deleteModalName}
                          onClick={() => {
                            handelDeleteItem(row.id);
                          }}
                        >
                          <img src={image} className="trashT" alt="" />
                        </button>
                        // <button className="trash">

                        // </button>
                      )}
                      {edit && (
                        <button
                          type="button"
                          onClick={() => {
                            handelEdit(row);
                          }}
                          data-bs-toggle="modal"
                          data-bs-target={editButtonName}
                          className="squareT fa-regular fa-pen-to-square"
                        ></button>
                      )}

                      {eye && (
                        <MyButton
                          databstoggle="modal"
                          databstarget={showItem}
                          onClick={() => {
                            handelShow(row);
                          }}
                          className="eyeT fa-regular fa-eye"
                        />
                      )}
                    </td>
                  )}
                  {butt && (
                    <td>
                      <MyButton
                        onClick={() => {
                          handelMessage(row.id);
                        }}
                        databstoggle="modal"
                        databstarget={sendMessage}
                        className={"buttonOfTable"}
                        content={"أرسل ملحوظه"}
                      />
                    </td>
                  )}
                  {imag && (
                    <td>
                      <Link
                        style={{
                          textDecoration: "underline",
                          color: "#FE4F60",
                        }}
                      >
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
      ) : (
        <div style={{ fontSize: "24px", textAlign: "center" }}>
          لايوجد بيانات للعرض
        </div>
      )}
    </>
  );
}

export default MyTable;
