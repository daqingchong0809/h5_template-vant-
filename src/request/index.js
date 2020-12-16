import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_BASE_API;

// 请求拦截器
axios.interceptors.request.use(
    (config) => {
        config.headers = {
            "Content-Type": "application/json; charset=utf-8;",
        };

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

// 响应拦截器
axios.interceptors.response.use(
    (response) => {
        const res = response.data;

        return res;
    },
    (error) => {
        console.log("err" + error);
        return Promise.reject(error);
    },
);

// 封装get方法
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params,
            })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

// 封装post方法
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .post(url, params)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}
