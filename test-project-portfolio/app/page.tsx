"use client";
import Head from 'next/head'
import Sidebar from './sidebar';
import Timeline from './timeline';
import  './modes';
import { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
export default function Home() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  
  return (
    <html className='scroll-smooth'>
    <div>
      <Head><title>Hisham</title></Head>
      <div>{ loading ?  <ClipLoader color={"#5f27cd"} background-color = {"#282b30"} loading={loading} size={900}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> : <div className=' -z-20'><Sidebar /></div>  }</div>
  {/* bg-gradient-to-r from-rose-400 to-orange-300 */}
      <main>
        <section className=' pt-5 bg-gradient-to-r from-rose-400 to-orange-300 */ dark:bg-black text-white min-h-screen px-20 ' >
          <nav className='py-5 mb-12 flex justify-between'>
            <h1 className='text-xl'>Hisham</h1>
            <ul className='flex items-center px-2 gap-3'>
              <li className=''><a className='transition-smooth' rel="noopener"  href="#project">Projects</a></li>
              <li className=''><a className='transition-smooth' rel="noopener"  href="#contact">Contact</a></li>
              <li className=''><a className='transition-smooth' rel="noopener"  href="#project">Education</a></li>
              <li className=''><a className='transition-smooth' rel="noopener"  href="#contact">Experience</a></li>

            </ul>
          </nav>
          <div className='text-center grid-flow-rows grid-cols-4 justify-center items-center 2xl:px80 1xl:px0'>
            <h2 className='text-5xl  pt-40 font-medium'>Hisham Haque</h2>
            <h3 className='text-1xl py-2 text-md'>Junior Software Developer</h3>
        <div className='xl:40 2xl:px-80 pb-20'>
              <p className='2xl:px-20 font-small text-align-justify'> I am highly motivated Junior Software Engineer with a passion for coding and a keen interest in software development.
                Through my experience I have gained a solid foundation in computer science and I am equipped with a range of technical skills. </p><br></br><p className='2xl:px-20'>Outside of education, I partake in sports such as volleyball, basketball and boxing in a casual settings , finding them to be a great way to main physical fitness alongside mental clarity while developing soft skills such as communication and leadership.</p>
</div>
            
          </div>

          <div className=''>
            <h3 id="project" className='text-3xl pt-80 pb-10 text-center '>Projects</h3>

          </div>

          <div className='pt-20 lg:px-20 xl:px-25 2xl:px-30 py-5 justify-center h-300 grid gap-4 grid-cols-1 l:grid-flow-cols-2 1xl:grid-cols-4 2xl:grid-cols-4'>
           
            <div className='backdrop grid grid-cols-1 col-span-2 items-center  text-center  shadow-lg h-80  rounded-xl  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-104 hover:bg-indigo-500 duration-300'>
              <div class=" grid grid-cols-1  sm:grid-cols-2">
    <p class="mb-3 text-white dark:text-gray-400 pt-10 2xl:pl-10">Waterfall - Waterfall is a user-friendly book tracking app designed to help avid readers organize and manage their reading journeys. With a simple and intuitive interface, users can easily track the books they have read, are currently reading, or plan to read in the future.</p>

              <div className="invisible md:visible mb-3  rotate-0 md:shrink-0 relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[300px] w-[200px]">
    <div class="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
    <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
    <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
    <div class="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
    <div class="rounded-[2rem] overflow-hidden w-[172px] h-[270px] bg-white dark:bg-gray-800">
       
    </div>
    </div>
</div>
              

            </div>
            <div className='backdrop col-span-2 items-center  text-center  shadow-lg h-80 p-20  rounded-xl  transition ease-in-out delay-150 bg-blue-400 hover:-translate-y-1 hover:scale-104 hover:bg-indigo-500 duration-300'>
              <p> Project 4</p>

            </div>

            <div className='backdrop col-span-2 items-center  text-center  shadow-lg h-80  p-20  rounded-xl  transition ease-in-out delay-150 bg-blue-400 hover:-translate-y-1 hover:scale-104 hover:bg-indigo-500 duration-300 '>
              <p> Project 2</p>

            </div>
            <div className='backdrop col-span-2 items-center  text-center  shadow-lg  h-80   p-20  rounded-xl  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-104 hover:bg-indigo-500 duration-300'>
              <p> Project 3</p>

            </div>


          </div>
          {/* <div className='pl-10'><Timeline/></div> */}
          {/* <div id='contact' className='pt-40' >
            <h3 className='text-3xl  text-center '>Experiences</h3>
            <p className='text-center font-semibold py-5 pb-20'></p>
            



          </div>

          <div id='contact' className='pt-40' >
            <h3 className='text-3xl  text-center '>Education and Certificates</h3>
            <p className='text-center font-semibold py-5 pb-20'></p>



          </div> */}
          <div id='contact' className='pt-40' >
            <h3 className='text-3xl  text-center '>Contact</h3>
            <p className='text-center font-semibold py-5 pb-20'>Please feel free to reach out to me at hishamhaque11@gmail.com</p>



          </div>


        </section>
      </main>
    </div>
    </html>

  )
}
