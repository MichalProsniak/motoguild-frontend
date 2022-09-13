import Cookie from 'react-cookie';

const GetCookie = (cookiename) => {
    return Cookie.get(cookiename);
};

export default GetCookie;