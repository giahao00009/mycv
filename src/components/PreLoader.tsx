
export default function PreLoader() {
  return (
    <div className='fixed w-screen h-screen bg-[#0f0f0f] left-0 top-0 flex flex-col items-center justify-center transition-all delay-[400ms] z-[2000]'>
          <div className='flex mb-[48px]'>
              <div className="w-[20px] h-[20px] rounded-full my-0 mx-[5px] bg-[#ef476f] animate-bounce"></div>
              <div className="w-[20px] h-[20px] rounded-full my-0 mx-[5px] bg-[#06d6a0] animate-bounce" style={{animationDelay: "200ms"}}></div>
              <div className="w-[20px] h-[20px] rounded-full my-0 mx-[5px] bg-[#ffd166] animate-bounce" style={{animationDelay: "400ms"}}></div>
          </div>
          <div></div>
    </div>
  )
}
