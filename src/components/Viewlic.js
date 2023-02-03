import React from 'react'

export default function Viewlic() {
  return (
    <div>
      <div className='container mt-5 pt-5'>
        <h1 className='head'><u>License</u></h1>
      </div>
      <div className="container mt-3 pt-3">
            <table>
            <tr>
                    <th>Name:</th>
                </tr>
                <tr>
                    <td><b>Address:</b></td>
                </tr>
                <tr>
                    <td><b>License No:</b></td>
                </tr>
                <tr>
                    <td><b>Vehicle class:</b></td>
                </tr>
                <tr>
                    <td><b>Date of issue:</b></td>
                </tr>
                <tr>
                    <td><b>Date of expiry:</b></td>
                </tr>
            </table>
        </div>
        <div className="container" style={{textAlign: "center"}}>
              <button className=" btn btn-info" style={{marginTop: "5%"}} onclick="window.print()"><i className="fa-solid fa-print"></i> Print</button>
          </div>

    </div>
  )
}
