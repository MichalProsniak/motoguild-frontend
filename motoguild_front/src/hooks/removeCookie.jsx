import Cookie from 'react-cookie';

const RemoveCookie = (cookiename) => {
    return Cookie.remove(cookiename);
};

export default RemoveCookie;