
// Reveal.initialize();

// const downloadBtn = document.getElementById('download-btn2');

// downloadBtn.addEventListener('click', function() {
//   const pptx = new pptxgen();

//   // Itere sobre os slides e adicione-os ao PowerPoint
//   const slides = document.querySelectorAll('.reveal .slides > section');
//   for (let i = 0; i < slides.length; i++) {
//     const slide = slides[i];

//     // Crie um novo slide no PowerPoint
//     const pptxSlide = pptx.addSlide();

//     // Copie o conteúdo HTML do slide para o PowerPoint
//     const slideContent = slide.innerHTML;
//     pptxSlide.addText(slideContent, { x: 0, y: 0, w: '100%', h: '100%' });
//   }

//   // Salve o arquivo PPTX
//   pptx.save('apresentacao.pptx');
// });


// const downloadBtn2 = document.getElementById('download-btn2');
// const slidesContainer = document.getElementById('slides-container');

// downloadBtn.addEventListener('click', function() {
//   html2canvas(slidesContainer).then(function(canvas) {
//     const imgData = canvas.toDataURL('image/jpeg');
//     const pdf = new jsPDF();
//     pdf.addImage(imgData, 'JPEG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
//     pdf.save('apresentacao.pdf');
//   });
// });


// // Reveal.addEventListener('ready', function() {
// //     const downloadBtn = document.getElementById('download-btn');
  
// //     downloadBtn.addEventListener('click', function() {
// //       const pptx = new PptxGenJS();
  
// //       // Itere sobre os slides e adicione-os ao PowerPoint
// //       const slides = document.querySelectorAll('.reveal .slides > section');
// //       for (let i = 0; i < slides.length; i++) {
// //         const slide = slides[i];
  
// //         // Crie um novo slide no PowerPoint
// //         const pptxSlide = pptx.addSlide();
  
// //         // Copie o conteúdo HTML do slide para o PowerPoint
// //         const slideContent = slide.innerHTML;
// //         pptxSlide.addText(slideContent, { x: 0, y: 0, w: '100%', h: '100%' });
// //       }
  
// //       // Faça o download do arquivo do PowerPoint
// //       pptx.save('apresentacao.pptx');
// //     });
// //   });


// //   // Reveal.addEventListener('ready', function() {
// //   //   const downloadBtn = document.getElementById('download-btn2');
  
// //   //   downloadBtn.addEventListener('click', function() {
// //   //     const options = {
// //   //       margin: 10,
// //   //       filename: 'apresentacao.pdf',
// //   //       image: { type: 'jpeg', quality: 0.98 },
// //   //       html2canvas: { scale: 2 },
// //   //       jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
// //   //     };
  
// //   //     const element = document.querySelector('.reveal .slides');
// //   //     html2pdf().set(options).from(element).save();
// //   //   });
// //   // });