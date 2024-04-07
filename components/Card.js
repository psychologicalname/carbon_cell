import { fetchPrices, getCurrencySymbol } from '@/utils';

import { PiInfo } from "react-icons/pi";
import Loader from './Loader';

export default async function Card() {
    const price = await fetchPrices()

    return (
        <div className='flex flex-col lg:flex-row lg:items-center gap-6'>
            {price ?
                Object.keys(price).map(currency => (
                    <div key={currency} className='bg-zinc-900 py-4 px-6 w-56 h-48 rounded-xl flex flex-col justify-between'>
                        <div>
                            <p className='text-green-500 font-semibold text-lg mb-2'>
                                {currency}
                            </p>
                            <p className='mb-5 text-sm text-gray-500'>
                                {price[currency].description}
                            </p>
                            <p className='text-white text-xl font-semibold mb-4'>
                                {getCurrencySymbol(currency)}
                                <span>&nbsp;{price[currency].rate}</span>
                            </p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <PiInfo className='text-green-500 text-2xl cursor-pointer' />
                            <button
                                type='button'
                                className='bg-green-600 text-white text-sm rounded-md py-1 px-2.5'
                            >
                                Trade
                            </button>
                        </div>
                    </div>
                ))
                :
                <Loader />
            }
        </div>
    )
}


