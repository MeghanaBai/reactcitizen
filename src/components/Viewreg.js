import React from 'react'
import { Link } from 'react-router-dom'
export default function Viewreg() {
  return (
    <div>
      <div className='container mt-5 pt-5'>
        <h1 className='head'><u>Vehicle Registration</u></h1>
      </div>
      <div className=" container mt-3 table-responsible">
          <table className="info">
              <tr className='td1'>
                  <th>Name</th>
                  <th>Regn.Number</th>
                  <th>Date of Regn</th>
                  <th>Form</th>
              </tr>
              <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><Link to='/Viewdetailsreg'><u>view details</u></Link></td>
                  
              </tr>
              <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><Link to='/Viewdetailsreg'><u>view details</u></Link></td>
              </tr>
              <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><Link to='/Viewdetailsreg'><u>view details</u></Link></td>
              </tr>
          </table>
      </div>
    </div>
  )
}
