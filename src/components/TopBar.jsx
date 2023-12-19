import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const TopBar = () => {
    const {theme} = useSelector((state)=> state.theme);
    const {user}= useSelector((state)=>state.user);

    const dispatch = useDispatch();

  return (
    <div className='bg-primary topbar'>

    </div>
  )
}

export default TopBar