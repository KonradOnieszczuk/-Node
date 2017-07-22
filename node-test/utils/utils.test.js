const expect = require('expect');

const utils = require ('./utils');

describe('Utils', () => {

    describe('#add', () => {
        //bdd behaviour driven development
        it('should add two numbers', () => {
            var res = utils.add(33, 11);

            expect(res).toBe(44).toBeAn('number');
            // if (res !== 44) {
            // throw new Error(`Expected 44, but got ${res}.`);
            // }

        });
    });

    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeAn('number');
            done();
        })
    });

    it('should square a number', () => {
        var res = utils.square(3);

        expect(res).toBeAn('number').toBe(9);
    });

    it('should async square a number', (done) => {
        utils.asyncSquare(3, (res) => {
            expect(res).toBe(9).toBeAn('number');
            done();
        });
    });
});

//should verify first and last names are set
//assert it includes firstName and lastName with proper values
it('should set first and last name', () => {
    var res = utils.setName({}, 'Konrad Onieszczuk');

    // expect(res).toEqual({
    //     firstName: 'Konrad',
    //     lastName: 'Onieszczuk'
    // })
    expect(res).toInclude({
        firstName: 'Konrad',
        lastName: 'Onieszczuk'
    })
});

// it('should expect some values', () => {
//     //expect(12).toNotBe(11);
//     //expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
//     //expect([2,3,4]).toExclude(1);
//     expect({
//         name: 'Andrew',
//         age: 25,
//         location: 'Philadelphia'
//     }).toExclude({
//         age: 24
//     })
// });