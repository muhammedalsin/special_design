// Check If Theres Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

if (localStorage.getItem("color_option") !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color_option")
  );

  // Remove Active Class From All Colors List Item
  document.querySelectorAll(".colors-list li").forEach((e) => {
    e.classList.remove("active");

    if (e.dataset.color === localStorage.getItem("color_option")) {
      // Add Active Class On Self
      e.classList.add("active");
    }
  });
}

// Background Option
let backgroundOption = true;

// Vaiable To Control The Interval
let backgroundInterval;

// Check If There Local Storage Random background Item
let backgroundLocalItem = localStorage.getItem("background_option");

// Check If Random Background Local Storage Is Not Empty
if (backgroundLocalItem !== null) {
  if (backgroundLocalItem === "true") {
    backgroundOption = true;
  } else {
    backgroundOption = false;
  }

  console.log(backgroundLocalItem);
  console.log(typeof backgroundLocalItem);

  // Remove active class from
  document.querySelectorAll(".random-backgrounds span").forEach((element) => {
    element.classList.remove("active");
  });
  if (backgroundLocalItem === "true") {
    document.querySelector(".yes").classList.add("active");
  } else {
    document.querySelector(".no").classList.add("active");
  }
}

// Toggle Spain class On Icons
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
  // Toggle Class Fa-Spin For Rotation On Self
  this.classList.toggle("fa-spin");

  // Toggle Class Open On Main Settings Box
  document.querySelector(".setting-box").classList.toggle("open");
};

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

colorsLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    // Set Color On Root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );

    // Set Color On Local Storage
    localStorage.setItem("color_option", e.target.dataset.color);

    handleActive(e)
  });
});

// Switch Random Backgroumd Option
const randomBacEl = document.querySelectorAll(".random-backgrounds span");

// Loop On All Spans
randomBacEl.forEach((span) => {
  // Click On Evry Span
  span.addEventListener("click", (e) => {
    
    handleActive(e)

    if (e.target.dataset.background === "yes") {
      backgroundOption = true;

      randomizeImgs();

      localStorage.setItem("background_option", true);
    } else {
      backgroundOption = false;

      clearInterval(backgroundInterval);

      localStorage.setItem("background_option", false);
    }
  });
});

// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array Of Img
let imgArray = ["1.img", "2.img", "3.img", "4.img", "5.img"];

// Function To Randomize Imgs
function randomizeImgs() {
  if (backgroundOption === true) {
    backgroundInterval = setInterval(() => {
      // Get Random Numper
      let randomNumber = Math.floor(Math.random() * imgArray.length);

      // Chance Background Image Url
      landingPage.style.backgroundImage =
        'url("imgs/' + randomNumber + '.jpg")';
    }, 10000);
  }
}
randomizeImgs();

// Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {
  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;

  // Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  // window ScrollTop
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
    let allSkills = document.querySelectorAll(".skills .skill-progress span");

    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }

  // this.console.log(windowScrollTop)
};

// Create Popuo Width The Image

let OurGallery = document.querySelectorAll(".gallery img");
let overlay = document.createElement("div");
OurGallery.forEach((img) => {
  img.addEventListener("click", (e) => {

    



    // Create Overlay Element


    // Add Class To Overlat
    overlay.className = "popup-overlay";

    // Append Overlay To The Body 
    document.body.appendChild(overlay);
    
    // Create The Popup
    let popupBox = document.createElement("div");

    
    // Add Class To The Popup Box
    popupBox.className = 'popup-box';


    if (img.alt !== null) {

      // Create Heading
      let imgHeading = document.createElement("h3");

      //Create Text For Heading
      let imgText = document.createTextNode(img.alt);

      // Append The Text To Heading
      imgHeading.appendChild(imgText)

      // Append The Heading To The Popup Box
      popupBox.appendChild(imgHeading);

    }


    // Create THe Image 
    let popupImage = document.createElement("img")


    // Set Image Source
    popupImage.src= img.src

    // Add Image To Popup Box
    popupBox.appendChild(popupImage)

    // Append The Box To Body
    document.body.appendChild(popupBox);

    //  Create The Close Span
    let closeButton = document.createElement("span");

    // Create The Close Button Text
    let closeButtonText = document.createTextNode("x");

    // Append Text To Close Button 
    closeButton.appendChild(closeButtonText)

    //Add Class To Close Button
    closeButton.className = "close-button"

    // Add Close Button The Poup Box
    popupBox.appendChild(closeButton)

  });
});

// close Popup
document.addEventListener("click" , function (e) {
if (e.target.className == "close-button") {

  //Remove The Current Popup
  e.target.parentNode.remove()

    //Remove Overlay
    document.querySelector(".popup-overlay").remove()

}

});

 // Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");



// Select All Links
const allLinks = document.querySelectorAll(".links a");



function scrolToSomeWhere(elements) {

  elements.forEach(ele => {
    ele.addEventListener('click', (e)=>{
  
      e.preventDefault()
  
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: 'smooth'
      })
      
    })
  
  })
  
}
scrolToSomeWhere(allLinks)
scrolToSomeWhere(allBullets)


// Handle Active State 
function handleActive(ev) {
  ev.target.parentElement.querySelectorAll(".active").forEach(element => {
    element.classList.remove("active")
  })

  // Add Active Class On Self
  ev.target.classList.add("active")
}


// 
let bulletsSpan = document.querySelectorAll(".bullets-box span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_box")

if ( bulletLocalItem !== null) {

  bulletsSpan.forEach(span => {
    span.classList.remove("active")
  })

  if(bulletLocalItem === "block") {

    bulletsContainer.style.display = "block"
    document.querySelector(".bullets-box .yes").classList.add("active")

  } else {

    bulletsContainer.style.display = "none"
    document.querySelector(".bullets-box .no").classList.add("active")


  }
}
bulletsSpan.forEach(span => {

  span.addEventListener("click",(e) => {



    if(span.dataset.display === "show") {

    bulletsContainer.style.display = "block"

    localStorage.setItem("bullets_box" , "block")

    }else {

    bulletsContainer.style.display = "none"

    localStorage.setItem("bullets_box" , "none")

    }

    handleActive(e)

  })
})

// Reset Buttom 
document.querySelector(".reset-option").onclick = function () {
  
  // localStorage.clear()

  localStorage.removeItem("bullets_box")
  localStorage.removeItem("color_option")
  localStorage.removeItem("backgrount_option")

  window.location.reload()



}

// Toggle Menu

let ToggleBtn= document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

ToggleBtn.onclick =function (e) {

  e.stopPropagation();


  this.classList.toggle("menu-active")
  tLinks.classList.toggle("open")
  
};


document.addEventListener("click" , (e) => {
  if(e.target !== ToggleBtn && e.target !== tLinks) {
   
    if (tLinks.classList.contains("open")) {

      
      ToggleBtn.classList.toggle("menu-active")
      tLinks.classList.toggle("open")
    }

  }
})
tLinks.onclick = function (e) {
  e.stopPropagation();
}

