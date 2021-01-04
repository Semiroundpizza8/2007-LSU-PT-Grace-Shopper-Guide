require('dotenv').config();
const { getAllProducts } = require('../db');
const client = require('../db/client');

let productsFromDatabase;
describe('Database', () => {
  beforeAll(async() => {
    client.connect();
    // "control" test data
    const {rows} = await client.query(`
      SELECT * FROM products;
    `);
    productsFromDatabase = rows;
  })
  afterAll(async() => {
    client.end();
  })
  // TODO 1 - write a test for `getAllProducts` database adapter. selects and returns an array of all products
  describe('getAllProducts', () => {
    it('selects and returns an array of products', async () => {
      expect(await getAllProducts()).toEqual(productsFromDatabase)
    })
    it('each product has a name property', async () => {
      const [product] = await getAllProducts();
      expect(product).toHaveProperty('name')
    })
    it('each name property matches the data', async () => {
      const [product] = await getAllProducts();
      expect(product.name).toBe(productsFromDatabase[0].name)
    })
  })
})
