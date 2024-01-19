import { Container } from '@mui/material'
import { Navbar } from './components/Navbar'
import { Outlet } from 'react-router-dom'

const Root = () => {
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
