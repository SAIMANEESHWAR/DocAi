import React, { useState } from 'react';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist/build/pdf';

// Specify the path to the PDF.js worker script
GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';

const PDFTextExtractor = () => {
  const [text, setText] = useState('');

  const extractTextFromPDF = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async function (event) {
        const arrayBuffer = event.target.result;
        const loadingTask = getDocument({ data: arrayBuffer });
        try {
          const pdf = await loadingTask.promise;
          let extractedText = '';
          for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
            const page = await pdf.getPage(pageNumber);
            const content = await page.getTextContent();
            content.items.forEach((item) => {
              extractedText += item.str + ' ';
            });
          }
          resolve(extractedText);
        } catch (error) {
          reject(error);
        }
      };
      reader.readAsArrayBuffer(file);
    });
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const extractedText = await extractTextFromPDF(file);
        console.log(extractedText);
        setText(extractedText);
      } catch (error) {
        console.error('Error extracting text:', error);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {text && <div>{text}</div>}
    </div>
  );
};

export default PDFTextExtractor;
