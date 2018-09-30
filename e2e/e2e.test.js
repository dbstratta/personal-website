describe('index page', () => {
  beforeAll(async () => {
    const port = process.env.E2E_SERVER_PORT || 3000;

    await page.goto(`https://localhost:${port}`);
  });

  test('contains my name', async () => {
    const text = await page.$eval('#root', root => root.textContent);

    const firstName = 'Diego';
    const lastName = 'Stratta';

    expect(text).toContain(firstName);
    expect(text).toContain(lastName);
  });

  test('contains a non-empty <noscript /> tag', async () => {
    const noscriptTextContent = await page.$eval(
      'noscript',
      noscript => noscript.textContent,
    );

    expect(noscriptTextContent).not.toEqual('');
  });
});
