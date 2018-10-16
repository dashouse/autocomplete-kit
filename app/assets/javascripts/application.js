/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()

  const number = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10'
  ]

  accessibleAutocomplete({
    element: document.querySelector('#my-autocomplete-container'),
    id: 'my-autocomplete', // To match it to the existing <label>.
    source: number
  })

})
