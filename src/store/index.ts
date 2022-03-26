import { defineStore } from 'pinia';
import { getrequest } from '../network/login/login';
interface userInfo {
    studentId?: string;
    nickname?: string;
    avatar?: string;
    sex?: string;
    description?: string;
    follower?: number;
    fan?: number;
    isFollow?: boolean | undefined;
}

const userInfo: userInfo = {
    studentId: '',
    nickname: '',
    avatar: '',
    sex: '',
    description: '',
    follower: 0,
    fan: 0,
    isFollow: undefined
};
export const useStore = defineStore('main', {
    state: () => {
        return {
            userInfo
        };
    },
    getters: {},
    actions: {
        getUserInfo(studentId: string) {
            getrequest(
                `user/info/${studentId}`
            ).then((res: any) => {
                this.userInfo.studentId =
                    res.data.data.userInfo.studentId;
                this.userInfo.nickname =
                    res.data.data.userInfo.nickname;
                this.userInfo.avatar =
                    res.data.data.userInfo.avatar;
                this.userInfo.sex =
                    res.data.data.userInfo.sex;
                this.userInfo.description =
                    res.data.data.userInfo.description;
                this.userInfo.fan =
                    res.data.data.userInfo.fan;
            });
        }
    }
});
