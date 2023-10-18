import { VscLocation } from 'react-icons/vsc';
import { AiFillStar } from 'react-icons/ai';

const SingleHotel = ({ item }) => {
    const { name, image, price , location } = item;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure><img className='w-[100px] rounded-xl mx-5' src={image} alt="album"/></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
            <div className='flex '>
                <VscLocation></VscLocation>
                <div>
                    <p className='-mt-1'>{location}</p>
                </div>
            </div>
            <span className='text-yellow-600 flex'>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
            </span>
          
          <p className='font-bold'>${price} / night</p>
          
        </div>
      </div>
    );
};

export default SingleHotel;