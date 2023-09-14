export default function Players() {
  return (
    <div className="relative overflow-hidden  ">
      <h6 className="text-[5.625rem] padding-top margin-bottom padding-left">
        PLAYERS
      </h6>
      <div className="grid grid-cols-2 pt-[2.125rem] pb-[4.3rem] padding-left  ">
        <div>
          <div className="flex mb-5">
            <div className="flex flex-col justify-betweens">
              <div className="text-lg">01</div>
              <hr className="purple" />
            </div>
            <h6 className="text-4xl ml-2">CONNECTION</h6>
          </div>
          <p>
            Connect with talented athlete directly, you can watch their skills
            through video showreels directly from Surface 1.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 bg-[#F5F4F9] pt-[3.25rem] pb-[6.375rem] padding-left  ">
        <div>
          <div className="flex mb-5">
            <div className="flex flex-col justify-betweens">
              <div className="text-lg">02</div>
              <hr className="purple" />
            </div>
            <h6 className="text-4xl ml-2">COLLABORATION</h6>
          </div>
          <p>
            Work with recruiter to increase your chances of finding talented
            athlete.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 bg-[#090C35] py-[5.625rem] padding-left">
        <div>
          <div className="flex mb-5">
            <div className="flex flex-col justify-betweens">
              <div className="text-lg text-[#8F6BE8]">03</div>
              <hr className="white" />
            </div>
            <h6 className="text-4xl ml-2">GROWTH</h6>
          </div>
          <p className="text-white">
            Save your time, recruit proper athlets for your team.
          </p>
        </div>
      </div>
      <img
        src="/basketball.png"
        className="z-[100] absolute right-0 top-0 image-basketballer"
        width={991}
        height={815}
        alt="image-basketballer"
      />
    </div>
  );
}
