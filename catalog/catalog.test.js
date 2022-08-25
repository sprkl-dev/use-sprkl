jest.mock('redis', () => jest.requireActual('redis-mock'));

const { getCatalog } = require('./catalog')

const redis = require('redis-mock')
describe("Catalog test suite", () => {

    test('whatever', async () => {
        const catalog = await getCatalog()
        expect(catalog[0].id).toBe("1")
        expect(catalog[0].name).toBe(`t-shirt`)
        expect(catalog[0].price).toBe(300)
    })
})

