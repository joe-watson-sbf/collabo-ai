import React from 'react'
import DropZone from '../../components/DropZone'
import { useApi } from './useApi'

const RemoveBg = () => {
    const [image, setImage] = React.useState(null)
    const [color, setColor] = React.useState('#ff0000')
    const { init, ready, removeBg } = useApi()

    const handleFile = (file) => {
        init(file);
    }

    const beginRemoveBg = async () => {
        const response = await removeBg()
        console.log(response)
        var blob = new Blob([response, { type: 'image/png' }]);
        setImage(blob)
    }

    const isReady = () => {
        return ready() && image === null
    }

    return (
        <div>
            <div className='text-right py-4'>
                <h1 className='text-orange-300 text-3xl'>Remove Background Image</h1>
                <p className='text-slate-400 text-sm'>
                    Remove the background of any image 100% automatically
                </p>
            </div>
            <div>
                <DropZone handleFile={handleFile} />
            </div>

            {image && <div className='flex flex-col items-center justify-center pt-5 pb-6 relative'>

                <img style={{backgroundColor:color}} src={URL.createObjectURL(image)} alt='preview' className='w-full max-h-[30rem] object-contain' />
            </div>}
            {
                isReady() && (
                    <div>
                        <button className='bg-orange-300 text-white px-4 py-2 rounded-md' onClick={beginRemoveBg}>Remove Background</button>
                    </div>
                )
            }

            {image && <div>
                <p> Pick a background color </p>
                <input onChange={(e)=> setColor(e.target.value) } type="color" id="favcolor" className='' name="favcolor" value="#ff0000" />
            </div>}
        </div>
    )
}

export default RemoveBg