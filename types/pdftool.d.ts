declare module 'asposepdfnodejs' {
  interface AsposePdfModule {
    AsposePdfExtractText(fileName: string): {
      errorCode: number;
      errorText: string;
      extractText: string;
    };
    AsposePdfToXlsX(fileName: string, outputFileName: string): {
      errorCode: number;
      errorText: string;
      fileNameResult: string;
    };
  }
  
  function AsposePdf(): Promise<AsposePdfModule>;
  export = AsposePdf;
}