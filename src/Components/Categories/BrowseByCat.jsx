import React, { useState, useEffect } from 'react'
import right from '../../assets/icons/right.png'



export default function BrowseByCat() {
const [images, setImages] = useState([]);


const categories = [
    { title: 'Nature', category: 'nature' },
    { title: 'Technology', category: 'technology' },
    { title: 'City', category: 'city' },
    { title: 'People', category: 'people' },
    { title: 'Food', category: 'food' },
    { title: 'Animals', category: 'animals' },
    { title: 'Buildings', category: 'buildings' },
    { title: 'Sports', category: 'sports' },
    { title: 'Transport', category: 'transport' },
    { title: 'Fashion', category: 'fashion' },
];

const getImages = async () => {
    const newImages = await Promise.all(
        categories.map(({ title, category }) =>
            fetch(`https://source.unsplash.com/random/1600x900?${category}`)
                .then(response => ({ url: response.url, title }))
        )
    );
    setImages(prevImages => [...prevImages, ...newImages]);
}

useEffect(() => {
    getImages();
}, []);
  return (
    <div className='text-black mt-[80px] flex flex-col items-center'>
                    <section className='flex items-center gap-10 justify-end'>
                        <h1 className='text-5xl font-bold'> Find Your Category </h1>
                        <img src={right} alt="" className='w-[50px] h-[50px] cursor-pointer'  onClick={() => { setImages([]); getImages(3); }}/>
                </section>

                <section className='flex flex-row gap-10 items-center justify-center flex-wrap p-5'>
                    {images.slice(0, 3).map((img, index) => (
                        <div key={index} className='flex flex-col justify-between items-center cap:w-[20%] relative'>
                            <img src={img.url} alt="" className='h-[400px] border-2 border-blue-black rounded-xl' />
                            <div className='absolute bottom-0 text-white flex gap-10'>
                                <p>{img.title}</p>
                            </div>
                        </div>
                    ))}
                </section>
    </div>
  )
}
