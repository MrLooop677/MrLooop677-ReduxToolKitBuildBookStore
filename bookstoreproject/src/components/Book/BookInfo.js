import React, { Fragment } from 'react';

const BookInfo = ({readBook}) => {
  return (
    <Fragment>
      <h2>Book Details</h2>
      {Object.values(readBook).length?  <div>
        <p className='fw-bold'>Title:{readBook.title}</p>
        <p className='fw-light'>Description:{readBook.desc}</p>
        <p className='fst-italic'>Price:{readBook.price}</p>
      </div>:
      <div className='alert alert-secondary' role='alert'>
      There is no post selected yet. Please select!
    </div>
      }
     
     
    </Fragment>
  );
};

export default BookInfo;
