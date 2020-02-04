const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  page.setViewport({ width: 1280, height:720 });
  await page.goto('http://vnexpress.net', { waitUntil: 'networkidle2' });
  await page.screenshot({path: 'vnexpress.png'});

  await browser.close();
})();