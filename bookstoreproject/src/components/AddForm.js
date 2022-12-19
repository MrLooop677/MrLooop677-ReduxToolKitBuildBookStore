import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { insertBook } from '../store/bookSlice';

const Addform = () => {
  const title =useRef("")
  const price =useRef("")
  const desc =useRef("")
  const dispatch=useDispatch()
  const {islogIn}=useSelector(state=>state.auth)
  const postHundler=(e)=>{
    e.preventDefault();
    dispatch(insertBook({
      title:title.current.value,
      price:price.current.value,
      desc:desc.current.value
    }))
    title.current.value=null
      price.current.value=null
      desc.current.value=null
  }
  return (
    <div className='row'>
      <div className='col-6 offset-3 mt-3'>
        <h2>Insert Book</h2>
        <form onSubmit={postHundler}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input type='text' className='form-control' id='title' required  ref={title}/>
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input type='number' className='form-control' id='price' required ref={price}/>
          </div>
          <div className='form-group'>
            <label htmlFor='Description'>Description</label>
            <textarea
              className='form-control'
              id='Description'
              rows='3'
              required
              ref={desc}
            ></textarea>
          </div>
          <button type='submit' className='btn btn-primary' disabled={!islogIn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;
