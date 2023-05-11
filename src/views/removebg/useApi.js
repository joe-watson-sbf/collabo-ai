import axios from 'axios';
import React from 'react';

export const useApi = () => {

    const [formData, setFormData] = React.useState(null)

    const init = async (inputPath ) => {
        const form = new FormData();
        form.append('size', 'auto');
        form.append('image_file', inputPath);
        setFormData(form)
    }

    const ready = () => {
        return formData !== null
    }

    const removeBg = async () => {
        const response = await axios({
            method: 'post',
            url: 'https://api.remove.bg/v1.0/removebg',
            data: formData,
            responseType: 'arraybuffer',
            headers: {
                ...formData,
                'X-Api-Key': process.env.REACT_APP_API_KEY,
            },
            encoding: null
        })

        if(response.status === 200){
            return response.data
        };

        throw new Error('Error:', response.status, response.statusText);

    }

    return {
        init,
        ready,
        removeBg
    }


    /* axios({
        method: 'post',
        url: 'https://api.remove.bg/v1.0/removebg',
        data: formData,
        responseType: 'arraybuffer',
        headers: {
            ...formData.getHeaders(),
            'X-Api-Key': 'INSERT_YOUR_API_KEY_HERE',
        },
        encoding: null
    })
        .then((response) => {
            if (response.status != 200) return console.error('Error:', response.status, response.statusText);
            fs.writeFileSync("no-bg.png", response.data);
        })
        .catch((error) => {
            return console.error('Request failed:', error);
        }); */
}
