const EmployeeListClass = require('../src/scripts/app');
jest.mock('../src/scripts/app');

beforeEach(() => {
    EmployeeListClass.mockClear();
});

describe('Employee List', () => {
    it('Should EmployeeListClass to be defined', () => {
        expect(EmployeeListClass).toBeDefined();
    });
});