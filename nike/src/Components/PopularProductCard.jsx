
import { star } from '../assets/icons';
function PopularProductCard({imgURL, name, price}) {
  return (
    <div className="flex flex-1 flex-col 
    w-full max-sm:w-full
    ">
        <img 
        src={imgURL} alt={name} 
        className="w-[280px] h-[280px]"
        />

        <div className="mt-8 flex flex-col
        justify-start gap-2.5">
            <div className='flex'>
                <img src={star} alt="rating" width={24} height={24} />
                <p className='font-montserrat text-xl text-slate-gray leading-normal ml-3'>(4.5)</p>
            </div>

            
            <h3 className='mt-2 text-2xl leading-normal
            font-semibold font-palanquin'>{name}</h3>
            <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal' >{price}</p>
        
        </div>
    </div>
  )
}

export default PopularProductCard