import React from 'react'

const Section = () => {
    return (
        <section className="blog text-gray-700 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 font-serif"> 
            We want you to show you the real Cancún
            </h2>
            <p className="w-full leading-relaxed text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat metus, scelerisque ut elit lobortis, finibus gravida lectus. Pellentesque accumsan id eros ut vulputate. Curabitur justo sem, condimentum eu egestas ac, sollicitudin quis urna. Sed semper accumsan ipsum vitae laoreet. Phasellus dui ante, venenatis ac elit vel, sodales dapibus ligula. Sed a purus hendrerit, facilisis mauris nec, faucibus felis. Nullam sollicitudin vehicula eros et dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat metus, scelerisque ut elit lobortis, finibus gravida lectus. Pellentesque accumsan id eros ut vulputate. Curabitur justo sem, condimentum eu egestas ac, sollicitudin quis urna. Sed semper accumsan ipsum vitae laoreet. Phasellus dui ante, venenatis ac elit vel, sodales dapibus ligula. Sed a purus hendrerit, facilisis mauris nec, faucibus felis. Nullam sollicitudin vehicula eros et dignissim.        </p>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
              <div className="bg-gray-300 h-56 w-full b1 rounded-lg shadow-md bg-cover bg-center  " >

  

              </div>
  
              <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                
                <div className="header-content inline-flex ">
                  <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
                    <div className="h-2 w-2 rounded-full m-1 bg-purple-500 " ></div>
                  </div>
                  <div className="category-title flex-1 text-sm"> NEWS</div>
                </div>
                <div className="title-post font-medium">Mon titre</div>
  
                <div className="summary-post text-base text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis vel suscipit ex dolore possimus iure. 
                  <button className="bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm "><span className="">Read more</span></button>
                </div>
               
              </div>
            </div>
  
            <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
              <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" ></div>
  
              <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                
                <div className="header-content inline-flex ">
                  <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-yellow-100">
                    <div className="h-2 w-2 rounded-full m-1 bg-yellow-500 " ></div>
                  </div>
                  <div className="category-title flex-1 text-sm"> JS</div>
                </div>
                <div className="title-post font-medium">Mon titre</div>
  
                <div className="summary-post text-base text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis vel suscipit ex dolore possimus iure. 
                  <button className="bg-blue-100 text-blue-500 px-2 mt-4 block rounded p-2 text-sm"><span className="">Read more</span></button>
                </div>
               
              </div>
            </div>
  
            <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
              <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" ></div>
  
              <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                
                <div className="header-content inline-flex ">
                  <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-green-100">
                    <div className="h-2 w-2 rounded-full m-1 bg-green-500 " ></div>
                  </div>
                  <div className="category-title flex-1 text-sm"> Vue</div>
                </div>
                <div className="title-post font-medium">Mon titre</div>
  
                <div className="summary-post text-base text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis vel suscipit ex dolore possimus iure. 
                  <button className="bg-blue-100 text-blue-500 px-2 mt-4 block rounded p-2 text-sm"><span className="">Read more</span></button>
                </div>
               
              </div>
            </div>
           
          </div>
        </div>
      </section>
    )
}

export default Section
