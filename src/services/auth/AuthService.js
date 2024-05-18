import axios from 'axios';

export const LoginService = async (email, password) => {
    try {
        const response = await axios.post('http://localhost:8080/api/auth/login', {
            email,
            password
        });
        const accessToken = response.data.data.token.accessToken;
        localStorage.setItem('accessToken', accessToken);
        window.location.href = '/';
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(error.response.data.error);
    }
}
