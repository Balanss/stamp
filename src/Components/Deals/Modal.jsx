import React,{useEffect} from 'react'

export default function Modal({currentStamp, modalIsOpen, setModalIsOpen}) {

    const closeModal = () => {
        setModalIsOpen(false);
    }

    useEffect(() => {
        if (modalIsOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Clean up function
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [modalIsOpen]);
    

  return (
    <div className='overflow-hidden '>
        {modalIsOpen && (
            <section className='bg-slate-200 fixed w-full h-screen z-[1000] inset-0 flex items-center justify-center'>
                <div className='flex flex-col items-center gap-10'>
                    <img src={currentStamp.imageUrl} alt="Stamp" className='h-[400px] w-[300px] border-2 border-blue-black rounded-xl' />
                    <div>
                        <h2 className='text-5xl font-bold'>{currentStamp.title}</h2>
                        <p className='text-xl'>Price: {currentStamp.price}</p>
                        <p>From: {currentStamp.From}</p>
                        <p>Likes: {currentStamp.likes}</p>
                        <p className='text-black'> Description: {currentStamp.description} </p>
                    </div>
                    <button onClick={closeModal} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Close</button>
                </div>
            </section>
        )}
    </div>
  )
}
