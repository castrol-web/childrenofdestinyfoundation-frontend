import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { URL } from '../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from '@emotion/react';
import { FadeLoader } from 'react-spinners';
import { Link} from 'react-router-dom';

function Kids() {
  const [kids, setkids] = useState([]);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    async function getKids() {
      try {
        setLoading(true);
        const response = await axios.get(`${URL}/api/users/cod-kids`);
        setkids(response.data.kidArray);
      } catch (error) {
        toast.error(error.response.data.message);
        console.error("Error:", error);
        if (error.response && error.response.status === 404) {
          toast.error(error.response.data.message);
        } else if (error.response && error.response.status === 500) {
          toast.error('Server error. Please try again later.');
        } else {
          toast.error('An unexpected error occurred. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    }
    getKids()
  }, []);

  if (loading) {
    return <div className="text-center mt-96">
      <FadeLoader color={'#36d7b7'} css={override} size={100} className='mx-auto' />
      <p>loading please wait...</p>
    </div>
  }


  return (
    <div className='container mt-24 items-center justify-center text-center mx-auto mb-20'>
      <div className='grid-cols-1 sm:grid md:grid-cols-5 mb-10  gap-10'>
        {kids.map((value) => {
          return <div key={value.kid._id} className="mt-6 flex flex-col rounded-lg  text-surface shadow-secondary-1 sm:shrink-0 sm:grow sm:basis-0">
              <img className="rounded-lg"
                src={value.photo}
                alt="layers" />
              <div>
                <h5 className="mb-2 text-red-200 font-medium leading-tight">{value.kid.firstname}  {value.kid.lastname}</h5>
                <div className='grid'>
                  <small className='text-gray-300'>Birthday:  {value.kid.DOB}</small>
                  <small className='text-gray-300'>Age:  {value.kid.Age} yrs</small>
                  <small className='text-gray-300'>Siblings:  {value.kid.Siblings}</small>
                  <small className='text-gray-300'>Ambition:  {value.kid.Ambition}</small>
                  <small className='text-gray-300'>Education Level:  {value.kid.EducationLevel}</small>
                  <small className='text-gray-300'>Gender:  {value.kid.gender}</small>
                  <small className={value.kid.Sponsored ? 'text-green-100' : "text-red-700"}>{value.kid.Sponsored ? 'Sponsored' : 'needs a sponsor'}</small>
                </div>
              </div>
              <Link  to={`/kid-details/${value.kid._id}`}
                className="mt-5 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >Explore {value.kid.firstname}</Link>
            </div>
          
        })}

      </div>
      <ToastContainer />
    </div>
  )
}

// CSS override for the loading spinner
const override = css`
  display: block;
  margin: 0 auto;
`;
export default Kids