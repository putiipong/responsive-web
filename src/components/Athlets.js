export default function Athlets(){
return    <div className="relative">
<img
  className="z-[100] absolute image-footballer"
  src="/footballer.png"
/>
{/* image-footballer-tablet */}
<img
  className="z-[100] absolute image-footballer-tablet"
  src="/footballer-mobile.png"
  alt="image-footballer-tablet"
/>
<div className="pt-[1.5rem] pb-[3.5rem]">
  <div className="margin-left">
<h6 className="text-[5.625rem]">ATHLETS</h6>
    <div className="flex items-center mb-5">
      <div className="flex flex-col justify-betweens ">
        <div className="text-lg">01</div>
        <hr className="purple" />
      </div>
      <h6 className="text-4xl ml-2">CONNECTION</h6>
    </div>
    <p>
      Connect with coaches directly, you can ping coaches to view
      profile.
    </p>
  </div>
</div>

<div className="bg-[#F5F4F9] py-[3.5rem]">
  <div  className="margin-left">
    <div className="flex mb-5">
      <div className="flex flex-col justify-betweens">
        <div className="text-lg">02</div>
        <hr className="purple" />
      </div>
      <h6 className="text-4xl ml-2">COLLABORATION</h6>
    </div>
    <p>
      Work with other student athletes to increase visability. When you
      share and like other players videos it will increase your
      visability as a player. This is the team work aspect to Surface 1.
    </p>
  </div>
</div>

<div className=" bg-[#5E3DB3] pt-[5rem] pb-[6.125rem]">
  <div className="margin-left" >
    <div className="flex mb-5">
      <div className="flex flex-col justify-betweens">
        <div className="text-lg">03</div>
        <hr className="white" />
      </div>
      <h6 className="text-4xl ml-2">GROWTH</h6>
    </div>
    <p className="text-white">
      Resources and tools for you to get better as a student Athelte.
      Access to training classes, tutor sessions, etc
    </p>
  </div>
</div>
</div>
}