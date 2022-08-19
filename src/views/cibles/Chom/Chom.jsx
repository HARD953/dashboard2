import React,{useState} from 'react'
import {
  CCol,
  CRow,
  CContainer,
  CSpinner,

} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import {cilFlower} from '@coreui/icons'

import { InputText } from 'primereact/inputtext';


import './Chom.css'
import DataTableCrudChom from '../../../components/Tables/Tables-crud-cible/DataTableCrudChom';


const Chom = () => {

  
  const [value3, setValue3] = useState('');


  return (

    <CContainer>
      <div  className="d-flex" style={{justifyContent:"space-between"}}>
        <div className="">
          <h2  style={{fontWeight:"bold",color:"blue"}} >
          <CIcon icon={cilFlower} height={30} customClassName="" className="me-3" />
            Cibles
          </h2>
          <div className="mb-4 mx-5" >
            <CSpinner color="primary" size="sm" variant="grow"/>
            Vulnérables - Chômage
          </div>
        </div>
        <div className="">
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText className="input-navbar-search" value={value3} onChange={(e) => setValue3(e.target.value)}placeholder="Rechercher..." />
            </span>
        </div>
      </div>
      <CRow>
      
        <CCol xs={12}>
          <DataTableCrudChom acteursTitle="Chômage" />
        </CCol>
      
      </CRow>
    </CContainer>
  )
}


export default Chom
