import React, { useEffect } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import family from "../images/family.jpeg";
import gate from "../images/gate.jpeg";
import house from "../images/house.jpeg";
import kitchen from "../images/kitchen.jpeg";
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(()=>{
    AOS.init()
  });
  return (
    <>
      <div className='mt-24 container items-center justify-center text-center mx-auto'>
        <h1 className='text-3xl text-orange-800'>About Us</h1>
        <div className='px-5  mx-auto' data-aos="fade-in">
          <small className='text-slate-100'>Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Turpis egestas integer eget aliquet
            nibh praesent. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Tortor aliquam nulla facilisi
            cras fermentum odio eu feugiat. Interdum consectetur libero id faucibus nisl tincidunt. Feugiat vivamus at augue
            eget arcu dictum varius duis at. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Pulvinar
            pellentesque habitant morbi tristique. Sapien eget mi proin sed libero enim sed faucibus. Malesuada pellentesque
            elit eget gravida cum. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Imperdiet dui accumsan sit amet
            nulla facilisi morbi tempus iaculis. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Eu volutpat
            odio facilisis mauris sit amet massa vitae tortor. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Sit
            amet mauris commodo quis imperdiet. Facilisis gravida neque convallis a cras semper auctor.
            Viverra nibh cras pulvinar mattis. Tempus imperdiet nulla malesuada pellentesque elit eget.
          </small>
        </div>
        <div className='mt-14 mb-24 mx-5 sm:mb-28'>
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 4 }}>
            <Masonry gutter="20px">
              <img className='rounded-lg' src={family} alt='gallery content'></img>
              <img className='rounded-lg' src={gate} alt='gallery content'></img>
              <img className='rounded-lg' src={house} alt='gallery content'></img>
              <img className='rounded-lg' src={kitchen} alt='gallery content'></img>
            </Masonry>
          </ResponsiveMasonry>
        </div>
        <div className='container items-center justify-center text-center mx-auto'>
          <h1 className='text-3xl text-orange-800'>Our Story</h1>
          <div className='px-5  mx-auto' data-aos="zoom-in">
            <small className='text-slate-100'>Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Turpis egestas integer eget aliquet
              nibh praesent. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Tortor aliquam nulla facilisi
              cras fermentum odio eu feugiat. Interdum consectetur libero id faucibus nisl tincidunt. Feugiat vivamus at augue
              eget arcu dictum varius duis at. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Pulvinar
              pellentesque habitant morbi tristique. Sapien eget mi proin sed libero enim sed faucibus. Malesuada pellentesque
              elit eget gravida cum. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Imperdiet dui accumsan sit amet
              nulla facilisi morbi tempus iaculis. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Eu volutpat
              odio facilisis mauris sit amet massa vitae tortor. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Sit
              amet mauris commodo quis imperdiet. Facilisis gravida neque convallis a cras semper auctor.
              Viverra nibh cras pulvinar mattis. Tempus imperdiet nulla malesuada pellentesque elit eget.
            </small>
          </div>
        </div>
        <div className='mt-14 mx-auto mb-10 items-center justify-center w-2/4 h-1/4'>
          <img src={family} alt='gallery content' className='mx-auto rounded-lg'></img>
        </div>
        <div className='px-5 mx-auto mb-10' data-aos="zoom-out">
          <small className='text-slate-100'>Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Turpis egestas integer eget aliquet
            nibh praesent. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Tortor aliquam nulla facilisi
            cras fermentum odio eu feugiat. Interdum consectetur libero id faucibus nisl tincidunt. Feugiat vivamus at augue
            eget arcu dictum varius duis at. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Pulvinar
            pellentesque habitant morbi tristique. Sapien eget mi proin sed libero enim sed faucibus. Malesuada pellentesque
            elit eget gravida cum. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Imperdiet dui accumsan sit amet
            nulla facilisi morbi tempus iaculis. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Eu volutpat
            odio facilisis mauris sit amet massa vitae tortor. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Sit
            amet mauris commodo quis imperdiet. Facilisis gravida neque convallis a cras semper auctor.
            Viverra nibh cras pulvinar mattis. Tempus imperdiet nulla malesuada pellentesque elit eget.
          </small>
        </div>
        <div className='container items-center text-center justify-center mx-auto bg-cyan-900 mb-24 p-5 rounded-lg'>
          <h1 className='text-3xl text-orange-800'>Our Mission</h1>
          <div className='mx-auto'>
            <small className='text-slate-100'>Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum.
              nibh praesent. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Tortor aliquam nulla facilisi
            </small>
          </div>
          <div className='lg:flex gap-5'>
            <div data-aos="flip-up">
              <h4 className='text-2xl text-red-900'>Our Mission 1</h4>
              <small className='text-gray-50'>Sapien eget mi proin sed libero enim sed faucibus. Malesuada pellentesque
                elit eget gravida cum. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Imperdiet dui accumsan sit amet
                nulla facilisi morbi tempus iaculis. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Eu volutpat
                odio facilisis mauris sit amet massa vitae tortor. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Sit
                amet mauris commodo quis imperdiet. Facilisis gravida neque convallis a cras semper auctor.
                Viverra nibh cras pulvinar mattis. Tempus imperdiet nulla malesuada pellentesque elit eget.</small>
            </div>
            <div  data-aos="flip-up">
              <h4 className='text-2xl text-red-900'>Our Mission 2</h4>
              <small className='text-gray-50'>Sapien eget mi proin sed libero enim sed faucibus. Malesuada pellentesque
                elit eget gravida cum. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Imperdiet dui accumsan sit amet
                nulla facilisi morbi tempus iaculis. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Eu volutpat
                odio facilisis mauris sit amet massa vitae tortor. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Sit
                amet mauris commodo quis imperdiet. Facilisis gravida neque convallis a cras semper auctor.
                Viverra nibh cras pulvinar mattis. Tempus imperdiet nulla malesuada pellentesque elit eget.</small>
            </div>
            <div  data-aos="flip-up">
              <h4 className='text-2xl text-red-900'>Our Mission 3</h4>
              <small className='text-gray-50'>Sapien eget mi proin sed libero enim sed faucibus. Malesuada pellentesque
                elit eget gravida cum. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Imperdiet dui accumsan sit amet
                nulla facilisi morbi tempus iaculis. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Eu volutpat
                odio facilisis mauris sit amet massa vitae tortor. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Sit
                amet mauris commodo quis imperdiet. Facilisis gravida neque convallis a cras semper auctor.
                Viverra nibh cras pulvinar mattis. Tempus imperdiet nulla malesuada pellentesque elit eget.</small>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default About