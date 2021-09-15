let printBtn = document.querySelector('#print-btn-wrapper');
let shortSkillTitle = document.querySelector('#skill-title');
let projects = document.querySelector('#project-text h2');
let clients = document.querySelector('#smile-text h2');
let awards = document.querySelector('#award-text h2');
let sliderWrapper = document.querySelector('#slider-content-wrapper');
let sliderText = document.querySelector('#slider-text');
let sliderImage = document.querySelector('#slider-image');
let sliderName = document.querySelector('#slider-name');
let sliderPos = document.querySelector('#position');
let allWork = document.querySelector('#all-work');
let frontendWork = document.querySelector('#frontend-work');
let backendWork = document.querySelector('#backend-work');
let projectList = document.querySelector('#project-list');
let allProjects = document.querySelectorAll('.project-image');
let nameInput = document.querySelector('#name-input-box');
let emailInput = document.querySelector('#email-input-box');
let messageInput = document.querySelector('#message-input-box');
let submitBtn = document.querySelector('#submit-btn');




// array of skill titles that will display every 3 seconds one after the other
let shortSkills = ['Python Developer', 'Web Designer', 'Video Editor', 'Data Entry Operator'];
// Variable to control flow of skill titles
let shortSkillsIndex = 1;
let scrollAnimation = true;

// Array of objects which contains the data that which change in slider
let sliderContent = [
    {
        para:'Where does it come from? Contrary to popular belief, Lorem ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.',
        src:'images/review1.jpg',
        name:'-Michael C. Rios',
        pos:'CEO Facebook'
    },
    {
        para:'Where does it come from? Contrary to popular belief, Lorem ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.',
        src:'images/review2.jpeg',
        name:'-John Doe',
        pos:'CEO Google'
    },
    {
        para:'Where does it come from? Contrary to popular belief, Lorem ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.',
        src:'images/review3.jpeg',
        name:'Dawid Jordan',
        pos:'CEO Microsoft'
    }
]
// Variable to control flow of slider
let sliderContentIndex = 1;


// Arrays that holds the projects that will be displayed when clicking on the respective tab
let arr1 = ['images/1.jpg', 'images/2.jpeg', 'images/3.png', 'images/4.jpg', 'images/5.png', 'images/6.jpg'];
let arr2 = ['images/1.jpg', 'images/2.jpeg', 'images/3.png'];
let arr3 = ['images/4.jpg', 'images/5.png', 'images/6.jpg'];









// ############# Skill Title section Javascript Starts here #############


// setInterval function to change the skill title every 3 seconds
setInterval(()=>{
    if(shortSkillsIndex===shortSkills.length){
        shortSkillsIndex = 0;
    }
    shortSkillTitle.textContent = shortSkills[shortSkillsIndex];
    shortSkillsIndex = shortSkillsIndex+1;
},3000);

// ############# Skill Title section Javascript Ends here #############







// ############## Print Button Javascript Starts Here ##################


// Listener to print the page on clicking the print Button
printBtn.addEventListener('click', ()=>{
    window.print();
});

// ############## Print Button Javascript Ends Here ##################











// ############## Increment Counter section Javascript Starts here #############

// Function to animate-Increment Section
const animateIncrement = ()=>{
    let projectsCount = 0;
    let clientsCount = 0;
    let awardsCount = 0;

    // Set Interval to increment Projects
    let projectId = setInterval(()=>{
        if(projectsCount===1503){
            clearInterval(projectId);
        }else{
            projects.textContent = projectsCount+'+';
            projectsCount = projectsCount+3;
        }
    },1.3);

    // Set Interval to increment Clients
    let clientId = setInterval(()=>{
        if(clientsCount==17){
            clearInterval(clientId);
        }else{
            clients.textContent = clientsCount+'k';
            clientsCount = clientsCount+1;
        }
    },125);

    // Set Interval to increment Awards
    let awardId = setInterval(()=>{
        if(awardsCount==21){
            clearInterval(awardId);
        }else{
            awards.textContent = awardsCount;
            awardsCount = awardsCount+1;
        }
    },100);
}

// Function to calculate the total height user scrolled to call the above animateIncrement Function
const totalHeight = ()=>{
    let navbarHeight = getComputedStyle(document.querySelector('#navbar-wrapper')).height;
    let profileHeight = getComputedStyle(document.querySelector('#profile-picture-section')).height;
    let aboutHeight = getComputedStyle(document.querySelector('#about')).height;
    let eduHeight = getComputedStyle(document.querySelector('#education-and-skills')).height;
    return Number(navbarHeight.slice(0,navbarHeight.length-2))+Number(profileHeight.slice(0,profileHeight.length-2))+Number(aboutHeight.slice(0,aboutHeight.length-2))+Number(eduHeight.slice(0,eduHeight.length-2));
}

// Listener to call animateIncrement Function when the window is scrolled to
window.addEventListener('scroll', ()=>{
    if(window.pageYOffset>totalHeight()-300 & scrollAnimation){
        animateIncrement();
        scrollAnimation = false;
    }
});

// ############## Increment Counter section Javascript Ends here #############








// ############## Review section Javascript Starts here #################


