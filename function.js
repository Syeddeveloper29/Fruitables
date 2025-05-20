//for loading
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const mainContent = document.getElementById('main-page');
  setTimeout(() => {
    preloader.style.display = `none`;
    mainContent.style.display = `block`;
  }, 3000);
});
//for loading



// for hamburger
const navbar = document.querySelector("#navbar");
const hamBurger = document.querySelector('.fa-bars');
hamBurger.addEventListener('click', () => {
  const isOpen = navbar.classList.contains('nav-open');
  if (!isOpen) {
    navbar.classList.add('nav-open');
    hamBurger.classList.replace('fa-bars', 'fa-xmark');
  } else {
    navbar.classList.remove('nav-open');
    setTimeout(() => {
      hamBurger.classList.replace('fa-xmark', 'fa-bars');
    }, 900);
  }
});
// for hamburger



// for current active page
window.addEventListener('load', () => {
  let currentPage = window.location.pathname.split('/').pop();
  if (currentPage === '' || currentPage === '/') {
    currentPage = 'index.html';
  }

  function highlightActiveLink(menuID) {
    let menu = document.getElementById(menuID);
    if (menu) {
      let links = menu.querySelectorAll('a');
      links.forEach(link => {
        let href = link.getAttribute('href');
        if (href && href === currentPage) {
          link.style.setProperty(`color`, `#e71717`, 'important');
        };
      });
    };
  };
  highlightActiveLink("nav-links");
  highlightActiveLink("footer-links");
});
// for current active page



// for sticky navbar
window.addEventListener("scroll", () => {
  if (window.scrollY >= 72) {
    navbar.classList.add("nav-active");
  }
});
// for sticky navbar



// for drop down menu
const dropDown = document.querySelector("#drop-down");
const dropDownIcon = dropDown.querySelector(".drop-down-icon");

const handleMouseEnter = () => {
  dropDownIcon.classList.replace("fa-angle-down", "fa-angle-up");
};

const handleMouseleave = () => {
  dropDownIcon.classList.replace("fa-angle-up", "fa-angle-down");
};

dropDown.addEventListener("mouseenter", handleMouseEnter);
dropDown.addEventListener("mouseleave", handleMouseleave);
// for drop down menu



// for responsive drop down menu
function handleMouseOver() {
  if (window.innerWidth <= 1045) {
    const contactLink = document.querySelector('#contact-link');
    dropDownIcon.classList.replace('fa-angle-down', 'fa-angle-up');
    contactLink.style.marginTop = `4rem`;
  }
}
function handleMouseOut() {
  if (window.innerWidth <= 1045) {
    const contactLink = document.querySelector('#contact-link');
    dropDownIcon.classList.replace('fa-angle-up', 'fa-angle-down');
    contactLink.style.marginTop = `0`;
  }
}
dropDown.addEventListener('mouseenter', handleMouseOver);
dropDown.addEventListener('mouseleave', handleMouseOut);
// for responsive drop down menu



// for dark & light mode toggle button
const checkbox = document.querySelector("#checkbox");
const themeIcon = document.querySelector(".theme-icon");
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    document.body.classList.add("dark-mode");
    themeIcon.classList.replace("fa-sun", "fa-moon");
  } else {
    document.body.classList.remove("dark-mode");
    themeIcon.classList.replace("fa-moon", "fa-sun");
  }
});
// for dark & light mode toggle button


// for home short heading
const shortHeading = () => {
  const firstHeading = document.querySelector('#main-heading');
  const secondHeading = document.querySelector('#second-heading');
  const thirdHeading = document.querySelector('#third-heading');
  if (window.innerWidth <= 536) {
    firstHeading.textContent = `Fresh & Organic at Your Door`;
    secondHeading.textContent = `Wholesome Picks for You`;
    thirdHeading.textContent = `Buy Fresh Live Well`;
  } else if (window.innerWidth <= 711) {
    firstHeading.textContent = `Fresh & Organic Fruits & Veggies Delivered`;
    secondHeading.textContent = `Enjoy Handpicked Produce for Better Living`;
  } else {
    firstHeading.textContent = `Fresh & Organic Fruits & Vegetables Delivered to You`;
    secondHeading.textContent = `Enjoy Healthy, Handpicked Produce for a Better Life`;
    thirdHeading.textContent = `Shop Now & Stay Healthy!`;
  }
}
window.addEventListener('load', shortHeading);
window.addEventListener('resize', shortHeading);
// for home short heading



// for image slider
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const slider = document.querySelector(".slider");
const slide = document.querySelectorAll(".slide");
const bottom = document.querySelector(".bottom-right");
// when window reloads 1st image will appear
let slideIndex = 0;

