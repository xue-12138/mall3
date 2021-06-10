import axios from 'axios'

export function request(config){
    const instance1=axios.create({
        baseURL:'http://152.136.185.210:7878/api/m5',
        timeout:5000
    })
    return instance1(config)
}