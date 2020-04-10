#!/usr/bin/env node

const puppeteer = require('puppeteer');
const { program } = require('commander');

const rnd = () => Math.random().toString(36).slice(-8);


(async () => {

    program
        .option('-u, --url <type>', 'the url to screnshot')
        .option('-e, --elem <type>', 'the element DOM')
        .parse(process.argv)


    const url = program.url;
    const selector = program.elem;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(program.url);

    if (selector) {
        const demoSelctor = await page.$(selector)
        await demoSelctor.screenshot({ path: `img_${rnd()}.png` });
    } else {
        await page.screenshot({ path:  `img_${rnd()}.png` });
    }

    await browser.close()

})()