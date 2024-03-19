import axios from 'axios';
import { PropsWithChildren } from 'react';
import { getInternetConnectionStatus } from '../utils/AppHelper';

const axiosInstance = axios.create();

type GetRequestProps = PropsWithChildren<{
    url: string
}>;

export const getDataFromService = async (props:GetRequestProps) => {
    const { url} = props
    return new Promise(async (resolve, reject) => {
        try {
            const isInternetAvailable = await getInternetConnectionStatus()
            if (isInternetAvailable) {
                axiosInstance({
                    method: 'get',
                    url: url
                }).then((response) => {
                    resolve(response)
                }).catch((error) => {
                    resolve(error.response)
                });

            } else {
                resolve({ status: 1000, data: { message: "No Internet" } })
            }

        } catch (error) {
            resolve(error)
        }
    });
}

type PostRequestProps = PropsWithChildren<{
    url: string
}>;

export const postDataFromService = async (props:PostRequestProps) => {
    const { url } = props
    return new Promise(async (resolve, reject) => {
        try {
            const isInternetAvailable = await getInternetConnectionStatus()
            if (isInternetAvailable) {
                axiosInstance({
                    method: 'post',
                    url: url
                }).then((response) => {
                    resolve(response)
                }).catch((error) => {
                    resolve(error.response)
                });
            } else {
                resolve({ status: 1000, data: { message: "No Internet" } })
            }

        } catch (error) {
            resolve(error)
        }
    });
}

