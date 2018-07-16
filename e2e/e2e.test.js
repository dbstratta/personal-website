describe('index page', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000');
  });

  test('contains my name', async () => {
    const text = await page.$eval('#root', root => root.textContent);

    expect(text).toContain('Diego');
    expect(text).toContain('Stratta');
  });

  test('contains a non-empty <noscript /> tag', async () => {
    const noscriptTextContent = await page.$eval(
      'noscript',
      noscript => noscript.textContent,
    );

    expect(noscriptTextContent).not.toEqual('');
  });
});
