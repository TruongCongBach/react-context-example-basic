import axios from 'axios';
export function login(credential) {
    const domain = "http://survey-recoding-system-env-beta-dev.ap-northeast-1.elasticbeanstalk.com";
    return axios.post(`${domain}/login/username`, credential);
}
export function serviceCallAPILogin(credential) {
    const domain = "http://survey-recoding-system-env-beta-dev.ap-northeast-1.elasticbeanstalk.com";
    return axios.post(`${domain}/login/username`, credential);
}