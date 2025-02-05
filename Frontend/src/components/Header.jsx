const Header = () => {
    return (
      <div className='ml-48 flex flex-col md:flex-row flex-wrap px-6 md:px-4 rounded-lg'>
        {/* <!--- text left-side -->  */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-8 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
          <p className='text-3xl font-bold lg:text-5xl leading-relaxed md:leading-tight'> AuthenX App </p>
          <div className='flex flex-col md:flex-row items-center gap-3 text-sm font-light'>
            <p>Hadda baro course aad doneysid, xili walba iyo goorkasto adigoo <br />  helaya caawimaad joogto ah.</p>
          </div>
          <a href="#speciality" className='flex items-center gap-2 bg-primary py-3 px-8 text-white rounded-full m-auto md:m-0 hover:scale-105 transition-all  duration-300'>
            See All Course
          </a>
        </div>
        {/* <!--- text right-side -->  */}
        <div className='md:w-1/2 relative'>
          <img className='md:absolute bottom-0 h-auto rounded-lg w-96' src='./landingpage.png' alt="" />
        </div>
      </div>
    )
  }
  
  export default Header
