import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { URL } from '../App';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { IoMdClose } from "react-icons/io";
import { css } from '@emotion/react';
import { FadeLoader } from 'react-spinners';
import "./gallery.css";

function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ img: '', index: 0 });

  //get images function
  async function getImages() {
    try {
      setLoading(true);
      const response = await axios.get(`${URL}/api/users/gallery-pictures`);
      //flatten the array of images url
      const flattenArrayImages = response.data.images.flat();
      setImages(flattenArrayImages);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getImages()
  }, []);

  if (loading) {
    return <div className="text-center mt-96">
      <FadeLoader color={'#36d7b7'} css={override} size={100} className='mx-auto' />
      <p>loading please wait...</p>
    </div>
  }
  //view image
  function viewImage(img, index) {
    setData({ img, index });
  }
  //image action
  function imgAction(event) {
    let index = data.index;
    if (event === "next-img") {
      setData({ img: images[index + 1], index: index + 1 });
    }
    if (event === "previous-img") {
      setData({ img: images[index - 1], index: index - 1 });
    }
    if (!event) {
      setData({ img: "", index: 0 });
    }
  }
  return (
    <>

      {/* showing popup image when a single image is clicked */}
      {data.img &&
        <div className='gallery_div'>
          <IoMdClose className='close__btn text-red-800' onClick={function () { imgAction() }} />
          {/* navigation buttons */}
          <div className='prev_btn mr-2'>
            <button onClick={function () { imgAction('previous-img') }} className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              prev
            </button>
          </div>
          <img src={data.img} alt='popup thumbnail' className='pop_img'></img>
          <div className='navigations'>
            <div className='second'>
              <button onClick={function () { imgAction('previous-img') }} className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                prev
              </button>
            </div>
            <div className='next_tn ml-2'>
              <button onClick={function () { imgAction('next-img') }} className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Next
              </button>
            </div>

          </div>
        </div>
      }

      <div className='mt-10 mx-auto text-center justify-center items-center bg-neutral-950 lg:px-20 px-5 pt-14 mb-10'>
        <h1 className='text-2xl text-red-800'>Our Gallery</h1>
        <small className='text-slate-100'>Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Quam lacus suspendisse faucibus interdum
          posuere lorem ipsum. Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Ipsum faucibus vitae aliquet nec
          ullamcorper sit amet. Sit amet mauris commodo quis imperdiet. Facilisis gravida neque convallis a cras semper auctor.
          Viverra nibh cras pulvinar mattis. Tempus imperdiet nulla malesuada pellentesque elit eget.</small>
      </div>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 3 }}>
        <Masonry gutter="20px" className='px-10'>
          {images.map((image, index) => {
            return <img key={index} src={image} alt='gallery content' className='rounded-lg' onClick={function () { viewImage(image, index) }}></img>
          })}
        </Masonry>
      </ResponsiveMasonry>
    </>
  )
}


// CSS override for the loading spinner
const override = css`
  display: block;
  margin: 0 auto;
`;
export default Gallery;