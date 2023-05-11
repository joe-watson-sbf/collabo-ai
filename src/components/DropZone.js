import React from 'react'

const DropZone = ({handleFile}) => {

    const [file, setFile] = React.useState(null)

    const handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setFile(e.target.files[0])
        handleFile && handleFile(e.target.files[0])
    }

    return (
        <div className='min-w-full'>

            {!file && <> <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css" />
                <div className="sm:min-w-[40rem] w-full mx-auto">
                    <div className="flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG</p>
                            </div>
                            <input accept="image/*" onBlur={handleDrop} onChange={handleDrop} id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div>
                </div> </>}

            {file && <div className='flex flex-col items-center justify-center w-full '>
                <div className='flex flex-col items-center justify-center pt-5 pb-6 relative'>
                <button onClick={()=> setFile(null)} className='block font-semibold hover:text-red-500 text-red-700 uppercase bg-transparent rounded-sm'>
                        Reset
                    </button>
                    <img src={URL.createObjectURL(file)} alt='preview' className='w-full max-h-[30rem] bg-gray-400 object-contain' />
                </div>
            </div>
            }


        </div>

    )
}

export default DropZone