const pdf_button = document.querySelector("button.pdf")

pdf_button.addEventListener("click", (e) => {
  e.preventDefault()

  formatPdf()
  downloadPdf()
})

function formatPdf() {
  
}

function downloadPdf() {
  const element = document.getElementById("content")
  const options = {
    filename: "Kaleb-Dean.pdf",
    margin: [0, 1]
  }

  html2pdf().set(options).from(element).save()
}