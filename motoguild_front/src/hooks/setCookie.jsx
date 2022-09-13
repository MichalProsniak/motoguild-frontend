import Cookie from 'react-cookie';

const SetCookie = (cookiename, refreshToken) => {
    Cookie.set(cookiename, refreshToken,{
        expires:1,
        secure: true,
        sameSite: 'strict',
        path:'/'
    });
};

export default SetCookie;