import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { Outlet, useNavigate } from 'react-router-dom'

const ProtectedRoute = () => {
    const navigate = useNavigate()
    const token = useSelector((state:RootState)=>state.token)
    useEffect(() => { if(!token) navigate("/login") });
    return (
        <>
        <Outlet/>
        </>
    )
}

export default ProtectedRoute
