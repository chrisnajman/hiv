document.addEventListener("click", e => {
  // Return out of the function if e.target is NOT .expand-button
  if (!e.target.matches(".expand-button")) return

  // Open and close the boxes by toggling the 'show' class :
  // Get the card
  const card = e.target.closest(".card")

  // Get the card header
  const cardHeader = card.querySelector(".card-header")
  // toggle border-bottom
  cardHeader.classList.toggle("border-bottom")
  // Get the card body
  const cardBody = card.querySelector(".card-body")
  // toggle show class
  cardBody.classList.toggle("show")

  // Get 'More' in card title
  const moreLess = card.querySelector(".more-less")

  // Toggle title text
  moreLess.innerText = moreLess.innerText === "More" ? "Less" : "More"

  // Toggle the button text
  e.target.innerText = e.target.innerText === "+" ? "-" : "+"
})