slide[slideIndex].classList.add("active");
// when user click on right arrow

rightArrow.addEventListener("click", () => {
  slide[slideIndex].classList.remove("show");

  slideIndex = slideIndex === slide.length - 1 ? 0 : slideIndex + 1;
  slide[slideIndex].classList.add("show");
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
  changeColor();
});

// when user click on left arrow
leftArrow.addEventListener("click", () => {
  slide[slideIndex].classList.remove("show");

  slideIndex = slideIndex === 0 ? slide.length - 1 : slideIndex - 1;
  slide[slideIndex].classList.add("show");
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
  changeColor();
});

// creating dots and adding class
for (let i = 0; i < slide.length; i++) {
  const div = document.createElement("div");
  div.classList.add("button");
  bottom.appendChild(div);
}

// when user refresh or opens the page on first button color is change
const buttons = document.querySelectorAll(".button");

buttons[0].classList.add("active");

// when user click on button button color will disappear and add new color plus slide will be move.
buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    slideIndex = i;
    resetBg();
    slider.style.transform = `translateX(-${i * 100}%)`;
    button.classList.add("active");
  });
});

// universal function for button color will disappear and when hover on it, dots Will be stop.
const resetBg = () => {
  buttons.forEach((button) => {
    button.classList.remove("active");
    button.addEventListener("mouseover", stopSlideShow);
    button.addEventListener("mouseout", startSlideShow);
  });
};

// universal function for change color of buttons according to slide Index.
const changeColor = () => {
  resetBg();
  buttons[slideIndex].classList.add("active");
};

// auto image slider
let slideInterval;

const startSlideShow = () => {
  slideInterval = setInterval(() => {
    slideIndex = slideIndex === slide.length - 1 ? 0 : slideIndex + 1;
    slide[slideIndex].classList.add("show");
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    changeColor();
  }, 2000);
};

startSlideShow();

const stopSlideShow = () => {
  clearInterval(slideInterval);
};

slider.addEventListener("mouseover", stopSlideShow);
slider.addEventListener("mouseout", startSlideShow);
leftArrow.addEventListener("mouseover", stopSlideShow);
leftArrow.addEventListener("mouseout", startSlideShow);
rightArrow.addEventListener("mouseover", stopSlideShow);
rightArrow.addEventListener("mouseout", startSlideShow);
// for image slider



// for FAQS accordion
const accordionItem = document.querySelectorAll(".accordian-item");
accordionItem.forEach((item) => {
  const title = item.querySelector(".upper-accordion-part");
  const content = item.querySelector(".accordion-content");
  const icon = item.querySelector("i");

  icon.addEventListener("click", () => {
    // close all the other questions which has not clicked.
    for (let i = 0; i < accordionItem.length; i++) {
      if (accordionItem[i] != item) {
        accordionItem[i].classList.remove("show");
        accordionItem[i].querySelector("i").style.transform = `rotate(0deg)`;
      }
      // close all the other questions which has not clicked.
    }

    if (item.classList.contains("show")) {
      item.classList.remove("show");
      icon.style.transform = `rotate(0deg)`;
      // toggle the clicked item and rotate its icon
    } else {
      item.classList.toggle("show");
      icon.style.transform = `rotate(45deg)`;
    }
    // toggle the clicked item and rotate its icon
  });
});
// for FAQS accordion


// for vegetable heading
const changeVegetableHeading = () => {
  const vegetableHeading = document.querySelector('#vegetable-heading');
  if (window.innerWidth <= 375) {
    vegetableHeading.textContent = `Fresh Vegetables`;
  } else {
    vegetableHeading.textContent = `Fresh Organic Vegetables`;
  }
}
window.addEventListener('load', changeVegetableHeading);
window.addEventListener('resize', changeVegetableHeading);
// for vegetable heading



// for vegetable product slider
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");
const productSlider = document.querySelector(".product-slider");

// global variable to hold how much to scroll
let scrollAmount;
// function to dynamically set scroll amount based on card width + gap
const setScrollAmountByCardWidth = () => {
  const cardContainer = document.getElementById("vegetable-product-cards-part");
  const firstCard = document.querySelector('#vegetable-product-cards-part .product-boxes');
  // Make sure both elements exist
  if (firstCard && cardContainer) {
    // get the width of a single card
    const cardWidth = firstCard.offsetWidth;
    // get computed styles of the container to read the gap between cards
    const containerStyle = window.getComputedStyle(cardContainer);
    // read the gap and convert it to a number (default to 0 if not found)
    const gap = parseFloat(containerStyle.gap || "0");
    // set the scroll amount to card width + gap
    scrollAmount = cardWidth + gap;
  }
}
setScrollAmountByCardWidth();
window.addEventListener('load', setScrollAmountByCardWidth);
window.addEventListener('resize', setScrollAmountByCardWidth);

