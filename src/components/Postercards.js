import React from 'react'
import { Imag_URL } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addId } from '../utils/idSlice';
// import { Link } from 'react-router-dom';


const Postercards = ({img, key}) => {

  const dispatch= useDispatch();

  function onClickHandler(){
    return (
     dispatch(addId(key))
    )
  }

  return (
    // <Link
    // to={`/videoplay/${key}`}
    //           key={key}
    // >
    <div className='z-10 w-44 mx-2 my-4 bg-cover hover:w-48 hover:mx-0 hover:my-0 cursor-pointer'>
        <img className='rounded-lg' src={Imag_URL + img} alt="" key={key} 
        onClick={onClickHandler}
        />
    </div>
    // </Link>
  )
}

export default Postercards
