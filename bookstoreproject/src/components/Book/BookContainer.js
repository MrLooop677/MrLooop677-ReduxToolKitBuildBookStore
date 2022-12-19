import React, { Fragment, useEffect, useState } from 'react';
import BookInfo from './BookInfo';
import BooksList from './BooksList';
import './book.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../store/bookSlice';

const PostContainer = () => {
  const {books}=useSelector(state=>state.Books)
  const [readBook,setReadBook]=useState({})
  const getBook=(id)=>{
    const selectBook=books.find(book => book.id === id)
    setReadBook({...readBook,...selectBook});
}
  const dispatch=useDispatch()
  useEffect(()=>{
    const v= dispatch(fetchData())
    console.log("return Data",v);
  },[dispatch])
  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
          <BooksList getBook={getBook}/>
        </div>
        <div className='col side-line'>
          <BookInfo readBook={readBook}/>
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
