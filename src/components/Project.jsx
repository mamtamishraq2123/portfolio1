import project2IMG from '../assets/project2.png'
import project3IMG from '../assets/project3.png'
import project1IMG from '../assets/project1.png'
import project4IMG from '../assets/project4.png'


export default function Project() {
  return (
    <>
    <div className='bg-indigo-800 m-20 max-w-full'>
      <div className='grid justify-items-center m-10'>
        <h1 className='text-3xl text-white mt-10'>Project</h1>

      </div>
      <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 p-5 '>
          <div className='sm:max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2x1 hover:animate-pulse'>
            <div className='md:flex'>
           <div className='p-8'>
                  <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                    School Management System
                    </div> 
                    <a href='#'>SubHeading</a>
                    <p className='mt-2 text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, maiores!

                    </p>
           </div>
           <div className='md:shrink-0 p-5'>
             <img src={project2IMG} alt="project1" width={150} height={150} />
           </div>

            </div>

          </div>
          <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2x1 hover:animate-pulse'>
            <div className='md:flex'>
            <div className='md:shrink-0 p-5'>
             <img src={project3IMG} alt="project1" width={150} height={150} />
           </div>
           <div className='p-8'>
                  <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                    School Management System
                    </div> 
                    <a href='#'>SubHeading</a>
                    <p className='mt-2 text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, maiores!

                    </p>
           </div>
         

            </div>

          </div>
         

        </div>
        <hr/>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 p-5'>
          <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2x1 hover:animate-pulse'>
            <div className='md:flex'>
           <div className='p-8'>
                  <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                    Study Management System
                    </div> 
                    <a href='#'>SubHeading</a>
                    <p className='mt-2 text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, maiores!

                    </p>
           </div>
           <div className='md:shrink-0 p-5'>
             <img src={project1IMG} alt="project1" width={150} height={150} />
           </div>

            </div>

          </div>
          <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2x1 hover:animate-pulse'>
            <div className='md:flex'>
            <div className='md:shrink-0 p-5'>
             <img src={project4IMG} alt="project1" width={150} height={150} />
           </div>
           <div className='p-8'>
                  <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                    Collage Management System
                    </div> 
                    <a href='#'>SubHeading</a>
                    <p className='mt-2 text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, maiores!

                    </p>
           </div>
         

            </div>

          </div>
         

        </div>
      </div>

    </div>
    </>
    
  )
}
