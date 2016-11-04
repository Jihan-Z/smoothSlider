var util = require('./util')

function SmoothSlider (option) {
  var smoothContainer = document.getElementsByClassName('smooth-slider')[0]
  var sliders = smoothContainer.getElementsByClassName('slider-item')
  var sliderNav = smoothContainer.getElementsByClassName('slider-nav')[0]
  var navItems = [];
  var autoPlayTimer = null;
  if (!option) {
    option =  {};
  }
  var opt = {
    autoPlay: (option.autoPlay === false ? false : true),
    interval: option.interval || 2000
  }

  if (sliderNav) {
    navItems = sliderNav.getElementsByClassName('nav-item')
  }
  var sliderCount = sliders.length
  var activeIndex = 0

  var getPrevSlider = function (activeIndex) {
    if (activeIndex === 0) {
      return sliders[sliderCount - 1]
    }
    return sliders[activeIndex - 1]
  }

  var getNextSlider = function (activeIndex) {
    if (activeIndex === sliderCount - 1) {
      return sliders[0]
    }
    return sliders[activeIndex + 1]
  }

  var activateNavItem = function (index) {
    Array.prototype.forEach.call(navItems, function (item) {
      util.removeClass(item, 'active')
    })
    util.addClass(navItems[index], 'active')
  }

  var activateSlider = function (index) {
    var activateSlider = sliders[index]
    var prevSlider = getPrevSlider(index)
    var nextSlider = getNextSlider(index)

    Array.prototype.forEach.call(sliders, function (slider) {
      util.removeClass(slider, 'prev-slider')
      util.removeClass(slider, 'active-slider')
      util.removeClass(slider, 'next-slider')
    })

    util.addClass(activateSlider, 'active-slider')
    if (sliderCount > 1) {
      util.addClass(prevSlider, 'prev-slider')
      util.addClass(nextSlider, 'next-slider')
    }

    if (sliderNav) {
      activateNavItem(index);
    }

    activeIndex = index
  }

  var activateNextSlider = function () {
    var newIndex
    if (activeIndex === sliderCount - 1) {
      newIndex = 0
    } else {
      newIndex = activeIndex + 1
    }
    activateSlider(newIndex)
  }

  var bindNavDirClickEvent = function () {
    var navLeft = smoothContainer.getElementsByClassName('nav-left')[0]
    var navRight = smoothContainer.getElementsByClassName('nav-right')[0]

    if (navLeft) {
      navLeft.onclick = function () {
        var newIndex
        if (activeIndex === 0) {
          newIndex = sliderCount - 1
        } else {
          newIndex = activeIndex - 1
        }
        activateSlider(newIndex)
      }
    }

    if (navRight) {
      navRight.onclick = function () {
        activateNextSlider();
      }
    }
  }

  var bindNavItemClickEvent = function () {
    sliderNav.onclick = function (e) {
      var evt = e || window.event
      var target = evt.target || evt.srcElement
      Array.prototype.forEach.call(navItems, function (item, index) {
        if (target === item) {
          activateSlider(index)
        }
      })
    }
  }

  var bindEvents = function () {
    bindNavDirClickEvent()
    if (sliderNav) {
      bindNavItemClickEvent()
    }

    if (opt.autoPlay) {
      smoothContainer.onmouseover = function () {
        stopAutoPlay();
      }

      smoothContainer.onmouseout = function () {
        startAutoPlay();
      }
    }
  }

  var startAutoPlay = function () {
    autoPlayTimer = setTimeout(function () {
      activateNextSlider()
      startAutoPlay()
    }, opt.interval)
  }

  var stopAutoPlay = function () {
    if (autoPlayTimer) {
      clearTimeout(autoPlayTimer);
    }
  }

  var init = function () {
    activateSlider(activeIndex)
    bindEvents()
    if (opt.autoPlay) {
      startAutoPlay()
    }
  }

  init()
}

window.SmoothSlider = SmoothSlider
