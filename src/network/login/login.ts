import { ElMessage } from 'element-plus';
import { request } from '../network';
interface getBody {
    studentId: string;
}
interface postBody {
    studentId: string;
    password: string;
}
export function getrequest(param: string) {
    return request.get(param);
}
export function postrequest(
    param: string,
    body: postBody
) {
    return request.post(param, body);
}
request.interceptors.request.use(
    (config: any) => {
        if (
            window.localStorage.getItem(
                'token'
            ) != 'null'
        ) {
            config!.headers!.Authorization = `Bearer ${window.localStorage.getItem(
                'token'
            )}`;
        }
        console.log(
            config!.headers!.Authorization
        );

        return config;
    }
);
request.interceptors.response.use(
    (res: any) => {
        if (res.status == 200) {
            console.log(res);
            if (res.data.code == 200) {
                ElMessage.success({
                    message: res.data.message,
                    center: true
                });
                return res;
            } else if (res.data.code == 1003) {
                ElMessage.error({
                    message: res.data.message,
                    center: true
                });
                return;
            } else if (res.data.code == 1002) {
                ElMessage({
                    message: res.data.message,
                    center: true
                });
                return;
            } else if (res.data.code == 1001) {
                ElMessage({
                    message: res.data.message,
                    center: true
                });
                return;
            }
        } else {
            console.log('error');
            ElMessage.error({
                message: res.data.message,
                center: true
            });
        }
    },
    (err: any) => {
        ElMessage.error({
            message: '请检查网络设置',
            center: true
        });
        return;
    }
);