// for right button click
rightButton.addEventListener("click", () => {
  const maxScrollLeft = productSlider.scrollWidth - productSlider.clientWidth;  //max possible scroll
  if (productSlider.scrollLeft >= maxScrollLeft - 1) {
    productSlider.scrollTo({ left: 0, behavior: 'auto' });     //jump back to beginning
  } else {
    productSlider.scrollBy({ left: scrollAmount, behavior: 'smooth' });   //scroll right
  }
});

// for left button click
leftButton.addEventListener("click", () => {
  const maxScrollLeft = productSlider.scrollWidth - productSlider.clientWidth;
  if (productSlider.scrollLeft <= scrollAmount / 2) {
    productSlider.scrollTo({ left: maxScrollLeft, behavior: 'auto' });   //jump to end
  } else {
    productSlider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });  //scroll left
  }
});

// auto scrolls the slider every 3 seconds
let productSlideShow;
const startProductSlideShow = () => {
  productSlideShow = setInterval(() => {
    const maxScrollLeft = productSlider.scrollWidth - productSlider.clientWidth;  //max possible scroll
    if (productSlider.scrollLeft >= maxScrollLeft - 1) {
      productSlider.scrollTo({ left: 0, behavior: 'auto' });     //jump back to beginning
    } else {
      productSlider.scrollBy({ left: scrollAmount, behavior: 'smooth' });   //scroll right
    }
  }, 3000);
};
// start the slideshow on load
startProductSlideShow();

// stops the slideshow
const stopProductSlideShow = () => {
  clearInterval(productSlideShow);
};

// pause auto-scroll on hover, and resume on mouse leave
[productSlider, leftButton, rightButton].forEach(stop => {
  stop.addEventListener('mouseover', stopProductSlideShow);
  stop.addEventListener('mouseleave', startProductSlideShow);
});
// for vegetable product slider



// for testimonal slider
const leftTestimonalBtn = document.querySelector('.left-testimonal-slider-btn');
const rightTestimonalBtn = document.querySelector('.right-testimonal-slider-btn');
const testimonalSlider = document.querySelector('.testimonal-frame');


let testimonalScrollAmount;
// get all slides and clone first & last for infinite effect
const testimonalSlides = Array.from(testimonalSlider.children);
const firstClone = testimonalSlides[0].cloneNode(true);
const lastClone = testimonalSlides[testimonalSlides.length - 1].cloneNode(true);

// append cloned slides to create an infinite loop effect
testimonalSlider.appendChild(firstClone);
testimonalSlider.insertBefore(lastClone, testimonalSlides[0]);

window.addEventListener('load', () => {
  setTestimonalScrollAmountByCardWidth();
  // start at the first real slide (skip the last clone)
  testimonalSlider.scrollLeft = testimonalSlider.children[1].offsetLeft;
  startTestimonalSlideShow();
})

const setTestimonalScrollAmountByCardWidth = () => {
  const testimonalContainer = document.querySelector('#testimonal-container');
  const testimonalCard = document.querySelector('#testimonal-container .testimonal-boxes');
  if (testimonalCard && testimonalContainer) {
    const firstCard = testimonalCard.offsetWidth;

    const containerStyle = window.getComputedStyle(testimonalContainer);

    const gap = parseFloat(containerStyle.gap || '0');

    testimonalScrollAmount = firstCard + gap;
  }
}
window.addEventListener('load', setTestimonalScrollAmountByCardWidth);
window.addEventListener('resize', setTestimonalScrollAmountByCardWidth);

let scrollTimeOut;

testimonalSlider.addEventListener('scroll', () => {
  clearTimeout(scrollTimeOut);

  scrollTimeOut = setTimeout(() => {

    const totalScrollWidth = testimonalSlider.scrollWidth;
    const totalVisibleWidth = testimonalSlider.clientWidth;
    const scrollLeft = testimonalSlider.scrollLeft;


    if (scrollLeft >= totalScrollWidth - totalVisibleWidth) {
      testimonalSlider.style.scrollBehavior = 'auto';
      testimonalSlider.scrollLeft = testimonalScrollAmount;
      testimonalSlider.style.scrollBehavior = 'smooth';
    }

    if (scrollLeft <= 0) {
      testimonalSlider.style.scrollBehavior = 'auto';
      testimonalSlider.scrollLeft = totalScrollWidth - (2 * testimonalScrollAmount);
      testimonalSlider.style.scrollBehavior = 'smooth';
    }
  }, 100);
});

