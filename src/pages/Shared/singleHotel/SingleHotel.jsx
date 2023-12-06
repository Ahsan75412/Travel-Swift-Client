import { VscLocation } from "react-icons/vsc";
import { AiFillStar } from "react-icons/ai";

const SingleHotel = ({ item }) => {
  const { name, image, price, location } = item;
  return (
    <section className="transition-transform transform hover:scale-105">
      <div className="card card-side bg-base-100 shadow-xl  ">
        <figure>
          <img className="w-[150px] h-[100px] object-cover rounded-xl mx-3 " src={image} alt="album" />
        </figure>
        <div className="card-body">
          <h2 className="text-md font-semibold">{name.slice(0, 18)}...</h2>
          <div className="flex">
            <VscLocation></VscLocation>
            <div>
              <p className="-mt-1">{location}</p>
            </div>
          </div>
          <span className="text-yellow-600 flex">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
          </span>

          <p className="font-bold">${price} / night</p>
        </div>
      </div>
    </section>
  );
};

export default SingleHotel;
