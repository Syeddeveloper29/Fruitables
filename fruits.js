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



const navbar = document.querySelector("#navbar");
const dropDown = document.querySelector("#drop-down");
const dropDownIcon = dropDown.querySelector(".drop-down-icon");
const checkbox = document.querySelector("#checkbox");
const themeIcon = document.querySelector(".theme-icon");
const button = document.querySelector("#scroll-btn");
const logOut = document.querySelector("#logout");

// for hamburger
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
    };
});
// for hamburger


// for active page
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
          link.style.setProperty('color', '#e71717', 'important');
        }
      });
    }
  }

  highlightActiveLink("nav-links");
  highlightActiveLink("footer-links");

  // Highlight "Products" link if on fruits.html or vegetable.html
  if (currentPage === 'fruits.html' || currentPage === 'vegetable.html') {
    const productsLink = document.querySelector('#drop-down > a');
    if (productsLink) {
      productsLink.style.setProperty('color', '#e71717', 'important');
    }
  }
});
// for active page



// for sticky navBar
window.addEventListener("scroll", () => {
    if (window.scrollY >= 72) {
        navbar.classList.add("nav-active");
    }
});
// for sticky navBar



// for drop down menu
const handleMouseEnter = () => {
    dropDownIcon.classList.replace("fa-angle-down", "fa-angle-up");
};
const handleMouseleave = () => {
    dropDownIcon.classList.replace("fa-angle-up", "fa-angle-down");
};
dropDown.addEventListener("mouseenter", handleMouseEnter);
dropDown.addEventListener("mouseleave", handleMouseleave);
// for drop down menu



// for responsive small devices
const handleMouseOver = () => {
    if (window.innerWidth <= 1045) {
        const contactLink = document.querySelector('#contact-link');
        dropDownIcon.classList.replace('fa-angle-down', 'fa-angle-up');
        contactLink.style.marginTop = `4rem`;
    }
}
const handleMouseOut = () => {
    if (window.innerWidth <= 1045) {
        const contactLink = document.querySelector('#contact-link');
        dropDownIcon.classList.replace('fa-angle-up', 'fa-angle-down');
        contactLink.style.marginTop = `0`;
    }
}
dropDown.addEventListener('mouseenter', handleMouseOver);
dropDown.addEventListener('mouseleave', handleMouseOut);
// for responsive small devices



// for dark & light mode toggle button
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



// for search box
const search = document.querySelector('#search');
const fruits = document.querySelectorAll('.product-boxes');
const searchBtn = document.querySelector('.search-btn');
const noMatchFound = document.querySelector('#no-result');
const hideButtons = document.querySelector('.paggination-btns');
const insideProduct = document.querySelector('.inside-product');

search.addEventListener('input', () => {

    let keyword = search.value.toLowerCase();
    let matchFound = false;

    for (let i = 0; i < fruits.length; i++) {
        fruits[i].style.display = `flex`;
        let searchCategory = fruits[i].getAttribute('data-category').toLowerCase();
        let title = fruits[i].querySelector('.product-heading').textContent.toLowerCase();

        if (searchCategory.includes(keyword) || title.includes(keyword)) {
            fruits[i].classList.remove('hide');
            matchFound = true;
        } else {
            fruits[i].classList.add('hide');
        };
    };

    const visibleProducts = Array.from(fruits).filter(fruit => !fruit.classList.contains('hide'));
    if (visibleProducts.length === 1) {
        insideProduct.classList.add('single-item');
    } else {
        insideProduct.classList.remove('single-item');
    }

    if (matchFound) {
        noMatchFound.textContent = '';
        hideButtons.style.display = `flex`;
    } else {
        noMatchFound.textContent = 'Sorry! No Match Found ☹';
        hideButtons.style.display = `none`;
        insideProduct.classList.remove('single-item');
    }
});
// for search box



// for select filter
const select = document.querySelector('#select');
const cards = document.querySelectorAll('.product-boxes');
const filterMap = {
    'opt-1': 'default',
    'opt-2': 'popular',
    'opt-3': 'juicy',
    'opt-4': 'sweet',
    'opt-5': 'sour'
}

select.addEventListener('change', function () {
    let selected = this.value;
    let filter = filterMap[selected];
    let anyMatch = false;

    cards.forEach(card => {
        let categories = card.getAttribute('data-category');
        let match = filter === 'default' || categories.includes(filter);
        let keyword = search.value.toLowerCase();

        if (match) {
            card.classList.remove('hide');
            card.style.display = `flex`; // Make sure to show products of selected category
            setTimeout(() => {
                card.style.opacity = `1`;
            }, 10);
            anyMatch = true;

        } else {
            card.style.opacity = `0`;
            card.style.transform = `scale(0.95)`;
            setTimeout(() => {
                card.style.display = `none`; // Hide non-matching category cards
            }, 400);
        };
    });

    if (anyMatch) {
        noMatchFound.textContent = '';
        hideButtons.style.display = `flex`;
        insideProduct.classList.remove('single-item');
    } else {
        noMatchFound.textContent = 'Sorry! No Match Found ☹';
        hideButtons.style.display = `none`;
    };
});
// for select filter



// for input range
const inputRange = document.querySelector('#range');
const ouput = document.querySelector('#output');

inputRange.addEventListener('input', () => {
    ouput.textContent = inputRange.value;
});
// for input range



// for scroll to top button
window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener("scroll", () => {
        // check how much window is scroll
        if (window.scrollY > 300) {
            button.style.display = `block`;
        } else {
            button.style.display = `none`;
        }
    });
    // click to go on top
    button.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
// for scroll to top button



// for paggination buttons
const pagginationBtns = document.querySelectorAll('.paggination-btns button');

// set first number button active on page load
pagginationBtns[1].style.backgroundColor = `#e71717`;
pagginationBtns[1].style.color = `#f1f0f0`;

pagginationBtns.forEach(pagginationBtn => {

    pagginationBtn.addEventListener('click', () => {
        // reset all button styles
        pagginationBtns.forEach(btn => {
            btn.style.backgroundColor = ``;
            btn.style.color = ``;
        });
        // set active styles to clicked button
        pagginationBtn.style.backgroundColor = `#e71717`;
        pagginationBtn.style.color = `#f1f0f0`;
    });
});
// for paggination buttons


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


// for custom Box
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
};
// for custom box



// for logout button
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