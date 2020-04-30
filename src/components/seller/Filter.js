import React from 'react'
import $ from 'jquery'

function Filter() {
  var Container = $('.container')
  Container.imagesLoaded(function () {
    var portfolio = $('.special-menu')
    portfolio.on('click', 'button', function () {
      $(this).addClass('active').siblings().removeClass('active')
      var filterValue = $(this).attr('data-filter')
      $grid.isotope({
        filter: filterValue,
      })
    })
    var $grid = $('.special-list').isotope({
      itemSelector: '.special-grid',
    })
  })
  return (
    <>
      <div class="row">
        <div class="col-lg-12">
          <div class="special-menu text-center">
            <div class="button-group filter-button-group">
              <button class="active" data-filter="*">
                All
              </button>
              <button data-filter=".drinks">Drinks</button>
              <button data-filter=".lunch">Lunch</button>
              <button data-filter=".dinner">Dinner</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Filter
