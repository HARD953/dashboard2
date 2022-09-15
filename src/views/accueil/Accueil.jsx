import React, { useState } from 'react'
import {
  CCol,
  CRow,
  CContainer,

} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import {cilHome} from '@coreui/icons'

import CardChartCicle from '../../components/home/card-chart-circle/CardChartCicle'
import CardChartLine from '../../components/home/card-chart-line/CardChartLine'
import CardChartBar from '../../components/home/card-chart-bar/CardChartBar'
import { useEffect } from 'react'
import axiosIntance from '../../api/axiosInstance'



const Accueil = () => {

  const [userAdminData,setUserAdminData] = useState([])

  const [menage,setMenage] = useState([])
  const [individuel,setIndividuel] = useState([])

  const userData = 'userDatalanfia';


  //Administrateurs

  useEffect(()=>{
    axiosIntance.get('detailadimn/')
    .then((res)=>{
      setUserAdminData(res.data.data[0])

      
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])


//Vulnérabilités Stat Menage


  useEffect(()=>{
    axiosIntance.get('staticirclem/')
    .then((res)=>{
      setMenage(res.data.menage)

      
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  //Vulnérabilités Stat Individuel


  useEffect(()=>{
    axiosIntance.get('staticirclei/')
    .then((res)=>{
      
      setIndividuel(res.data.individu)

      
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  //Stats


  useEffect(()=>{
    axiosIntance.get('statibarm/')
    .then((res)=>{
      
      console.log(res)

      
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  






  

  return (
    <CContainer >
      <div className="">
        <h2 className="mb-4  " style={{fontWeight:"bold",color:"blue"}} >
        <CIcon icon={cilHome} height={30} customClassName="" className="me-3" />
        Accueil
        </h2>
      </div>
      <CRow>
        
        <CCol  className='mt-3 mt-md-0' md={6}>
          <CardChartCicle libelle ="Individus" individuel={individuel} />
        </CCol>
        
        <CCol className='mt-3 mt-md-0'  md={6}>
          <CardChartCicle libelle="Ménages" menage={menage}/>
        </CCol>
      
      </CRow>
      <CRow className="mt-3">
        <CCol>
          <CardChartLine/>
        </CCol>
      </CRow>

      <CRow className="mt-3">
        <CCol>
          <CardChartBar/>
        </CCol>
      </CRow>

    </CContainer>
  
  )
}

export default Accueil
