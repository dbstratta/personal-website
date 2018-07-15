describe('index page', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000');
  });

  test('contains my name', async () => {
    const text = await page.$eval('#root', root => root.textContent);

    expect(text).toContain('Diego');
    expect(text).toContain('Stratta');
  });
});
