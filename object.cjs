import { expect } from 'chai'; 
import supertest from 'supertest';
import baseUrl from '../globalVariable.cjs';
import token from '../globalVariable.cjs';


const addUser = () => supertest(baseUrl) 
    .post('/users')
    .send({
        "firstName": "Agas Khaerul",
        "lastName": "Fajar",
        "email": "agas.mitratex@gmail.com",
        "password": "agas.mitratex"
    })

const loginUser = () => supertest(baseUrl)
    .post('/users/login')
    .send({
        "email": "agas.mitratex@gmail.com",
        "password": "agas.mitratex"
    });

const getUserProfile = () => supertest(baseUrl)
    .get('/users/me')
    .set('Authorization', token)

const addContact = () => supertest(baseUrl)
    .post('/contacts')
    .send({
            "firstName": "Agas Khaerul",
            "lastName": "Fajar",
            "birthdate": "2002-08-01",
            "email": "agas.mitratex@gmail.com",
            "phone": "082320652659",
            "street1": "Jl. Pulo Panjang, No. 07",
            "street2": "Kel. Cinere, Kec. Cinere",
            "city": "Depok",
            "stateProvince": "Jawa Barat",
            "postalCode": "16514",
            "country": "Indonesia"
    })

const getContact = () => supertest(baseUrl)
    .get('/contacts')
    .set('Authorization', token)

const updateContact = () => supertest(baseUrl)
    .patch('/contacts')
    .set('Authorization', token)
    .send({
        "firstName": "Agas" 
    })


module.exports = {
    addUser,
    loginUser,
    getUserProfile,
    getContact,
    updateContact,
    addContact
}