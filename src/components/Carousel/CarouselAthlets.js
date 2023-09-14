import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function CarouselAthlets() {
  return (
    <Carousel showArrows={false} showStatus={false} autoPlay infiniteLoop className="pl-5 pt-20 bg-[#F5F4F9]">
          <div className="flex flex-col h-full">
            <div className="flex items-center mb-5">
              <div className="flex flex-col justify-betweens ">
                <div className="text-sm">01</div>
                <hr className="purple" />
              </div>
              <h6 className="text-xl ml-2">CONNECTION</h6>
            </div>
            <p className="text-base">
              Connect with coaches directly, you can ping coaches to view
              profile.
            </p>
          </div>

          <div className="flex flex-col h-full">
            <div className="flex mb-5">
              <div className="flex flex-col justify-betweens">
                <div className="text-sm">02</div>
                <hr className="purple" />
              </div>
              <h6 className="text-xl ml-2">COLLABORATION</h6>
            </div>
            <p className="text-base">
              Work with other student athletes to increase visability. When you
              share and like other players videos it will increase your
              visability as a player. This is the team work aspect to Surface 1.
            </p>
          </div>

          <div className="flex flex-col h-full">
            <div className="flex mb-5">
              <div className="flex flex-col justify-betweens">
                <div className="text-sm">03</div>
                <hr className="purple" />
              </div>
              <h6 className="text-xl ml-2">GROWTH</h6>
            </div>
            <p className="text-base">
              Resources and tools for you to get better as a student Athelte.
              Access to training classes, tutor sessions, etc
            </p>
          </div>
    </Carousel>
  );
}
