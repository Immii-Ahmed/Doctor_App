import React from 'react'
import { Card, Navbar, SignupComponent } from '../../Components'

function SignupFeature() {
  return (
    <>
    <Navbar/>
    <Card heading={'KHP SIGNUP'}>
      <SignupComponent/>
    </Card>
    
    </>
  )
}

export default SignupFeature