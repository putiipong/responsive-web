import CarouselAthlets from "./Carousel/CarouselAthlets";
import CarouselPlayers from "./Carousel/CarouselPlayers";
export default function MobileSize(){
    return  <div className="mobile">
    <div className="relative footballer">
      <h5 className="mobile">ATHLETS</h5>
      <img
        className="z-[100] absolute top-[3rem] left-[10rem] footballer-mobile"
        src="/footballer-mobile.png"
        width={218}
        height={281}
      />
    </div>
    <CarouselAthlets />

    <div className="relative footballer">
      <h5 className="mobile">PLAYERS</h5>
      <img
        className="z-[100] absolute  top-[3rem] left-[10rem] basketball-mobile"
        src="/basketball.png"
        width={678}
        height={950}
        alt="basketball-mobile"
      />
    </div>

    <CarouselPlayers />
  </div>
}