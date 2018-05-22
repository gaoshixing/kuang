import {http} from './request'

export const LOGIN = {
    login(params) {
        return http.post('/', params)
    }
}