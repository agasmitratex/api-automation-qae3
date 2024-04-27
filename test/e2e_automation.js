import { expect } from 'chai';
import supertest from 'supertest';
import baseUrl from '../globalVariable.cjs';
import { token } from '../globalVariable.cjs';
import { addUser } from "../object.cjs";
import {loginUser} from '../object.cjs';
import {getUserProfile} from '../object.cjs';
import {getContact} from '../object.cjs';
import {updateContact} from '../object.cjs';
import {addContact} from '../object.cjs';

describe('END TO END AUTOMATION CONTACT', () => {

    it('ADD User', async () => {
        const response = await addUser()
        console.log(response.text);
        expect(response.status).to.equal(200);
        expect(response.body.email).to.equal('agas.mitratex@gmail.com');
    });

    it('LOGIN User', async () => {
        const response = await loginUser()
        console.log(response.text);
        expect(response.status).to.equal(200);
    });

    it('GET User Profile', async () => {
        const response = await getUserProfile()
        console.log(response.text);
        expect(response.status).to.equal(200);
    });

    it('ADD Contact', async () => {
        const response = await addContact()
        console.log(response.text);
        expect(response.status).to.equal(200);
    });

    
    it('GET Contact', async () => {
        const response = await getContact()
        console.log(response.text);
        expect(response.status).to.equal(200);
    });

    
    it('UPDATE Contact', async () => {
        const response = await updateContact()
        console.log(response.text);
        expect(response.status).to.equal(200);
    });

    it('GET Contact 2', async () => {
        const response = await getContact()
        console.log(response.text);
        expect(response.status).to.equal(200);
    });

});