// left button click event
leftTestimonalBtn.addEventListener('click', () => {
  if (testimonalSlider.scrollLeft <= 0) {
    testimonalSlider.style.scrollBehavior = 'auto';
    testimonalSlider.scrollLeft = testimonalSlider.scrollWidth - (2 * testimonalScrollAmount);
    testimonalSlider.style.scrollBehavior = 'smooth';
  } else {
    testimonalSlider.scrollBy({ left: -testimonalScrollAmount, behavior: 'smooth' });
  }
});

// right button click event
rightTestimonalBtn.addEventListener('click', () => {
  if (testimonalSlider.scrollLeft >= testimonalSlider.ScrollWidth - testimonalSlider.clientWidth) {
    testimonalSlider.style.scrollBehavior = 'auto';
    testimonalSlider.scrollLeft = testimonalScrollAmount;
    testimonalSlider.style.scrollBehavior = 'smooth';
  } else {
    testimonalSlider.scrollBy({ left: testimonalScrollAmount, behavior: 'smooth' });
  }
});

// auto-slide function
let testimonalSlideShow;

const startTestimonalSlideShow = () => {
  testimonalSlideShow = setInterval(() => {
    if (testimonalSlider.scrollLeft >= testimonalSlider.ScrollWidth - testimonalSlider.clientWidth) {
      testimonalSlider.style.scrollBehavior = 'auto';
      testimonalSlider.scrollLeft = testimonalScrollAmount;
      testimonalSlider.style.scrollBehavior = 'smooth';
    } else {
      testimonalSlider.scrollBy({ left: testimonalScrollAmount, behavior: 'smooth' });
    }
  }, 3000);
};

// stop auto-slide on hover
const stopTestimonalSlideShow = () => {
  clearInterval(testimonalSlideShow);
};

// add event listeners for hover effects
[testimonalSlider, rightTestimonalBtn, leftTestimonalBtn].forEach(stop => {
  stop.addEventListener('mouseover', stopTestimonalSlideShow);
  stop.addEventListener('mouseleave', startTestimonalSlideShow);
});
// for testimonal slider



// for email subscription
const scriptURL = 'https://script.google.com/macros/s/AKfycbwkM1aMDLjeXoc-gK6LTUBNpr3XfX31xbrXcpdyiwi6oUN2BxeuIW1HkhP7DYc9dn6c/exec';
const form = document.forms['submit-to-google-sheet'];
const subscriptionText = document.querySelector('#subscription-text');

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      subscriptionText.innerHTML = 'Thank you for subscribing us!'
      setTimeout(() => {
        subscriptionText.innerHTML = '';
      }, 5000);
      form.reset();
    })
    .catch(error => console.error('Error!', error.message))
});
// for email subscription


// for scroll to top button
const button = document.querySelector("#scroll-btn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    button.style.display = `block`;
  } else {
    button.style.display = `none`;
  }
});

button.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// for scroll to top button



// for custom box
function showConfirmBox(message) {
  const confirmBox = document.createElement("div");
  confirmBox.classList.add("confirm-box");

  const messageBox = document.createElement("div");
  messageBox.classList.add("message-box");
  messageBox.textContent = message;
  confirmBox.appendChild(messageBox);

  const buttonBox = document.createElement("div");
  buttonBox.classList.add("button-box");
  messageBox.appendChild(buttonBox);

  const yesButton = document.createElement("button");
  yesButton.classList.add("yes-button");
  yesButton.textContent = "Yes";
  buttonBox.appendChild(yesButton);
  yesButton.addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = `signin.html`;
  });

  const noButton = document.createElement("button");
  noButton.classList.add("no-button");
  noButton.textContent = "No";
  buttonBox.appendChild(noButton);
  noButton.addEventListener("click", () => {
    cancelLogOut();
  });

  const cancelButton = document.createElement("button");
  cancelButton.classList.add("fa-solid");
  cancelButton.classList.add("fa-circle-xmark");
  buttonBox.appendChild(cancelButton);
  cancelButton.addEventListener("click", () => {
    cancelLogOut();
  });

  const cancelLogOut = () => {
    document.body.removeChild(confirmBox);
  };

  document.body.appendChild(confirmBox);
}
// for custom box



// for logout button
const logOut = document.querySelector("#logout");
logOut.addEventListener("click", () => {
  showConfirmBox("Are you sure want to logout?");
});
// for logout button



// for restrict user to access homepage without login starts here
window.addEventListener('DOMContentLoaded', () => {
  const loggedInUser = localStorage.getItem('loggedInUser');
  if (!loggedInUser) {
    window.location.href = `signin.html`;
  }
});
// for restrict user to access homepage without login