import { Container } from '@mui/material'
import { Navbar } from './components/Navbar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from './store'

const Root = () => {
  const token = useSelector((state:RootState)=>state.token)
  console.log(token)
  return (
    <>
        <Navbar/>
        <Container style={{ marginTop: '64px' }}>
            <Outlet/>
        </Container>
    </>
  )
}

export default Root
