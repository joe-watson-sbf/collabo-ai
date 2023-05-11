import React from 'react'
import DropZone from '../../components/DropZone'
import { useApi } from './useApi'

const RemoveBg = () => {
    const [image, setImage] = React.useState(null)
    const { init, ready, removeBg, isLoading } = useApi()

    const handleFile = (file) => {
        init(file);
    }

    const beginRemoveBg = async () => {
        const response = await removeBg()
        var blob = new Blob([response, { type: 'image/png' }]);
        setImage(blob)
    }

    const isReady = () => {
        return ready() && image === null
    }

    const handleDownloadImage = async () => {

        const imageURL = URL.createObjectURL(image)

        const link = document.createElement('a')
        link.href = imageURL
        link.download = 'collabo-image-bg-transparent.png'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <div>
            <div className='text-right py-4'>
                <h1 className='text-orange-300 text-3xl'>Upload An Image</h1>
                <p className='text-slate-400 text-sm'>
                    Remove the background of any image 100% automatically
                </p>
            </div>
            <div>
                <DropZone handleFile={handleFile} />
            </div>

            {
                isLoading && <div className='flex flex-col items-center justify-center pt-5 pb-6 relative'>
                    <div className="flex flex-col items-center justify-center pt-5 pb-6 relative">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-orange-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                        <p className='text-orange-300'>Loading...</p>
                    </div>
                </div>
            }

            

            {image && <div className='flex flex-col items-center justify-center pt-5 pb-6 relative'>

                <img src={URL.createObjectURL(image)} alt='preview' className='w-full bg-transparent max-h-[30rem] object-contain' />
            </div>}
            {
                isReady() && (
                    <div className='my-4'>
                        <button className='bg-orange-300 text-white px-4 py-2 rounded-md' onClick={beginRemoveBg}>Remove Background</button>
                    </div>
                )
            }

            {image && <div className='flex gap-4 my-4'>

                    <div>
                        <button className='bg-blue-500 text-white px-4 py-2 rounded-sm' onClick={handleDownloadImage}>Download</button>
                    </div>
                </div>
            }


        </div>
    )
}

export default RemoveBg