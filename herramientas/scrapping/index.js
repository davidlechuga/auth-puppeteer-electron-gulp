const puppeteer = require('puppeteer');
// la funciónes asyncranas se utilizan en puppeteer, 
// ademas van envueltar en en un pàrentesis (convertirla en una expresión
// y la auto ejecutamos con () al final. )


(async () => {
    console.log('Lanzamos navegador');
    // const browser = await puppeteer.lauch();
    const browser = await puppeteer.launch({ headless: false });

    const page = await browser.newPage();
    await page.goto('https://morena.si/');

    var titulo1 = await page.evaluate(() => {
        const h1 = document.querySelector('h2');
        console.log(h1.innerHTML);
        return h1.innerHTML;
    });
    console.log('cerramos navegador');
    //browser.close();
    console.log('navegador cerrado');
    console.log(titulo1);
})();

