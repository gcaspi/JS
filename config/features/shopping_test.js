import { Given, When, Then } from 'cucumber';
import { browser } from 'webdriverio';

// Variables to store product details
let productTitle = '';
let productPrice = '';

Given('I am on the website', async () => {
  await browser.url('https://magento.softwaretestingboard.com/');
});

When('I access the Shop', async () => {
  // Click on the "Shop" link (adjust the selector according to the website structure)
  await browser.click('a=Shop');
});
When('I filter for a Certain Category', async () => {
  // Click on the category filter, e.g., JavaScript (adjust the selector accordingly)
  await browser.click('a=JavaScript');
});

When('I open the Product Page', async () => {
  // Click on a product to open its page (adjust the selector accordingly)
  await browser.click('.product-link');
  
  // Store product details for later verification
  productTitle = await browser.getText('.product-title');
  productPrice = await browser.getText('.product-price');
});

When('I add a multiple quantities of the product to the cart', async () => {
  // Set the quantity (e.g., 2) and add to the cart (adjust selectors)
  await browser.setValue('#quantity-input', '2');
  await browser.click('#add-to-cart-button');
});

When('I perform a Checkout', async () => {
  // Proceed to checkout (adjust selector)
  await browser.click('#checkout-button');
});

Then('I should see the correct product in the cart', async () => {
  // Verify that the product title and price match what was added to the cart
  const cartProductTitle = await browser.getText('.cart-product-title');
  const cartProductPrice = await browser.getText('.cart-product-price');

  expect(cartProductTitle).toBe(productTitle);
  expect(cartProductPrice).toBe(productPrice);
});