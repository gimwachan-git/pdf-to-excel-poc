# PDF to Excel Converter POC

A modern React-based web application for converting PDF files to Excel format with advanced table extraction and intelligent column detection capabilities.

## 🚀 Features

### Core Functionality
- **PDF File Upload**: Simple drag-and-drop or click-to-select PDF file input
- **Real-time Preview**: Interactive table preview of converted data
- **Excel Download**: Generate and download `.xlsx` files instantly

### Advanced Conversion Options
- **🔧 Table Data Extraction**: Automatically detect and extract structured tables from PDFs using Aspose.PDF
- **📊 Space-Separated Columns**: Intelligently split text by multiple spaces for column-aligned data (perfect for bank statements, reports, etc.)
- **📝 Text Extraction**: Standard text extraction with line-by-line processing

### Smart Detection
- Handles space-separated data like: `20250125    111111    Example    -11.11    11111.11`
- Automatically converts to properly formatted Excel columns
- Supports both structured tables and formatted text documents

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Routing**: React Router 7
- **Styling**: Tailwind CSS 4
- **PDF Processing**: Aspose.PDF for JavaScript
- **Excel Generation**: SheetJS (xlsx)
- **File Handling**: FileSaver.js
- **Build Tool**: Vite
- **Package Manager**: Bun

## 📦 Installation

### Prerequisites
- Node.js 18+ or Bun
- Modern browser with WebAssembly support

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/gimwachan-git/pdf-to-excel-poc.git
   cd pdf-to-excel-poc
   ```

2. **Install dependencies**
   ```bash
   # Using Bun (recommended)
   bun install
   
   # Or using npm
   npm install
   ```

3. **⚠️ REQUIRED: Download Aspose PDF files**
   
   > 🚨 **IMPORTANT**: Due to GitHub's file size limits, you need to manually download these required files:
   
   ```bash
   # Create public directory if it doesn't exist
   mkdir -p public
   
   # Download the JavaScript library
   curl -o public/AsposePDFforJS.js https://cdn.jsdelivr.net/npm/aspose-pdf-js@25.6.0/AsposePDFforJS.js
   
   # Download and extract the WebAssembly file
   curl -o public/AsposePDFforJS.wasm.zip https://cdn.jsdelivr.net/npm/aspose-pdf-js@25.6.0/AsposePDFforJS.wasm.zip
   cd public && unzip AsposePDFforJS.wasm.zip && rm AsposePDFforJS.wasm.zip && cd ..
   ```
   
   **Required files:**
   - `public/AsposePDFforJS.js` (~300KB)
   - `public/AsposePDFforJS.wasm` (~168MB)

4. **Start development server**
   ```bash
   # Using Bun
   bun run dev
   
   # Or using npm
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🎯 Usage

### Basic Conversion
1. Open the application in your browser
2. Click "Select PDF File" or drag & drop a PDF
3. Click "Convert to Excel"
4. Preview the results in the table
5. Click "Download Excel" to save the file

### Advanced Options

#### Table Data Extraction
- ✅ Check "Extract table data" for PDFs with structured tables
- Ideal for: Forms, reports, invoices with table layouts

#### Space-Separated Columns
- ✅ Check "Split by multiple spaces" for column-aligned text data
- Perfect for: Bank statements, financial reports, log files
- Example: `Date    Time    Description    Amount` becomes separate columns

### Supported File Types
- **Input**: PDF files (`.pdf`)
- **Output**: Excel files (`.xlsx`)

## 🏗️ Project Structure

```
pdf-to-excel-poc/
├── app/
│   ├── routes/
│   │   └── home.tsx          # Main conversion interface
│   ├── app.css               # Global styles
│   └── root.tsx              # App root component
├── public/
│   ├── AsposePDFforJS.js     # Aspose PDF library
│   └── AsposePDFforJS.wasm   # WebAssembly binary
├── types/
│   └── pdftool.d.ts          # TypeScript declarations
└── package.json
```

## 🔧 Configuration

### Biome (Linting)
The project uses Biome for code formatting and linting. Configuration is in `biome.json`.

### TypeScript
TypeScript configuration is in `tsconfig.json` with strict mode enabled.

### Tailwind CSS
Styling is handled by Tailwind CSS 4 with custom configuration.

## 📊 Browser Compatibility

- ✅ Chrome 88+
- ✅ Firefox 89+
- ✅ Safari 14+
- ✅ Edge 88+

**Note**: Requires WebAssembly support for PDF processing.

## 🚧 Development

### Available Scripts

```bash
# Development server
bun run dev

# Type checking
bun run typecheck

# Production build
bun run build

# Start production server
bun run start
```

### Architecture Notes

- **Client-side Processing**: All PDF processing happens in the browser using WebAssembly
- **No Server Required**: Fully client-side application with no backend dependencies
- **Memory Efficient**: Streaming file processing for large PDFs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Aspose.PDF for JavaScript](https://products.aspose.com/pdf/javascript-cpp/) - PDF processing engine
- [SheetJS](https://sheetjs.com/) - Excel file generation
- [React Router](https://reactrouter.com/) - Application routing
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## 🐛 Known Issues

- Large PDF files (>50MB) may cause memory issues in some browsers
- Complex PDF layouts might require manual column adjustment
- Table extraction works best with well-structured PDFs

## 🔮 Future Enhancements

- [ ] Batch PDF processing
- [ ] Custom column mapping interface
- [ ] OCR support for scanned PDFs
- [ ] Additional output formats (CSV, JSON)
- [ ] Column header detection
- [ ] Data validation and cleanup

---

**Made with ❤️ by [gimwachan-git](https://github.com/gimwachan-git)**
