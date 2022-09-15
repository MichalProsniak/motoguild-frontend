import Cookie from 'js-cookie';

const SetCookie = (cookiename, value) => {
    Cookie.set(cookiename, value.token,{
        expires: 7,
        secure: true,
        sameSite: 'strict',
        path:'/'
    });
};

export default SetCookie;