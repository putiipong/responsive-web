import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function CarouselPlayers() {
  return (
    <Carousel showArrows={false} showStatus={false} autoPlay infiniteLoop className="pl-5 pt-20 bg-[#F5F4F9]">
        <div>
          <div className="flex mb-5">
            <div className="flex flex-col justify-betweens">
              <div className="text-sm">01</div>
              <hr className="purple" />
            </div>
            <h6 className="text-xl ml-2">CONNECTION</h6>
          </div>
          <p className="text-base">
            Connect with talented athlete directly, you can watch their skills
            through video showreels directly from Surface 1.
          </p>
        </div>

        <div>
          <div className="flex mb-5">
            <div className="flex flex-col justify-betweens">
              <div className="text-sm">02</div>
              <hr className="purple" />
            </div>
            <h6 className="text-xl ml-2">COLLABORATION</h6>
          </div>
          <p className="text-base">
            Work with recruiter to increase your chances of finding talented
            athlete.
          </p>
      </div>

        <div>
          <div className="flex mb-5">
            <div className="flex flex-col justify-betweens">
              <div className="text-sm">03</div>
              <hr className="purple" />
            </div>
            <h6 className="text-xl ml-2">GROWTH</h6>
          </div>
          <p className="text-base">
            Save your time, recruit proper athlets for your team.
          </p>
        </div>
    </Carousel>
  );
}
