import React from 'react'
import { Imag_URL } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addId } from '../utils/idSlice';
import { useNavigate } from 'react-router-dom';


const Postercards = (props) => {
  const dispatch= useDispatch();
  const navigate=useNavigate();
  const  onClickHandler = ()=>{
    
     dispatch(addId(props.id))
     navigate("/videoplay")
  }
  

  return (
    <div className='z-10 w-36 md:w-44 mx-2 my-4 bg-cover hover:w-40 md:hover:w-48 hover:mx-0 hover:my-0 cursor-pointer'>
        <img className='rounded-lg' src={Imag_URL + props.poster_path
} alt="" key={props.key} 
        onClick={onClickHandler}
        />
    </div>
  )
}

export default Postercards

