const pdf_button = document.querySelector("button.pdf")

pdf_button.addEventListener("click", (e) => {
  e.preventDefault()

  formatPdf()
  downloadPdf()
})

function formatPdf() {
  
}

function downloadPdf() {
  const element = document.querySelector("div.content")
  html2pdf().from(element).save()
}