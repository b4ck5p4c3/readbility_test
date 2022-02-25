import fetch from "node-fetch";
import { Readability, isProbablyReaderable } from '@mozilla/readability';
import { JSDOM } from 'jsdom';

async function main() {
    const url = 'https://0x08.in/';
    let res = await fetch(url);
    let content = await res.text();

    let doc = new JSDOM(content, { url });
    let reader = new Readability(doc.window.document, { debug: true });
    let article = reader.parse();
    console.error(article);
    console.error('isProbablyReaderable: ', isProbablyReaderable(doc.window.document));
}

main().catch(error => {
    throw error;
});
