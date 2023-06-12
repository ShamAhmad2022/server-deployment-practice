'use strict'

const supertest = require('supertest');
const { app } = require('../server');

const req = supertest(app);


describe('Server test', ()=>{
    it('Handle not foound page', async ()=> {
        const res = await req.get('/about');
        expect(res.status).toEqual(404);
    });

    it('Handle the root path', async ()=> {
        const res = await req.get('/');
        expect(res.status).toEqual(200);
        expect(res.body.message).toEqual('Welcome to the Home page :)');
    })

    it('Handle server errors', async ()=> {
        const res = await req.get('/error');
        expect(res.status).toEqual(500);
        expect(res.body.route).toEqual('/error');
    })

})