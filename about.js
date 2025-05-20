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
const hamburger = document.querySelector('.fa-bars');
const themeIcon = document.querySelector(".theme-icon");
const button = document.querySelector("#scroll-btn");
const logOut = document.querySelector("#logout");


// for hamburger in responsive mode
hamburger.addEventListener('click', () => {
    const isOpen = navbar.classList.contains('nav-open');
    if (!isOpen) {
        navbar.classList.add('nav-open');
        hamburger.classList.replace('fa-bars', 'fa-xmark');
    } else {
        navbar.classList.remove('nav-open');
        setTimeout(() => {
            hamburger.classList.replace('fa-xmark', 'fa-bars');
        }, 900);
    };
});
// for hamburger in responsive mode


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



// for sticky navBar
window.addEventListener('DOMContentLoaded', () => {

    window.addEventListener("scroll", () => {
        if (window.scrollY >= 72) {
            navbar.classList.add("nav-active");
        }
    });
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



// for drop down menu in responsive mode
function handleMouseOver() {
    if (window.innerWidth <= 1045) {
        const contactLink = document.querySelector('#contact-link');
        dropDownIcon.classList.replace("fa-angle-down", "fa-angle-up");
        contactLink.style.marginTop = `4rem`;
    };
};
function handleMouseOut() {
    if (window.innerWidth <= 1045) {
        const contactLink = document.querySelector('#contact-link');
        dropDownIcon.classList.replace("fa-angle-up", "fa-angle-down");
        contactLink.style.marginTop = `0rem`;
    };
};
dropDown.addEventListener("mouseenter", handleMouseOver);
dropDown.addEventListener("mouseleave", handleMouseOut);
// for drop down menu in responsive mode



// for dark & light toggle button
checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        document.body.classList.add("dark-mode");
        themeIcon.classList.replace("fa-sun", "fa-moon");
    } else {
        document.body.classList.remove("dark-mode");
        themeIcon.classList.replace("fa-moon", "fa-sun");
    }
});
// for dark & light toggle button



// for scroll to top button
window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 300) {
            button.style.display = `block`;
        } else {
            button.style.display = `none`;
        }
    });
    button.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
// for scroll to top button



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
}
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