type dob=string;

type age=number;

type userinfo<T>=T extends number ? number : string;


const userage : userinfo<age>=23;

const userdob : userinfo<dob>='9/09/9999';