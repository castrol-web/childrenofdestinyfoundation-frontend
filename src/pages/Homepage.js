import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./homepage.css";
import { FaPersonPraying } from "react-icons/fa6";
import { FaPersonDigging } from "react-icons/fa6";
import { GiLoveMystery } from "react-icons/gi";
import layers from "../images/layers.jpeg";
import group from "../images/group.jpeg";
import broilers from "../images/broilers.jpeg";
import pigs from "../images/pigs.jpeg";
import farming from "../images/farming.jpeg";
import rabbits from "../images/rabbits.jpeg";
import Founders from '../components/Founders';
import Contact from './Contact';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { css } from '@emotion/react';
import { FadeLoader } from 'react-spinners';
import axios from 'axios';
import { URL } from '../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';



function Homepage() {
  const [loading, setIsloading] = useState(false);
  const [kid, setKid] = useState([]);
  const navigate = useNavigate();

  //aos animation
  useEffect(()=>{
    AOS.init()
  },[])

  function viewKids() {
    navigate("/kids")
  }

  function navigateLayers() {
    navigate("/layers-project")
  }


  function navigateProject() {
    navigate("/projects");
  }

  function navigateBroilers() {
    navigate("/broilers-project")
  }

  function navigatePigs() {
    navigate("/pigs-project");
  }
  //getting random kids
  async function getRandomKids() {
    try {
      setIsloading(true);
      const response = await axios.get(`${URL}/api/users/random-kids`);
      if (response.status === 201) {
        setKid(response.data.kidsArray);
      }

    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.message);
      }
      else if (error.response && error.response.status === 500) {
        toast.error('Server error. Please try again later.');
      } else {
        toast.error('An unexpected error occurred. Please try again later!');
      }
    }finally{
      setIsloading(false);
    }
  }
  useEffect(() => {
    getRandomKids()
  }, []);

  if (loading) {
    return <div className="text-center mt-96">
      <FadeLoader color={'#36d7b7'} css={override} size={100} className='mx-auto' />
      <p className='text-slate-50'>loading please wait...</p>
    </div>
  }
  return (
    <>
      <div><header className="relative px-6 pt-10 lg:px-8" style={{ backgroundImage: `url(${group})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="text-white relative rounded-full px-3 py-1 text-sm leading-6  ring-1 ring-white-900/10 hover:ring-green-100/20">
              Amazing stories of our foundation.{' '}
              <a href="/readmore" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold tracking-tight text-red-600 sm:text-6xl">
              <h1>Welcome To Children Of Destiny Foundation</h1>
            </div>
            <p className="mt-6 text-lg leading-8 lg:text-slate-900 text-red-200">
              A home where heroes are mould.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                DONATE
              </button>
              <a href="/learnmore" className="text-sm font-semibold leading-6 text-pink-950">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#e5cfd8] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </header>
        <div className="container mx-auto py-16 mb-11">
          <h2 className="text-red-400 text-3xl font-semibold text-center mb-8">Children Of Destiny Cultures</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* culture 1 */}
            <div className="p-6 rounded-lg shadow-md mx-3 cultures" data-aos="fade-up">
              <h3 className="text-stone-50 flex gap-4 text-xl font-semibold mb-4">Praying <FaPersonPraying className='animate-pulse' /></h3>
              <p className='text-slate-600'>God has been our pillar through all hardships that we have been through,We therefore take time during the morning hours to pray and in the evening meditations of the scriptures</p>
            </div>
            {/* culture 2 */}
            <div className="p-6 border-slate-800 rounded-lg shadow-md mx-3 cultures" data-aos='fade-right'>
              <h3 className="text-stone-50 flex gap-4 text-xl font-semibold mb-4">Working/Chores <FaPersonDigging className='animate-pulse' /></h3>
              <p className='text-slate-600'>We believe in the saying "If you don't work, then don't eat".Each one of us takes part in maintaining the compound cleaness,feeding of the animals and watering the plants that can either be done during the morning hours or evening sometimes both depending on the weather</p>
            </div>
            {/* culture 3 */}
            <div className="p-6 border-slate-800 rounded-lg shadow-md mx-3 cultures" data-aos='zoom-in'>
              <h3 className="text-stone-50 flex gap-4 text-xl font-semibold mb-4">Love <GiLoveMystery className='animate-pulse' /></h3>
              <p className='text-slate-600'>Love has been another pillar in this home especially during holidays we take some sitting and sharing School progress and achievements one has had during the period.Those that are down are encouraged and couched while those shining are praized for good work they are putting.</p>
            </div>
          </div>

          {/* our children section */}
          <div className='container mt-10 pb-10' data-aos="zoom-out">
            <h2 className="text-red-400 text-3xl font-semibold text-center mb-8">Our Kids</h2>
            <div className=" mx-auto rounded-lg shadow-lg items-center justify-center p-5 md:w-3/4">
              {
                kid.map((value) => {
                  return <div key={value.kid._id} className='flex justify-between mb-8'>
                    {/* image and names */}
                    <div className='flex gap-2 items-center sm:gap-4'>
                      <img className="rounded-full h-10" alt="kids" src={value.photo}></img>
                      <div className='grid'>
                        <p className='text-slate-50'>{value.kid.firstname} {value.kid.lastname}</p>
                        <p className='text-slate-50'>@{value.kid.firstname} {value.kid.lastname}</p>
                      </div>
                    </div>
                    <div className='mx-5'>
                      <Link to={`/kid-details/${value.kid._id}`} className="rounded-md bg-slate-500 px-3.5 py-2.5 text-sm font-semibold text-slate-50 shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">View</Link>
                    </div>
                  </div>
                })
              }

              <div className='mx-auto items-center justify-center'>
                <button onClick={viewKids} className='w-full mt-5 text-slate-50 rounded-md bg-slate-500 px-20 py-2.5 text-sm font-semibold shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mx-auto sm:py-2 '>View All</button>
              </div>
            </div>
          </div>
        </div>

        {/* projects showcasing section */}
        <div className='container items-center justify-center mx-auto mt-20'>
          <div className='text-center lg:w-2/4 items-center mx-auto px-5' data-aos="fade-in">
            <h1 className="text-red-400 text-3xl font-semibold text-center mb-8">Our Projects</h1>
            <small className='decoration-double text-orange-200'>we invite you to join us in making a difference. While some of our projects are still
              in their infancy and others may not yet meet our desired scale, every small step forward is a
              testament to our dedication and resilience. Your support, no matter how modest, holds the power
              to transform these aspirations into realities. Whether it's providing resources for our budding farming
              initiatives or aiding in the launch of our upcoming rabbit project, your generosity will
              be instrumental in nurturing growth and progress within our orphanage community.</small>
          </div>
          <div className='grid-cols-1 sm:grid md:grid-cols-3 mb-10  gap-10'>
            <div className="mt-6 flex flex-col rounded-lg  text-surface shadow-secondary-1 sm:shrink-0 sm:grow sm:basis-0" data-aos="fade-down-right">
              <img className="rounded-t-lg"
                src={layers}
                alt="layers" />
              <div>
                <h5 className="mb-2 text-xl text-red-200 font-medium leading-tight ml-3">LAYERS</h5>
                <div>
                  <p className='text-gray-300 px-5'>
                    <small>"The layers chickens play a vital role in our orphanage by providing us
                      with a sustainable source of food and income. These chickens not only lay eggs that supply
                      us with essential nutrients like proteins but also generate income through surplus egg sales.
                      Additionally, when needed, they provide us with meat, reducing our expenses by eliminating the need
                      to purchase eggs and meat from outside sources. This self-sufficiency empowers us to better allocate
                      resources for the well-being of our children and the orphanage as a whole."</small>
                  </p>
                </div>
              </div>
              <div className='mx-auto'>
                <button
                  onClick={navigateLayers}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >Explore More</button>
              </div>
            </div>
            {/* broilers project */}
            <div className="mt-6 flex flex-col rounded-lg  text-surface shadow-secondary-1 sm:shrink-0 sm:grow sm:basis-0" data-aos="fade-in">
              <img className="rounded-t-lg"
                src={broilers}
                alt="layers" />
              <div>
                <h5 className="mb-2 text-xl text-red-200 font-medium leading-tight ml-3">BROILERS</h5>
                <div>
                  <p className='text-gray-300 px-5'>
                    <small>"Raised primarily for their meat, broilers provide us with a ready source of high-quality protein. By raising
                      broilers, we not only fulfill our dietary needs but also have the opportunity to sell surplus meat to generate income.
                      This income helps support various aspects of our orphanage, from purchasing supplies to funding educational programs
                      for our children. Additionally, raising broilers on-site reduces our reliance on external
                      suppliers, thereby decreasing expenses and promoting financial independence."</small>
                  </p>
                </div>
              </div>
              <div className='mx-auto'>
                <button
                  onClick={navigateBroilers}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >Explore More</button>
              </div>
            </div>
            {/* pigs project  */}
            <div className="mt-6 flex flex-col rounded-lg  text-surface shadow-secondary-1 sm:shrink-0 sm:grow sm:basis-0" data-aos="zoom-in">
              <img className="rounded-t-lg"
                src={pigs}
                alt="layers" />
              <div>
                <h5 className="mb-2 text-xl text-red-200 font-medium leading-tight ml-3">PIGS</h5>
                <div>
                  <p className='text-gray-300 px-5'>
                    <small>"Our pigs play a crucial role in our orphanage's financial sustainability. Raised
                      primarily for sale, they provide us with a valuable source of income that helps boost our financial
                      resources. Selling pigs allows us to generate revenue that can be used to cover various expenses, including
                      food, healthcare, and educational needs for the children in our care. By responsibly raising and selling pigs,
                      we not only promote self-sufficiency but also ensure that we can continue providing a safe
                      and nurturing environment for our children."</small>
                  </p>
                </div>
              </div>
              <div className='mx-auto'>
                <button
                  onClick={navigatePigs}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >Explore More</button>
              </div>
            </div>

            {/* farming project */}
            <div className="mt-6 flex flex-col rounded-lg  text-surface shadow-secondary-1 sm:shrink-0 sm:grow sm:basis-0" data-aos="flip-up">
              <img className="rounded-t-lg"
                src={farming}
                alt="layers" />
              <div>
                <h5 className="mb-2 text-xl text-red-200 font-medium leading-tight ml-3">FARMING</h5>
                <div>
                  <p className='text-gray-300 px-5'>
                    <small>"Our farming project is a testament to our commitment to self-sustainability,
                      even with limited space. Utilizing the available land around our compound, we cultivate a
                      variety of vegetables that not only provide nutritious food for our children but also promote a
                      healthy lifestyle. By growing our own vegetables, we reduce our dependence on external sources and ensure
                      a steady supply of fresh produce year-round. This initiative not only fulfills our dietary needs but also
                      teaches valuable skills to our children, fostering a sense of responsibility and self-reliance."</small>
                  </p>
                </div>
              </div>
              <div className='mx-auto'>
                <button
                  onClick={navigateProject}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >Explore More</button>
              </div>
            </div>

            {/* rabbits project */}
            <div className="mt-6 flex flex-col rounded-lg  text-surface shadow-secondary-1 sm:shrink-0 sm:grow sm:basis-0" data-aos="zoom-in">
              <img className="rounded-t-lg"
                src={rabbits}
                alt="layers" />
              <div>
                <h5 className="mb-2 text-xl text-red-200 font-medium leading-tight ml-3">RABBITS</h5>
                <div>
                  <p className='text-gray-300 px-5'>
                    <small>"Our upcoming rabbit project is an exciting venture that holds great promise
                      for our orphanage's self-sustainability. One unique aspect of this project is the harvesting
                      of rabbit urine, which possesses valuable medicinal properties. This urine can be utilized as a natural
                      insecticide to protect our vegetable crops from pests, thus ensuring a bountiful harvest. Additionally, we plan
                      to capitalize on the sale of rabbit urine
                      to interested parties, further bolstering our financial resources.Moreover,will serve as a
                      valuable source of income and sustenance for our orphanage."</small>
                  </p>
                </div>
              </div>
              <div className='mx-auto'>
                <button
                  disabled
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >Explore More</button>
              </div>
            </div>
          </div>
        </div>
        {/* Our founders sections */}
        <div className='container mt-10 items-center justify-center mx-auto'>
          <Founders />
        </div>

        <div className='container mb-20 items-center justify-center mx-auto'>
          <div className='items-center justify-center mx-auto text-center'>
            <div className='text-red-400 text-2xl  flex mx-auto justify-center items-center'>
              <h1>You can Contact Us through our Social media or write us down below</h1>
              <FaArrowDown className="animate-bounce" />
            </div>
            <div className='flex items-center justify-center mx-auto mt-5 gap-24'>
              <span className='facebook_icon'><FaFacebookF /></span>
              <span className='twitter_icon'><FaTwitter /></span>
              <span className='text-green-500'><FaWhatsapp /></span>
            </div>
          </div>
          <Contact />
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

// CSS override for the loading spinner
const override = css`
  display: block;
  margin: 0 auto;
`;

export default Homepage