// Set Interval function to slide next content of review section
setInterval(()=>{
    document.querySelector('#slider-text').classList.toggle('animate-slider-pagragraph');
    document.querySelector('#slider-image').classList.toggle('animate-slider-pagragraph');
    document.querySelector('#slider-name').classList.toggle('animate-slider-naam');
    document.querySelector('#position').classList.toggle('animate-slider-position');
    setTimeout(()=>{
        document.querySelector('#slider-text').classList.toggle('animate-slider-pagragraph');
        document.querySelector('#slider-image').classList.toggle('animate-slider-pagragraph');
        document.querySelector('#slider-name').classList.toggle('animate-slider-naam');
        document.querySelector('#position').classList.toggle('animate-slider-position');
    },2000);
    if(sliderContentIndex==sliderContent.length){
        sliderContentIndex = 0;
    }
    sliderText.textContent = sliderContent[sliderContentIndex].para;
    sliderImage.setAttribute('src', sliderContent[sliderContentIndex].src);
    sliderName.textContent = sliderContent[sliderContentIndex].name;
    sliderPos.textContent = sliderContent[sliderContentIndex].pos;
    sliderContentIndex = sliderContentIndex+1;
},7000);

// Listener to slide next content of review section on reloading the page
window.addEventListener('load', ()=>{
    document.querySelector('#slider-text').classList.toggle('animate-slider-pagragraph');
    document.querySelector('#slider-image').classList.toggle('animate-slider-pagragraph');
    document.querySelector('#slider-name').classList.toggle('animate-slider-naam');
    document.querySelector('#position').classList.toggle('animate-slider-position');
    setTimeout(()=>{
        document.querySelector('#slider-text').classList.toggle('animate-slider-pagragraph');
        document.querySelector('#slider-image').classList.toggle('animate-slider-pagragraph');
        document.querySelector('#slider-name').classList.toggle('animate-slider-naam');
        document.querySelector('#position').classList.toggle('animate-slider-position');
    },2000);
})

// ############## Review section Javascript Ends here #################










// ############## Projects list Javascript Starts here ############


// Listener to show respective project images when clicked All tab(which is default) on load
window.addEventListener('load', ()=>{
    projectList.textContent = '';
    arr1.forEach((val)=>{
        let elm = document.createElement('img');
        elm.setAttribute('src',val);
        elm.className = 'project-image';
        projectList.appendChild(elm);
    });
});

// Listener to show respective project images when clicked All tab
allWork.addEventListener('click', ()=>{
    frontendWork.classList.remove('selected-project-tab');
    backendWork.classList.remove('selected-project-tab');
    allWork.classList.add('selected-project-tab');
    projectList.textContent = '';
    arr1.forEach((val)=>{
        let elm = document.createElement('img');
        elm.setAttribute('src',val);
        elm.className = 'project-image';
        elm.classList.toggle('animate-slider-paragraph');
        projectList.appendChild(elm);
        
    });
    
});

// Listener to show respective project images when clicked FrontEnd tab
frontendWork.addEventListener('click', ()=>{
    frontendWork.classList.add('selected-project-tab');
    backendWork.classList.remove('selected-project-tab');
    allWork.classList.remove('selected-project-tab');
    projectList.textContent = '';
    arr2.forEach((val)=>{
        let elm = document.createElement('img');
        elm.setAttribute('src',val);
        elm.className = 'project-image';
        projectList.appendChild(elm);
    });
    
});

// Listener to show respective project images when clicked Backend tab
backendWork.addEventListener('click', ()=>{
    frontendWork.classList.remove('selected-project-tab');
    backendWork.classList.add('selected-project-tab');
    allWork.classList.remove('selected-project-tab');
    projectList.textContent = '';
    arr3.forEach((val)=>{
        let elm = document.createElement('img');
        elm.setAttribute('src',val);
        elm.className = 'project-image';
        projectList.appendChild(elm);
    });
    
});

// ############## Projects list Javascript Ends here ############











// ########### Form Section Javascript Starts here ###############

// function to validate name
const validateName = ()=>{
    let value = nameInput.value.trim();
    if(value.length<3){
        nameInput.style.border = '1px solid red';
        return false;
    }else{
        nameInput.style.border = '1px solid #7081b94b';
        return true;
    }
}

// function to validate email 
const validateEmail = ()=>{
    let value = emailInput.value.trim();
    if(value.length<5 | (!value.includes('@'))){
        emailInput.style.border = '1px solid red';
        return false;
    }else{
        emailInput.style.border = '1px solid #7081b94b';
        return true;
    }
}

// function to validate user message
const validateMessage = ()=>{
    let value = messageInput.value.trim();
    if(value.length<3){
        messageInput.style.border = '1px solid red';
        return false;
    }else{
        messageInput.style.border = '1px solid #7081b94b';
        return true;
    }
}


// Listener to check if user fills the data correctly or not
submitBtn.addEventListener('click', ()=>{
    if(validateName() & validateEmail() & validateMessage()){
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
        window.alert('Congratulations!! Your Message has successfuly sent.');
    }else{
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
        window.alert('Something went wrong! Your Message failed to sent');
    }
});

// ############# Form section Javascript ends here ##############



