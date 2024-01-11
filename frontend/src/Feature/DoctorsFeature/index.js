import React, { useEffect, useState } from 'react'
import { Doctors } from '../../Components'
import axios from 'axios'

const DoctorsFeature = () => {
  // state doctors
  const [doctors,setDoctors] = useState([])

  useEffect(async () => {
    await axios.get('http://localhost:3184/getUsers').then((res) => {
      setDoctors(res.data);
    })
  
  }, [])
  

  return (
    <Doctors doctors={ doctors} />
  )
}

export default DoctorsFeature
