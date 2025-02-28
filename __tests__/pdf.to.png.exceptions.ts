import { resolve } from 'node:path';
import { pdfToPng } from '../src';

test(`should throw error when page index = 0 is requested`, async () => {
    const pdfFilePath: string = resolve('test-data/large_pdf.pdf');

    await expect(async () => {
        await pdfToPng(pdfFilePath, { pagesToProcess: [0, 1, 2], strictPagesToProcess: true });
    }).rejects.toThrow('Invalid pages requested');
});

test(`should throw error when page index < 1 is requested`, async () => {
    const pdfFilePath: string = resolve('test-data/large_pdf.pdf');

    await expect(async () => {
        await pdfToPng(pdfFilePath, { pagesToProcess: [1, 2, -1], strictPagesToProcess: true });
    }).rejects.toThrow('Invalid pages requested');
});

test(`should throw error when page index > then file contains and strictPagesToProcess is enabled`, async () => {
    const pdfFilePath: string = resolve('test-data/large_pdf.pdf');

    await expect(async () => {
        await pdfToPng(pdfFilePath, { pagesToProcess: [1, 2, 1000], strictPagesToProcess: true });
    }).rejects.toThrow('Invalid pages requested');
});
