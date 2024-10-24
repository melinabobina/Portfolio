var val = 1; 

function changeProjects(num, clickedButton){
    let projectButton1 = document.getElementById("button-1"); 
    let projectButton2 = document.getElementById("button-2");
    let projectButton3 = document.getElementById("button-3");
    let projectButton4 = document.getElementById("button-4");
    var projectDetailsTxtElement = document.getElementById("project-details-text");
    var projectDetailsTitleElement = document.getElementById("project-details-title");

    let filterButtons = document.getElementsByClassName("project-filter-buttons");
    for (let i = 0; i < filterButtons.length; i++) {
        filterButtons[i].style.backgroundColor = "black";
        filterButtons[i].style.color = "white"; // Reset to default
    }
    clickedButton.style.backgroundColor= "white";
    clickedButton.style.color= "black";
    
    switch(num) {
        case 1:   // hardware projects
            val = 1; 
            projectButton1.innerText = "Binary Calculator";
            projectButton2.innerText = "Coffee and Tea Level Indicator";
            projectButton3.innerText = "Traffic Light Simulator";
            projectButton4.innerText = "";
            projectButton4.style.backgroundColor = "black";
            projectButton4.style.borderStyle = "solid";
            projectDetailsTxtElement.innerText = "Built a circuit with rudimentary logic chips in order to create a working binary calculator for addition and subtraction";
            projectDetailsTitleElement.innerText = "Binary Calculator";
            break;

        case 2: // software projects
            val = 2;
            projectButton1.innerText = "STEMinist Website";
            projectButton2.innerText = "MATLAB App Design";
            projectButton3.innerText = "Unpipelined vs Pipelined Processor Simulation";
            projectButton4.innerText = "This Website!";
            projectButton4.style.backgroundColor = "white";
            projectButton4.style.borderStyle = "groove";
            projectDetailsTxtElement.innerText = "Managed a team of seven to develop a website honoring women in STEM using HTML, CSS, and JavaScript.\nDirected and mentored all team members to each create unique STEM themed games. \nEstablished weekly meetings to meet project timelines and foster a cohesive team environment, resulting in a successful and fully functional site.";
            projectDetailsTitleElement.innerText = "STEMIIST Website";
            break;

        case 3:  //embedded projects 
            val = 3;
            projectButton1.innerText = "Diesel Generator Monitor";
            projectButton2.innerText = "Ongoing: Maze Robot";
            projectButton3.innerText = "Ongoing: Neural Kinetic Sculpture";
            projectButton4.innerText = "";
            projectButton4.style.backgroundColor = "black";
            projectButton4.style.borderStyle = "solid";
            projectDetailsTxtElement.innerText = "Designed and implemented using RTOS and TI Launchpad, integrating GPIO sensors and real-time alarms to detect and alert for failure modes such as fuel depletion and radiator leaks. Collaborated and debugged throughout the semester to deliver a functional prototype and comprehensive documentation, while improving teamwork and version control through GitHub.";
            projectDetailsTitleElement.innerText = "Diesel Generator Monitor";
            break;

        case 4:  //creative projects
            val = 4;    
            projectButton1.innerText = "Bullet Journaling";
            projectButton2.innerText = "Sewing";
            projectButton3.innerText = "Speech";
            projectButton4.innerText = "";
            projectButton4.style.backgroundColor = "black";
            projectButton4.style.borderStyle = "solid";
            projectDetailsTxtElement.innerText = "Since 2017 I have been using bullet journaling to bpth organize my time and a creative outlet, which has allowed me to practice organization and flexing those creative muscles.";
            projectDetailsTitleElement.innerText = "Bullet Journaling";
            break;
    }
}

function changeDetails(num){
    var projectDetailsTxtElement = document.getElementById("project-details-text");
    var projectDetailsTitleElement = document.getElementById("project-details-title");
    switch(val){
        case 1:  // hardware
            if (num == 1) {
                projectDetailsTxtElement.innerText = "Built a circuit with rudimentary logic chips in order to create a working binary calculator for addition and subtraction";
                projectDetailsTitleElement.innerText = "Binary Calculator";
              } else if (num == 2) {
                projectDetailsTxtElement.innerText = "Designed using Multisim, debugged and built a circuit to indicate liquid levels in large containers of coffee and tea, adapting a pre-existing schematic for different beverage resistivities.";
                projectDetailsTitleElement.innerText = "Coffee and Tea Level Indicator";
              } else if (num == 3){
                projectDetailsTxtElement.innerText = "Researched different implementations of D flip-flops to create a Johnson Counter, allowing an efficient way to time the LEDs to create a simulation of traffic lights";
                projectDetailsTitleElement.innerText = "Breadboard Traffic Light Simulator";
              }
            break;  
        case 2:  // software
            if (num == 1) {
                projectDetailsTxtElement.innerText = "Managed a team of seven to develop a website honoring women in STEM using HTML, CSS, and JavaScript.\nDirected and mentored all team members to each create unique STEM themed games. \nEstablished weekly meetings to meet project timelines and foster a cohesive team environment, resulting in a successful and fully functional site.";
                projectDetailsTitleElement.innerText = "STEMinist Website";
              } else if (num == 2) {
                projectDetailsTxtElement.innerText = " Developed an object-oriented program in MATLAB to create several interactable components ";
                projectDetailsTitleElement.innerText = "MATLAB App Design";
              } else if (num == 3){
                projectDetailsTxtElement.innerText = "project details";
                projectDetailsTitleElement.innerText = "Unpipelined vs Pipelined Processor Simulation";
              } else { // val = 4 
                projectDetailsTxtElement.innerText = "project details";
                projectDetailsTitleElement.innerText = "This Website!";
              }
            break;  
        case 3:   // embedded 
            if (num == 1) {
                projectDetailsTxtElement.innerText = "Designed and implemented using RTOS and TI Launchpad, integrating GPIO sensors and real-time alarms to detect and alert for failure modes such as fuel depletion and radiator leaks. Collaborated and debugged throughout the semester to deliver a functional prototype and comprehensive documentation, while improving teamwork and version control through GitHub.";
                projectDetailsTitleElement.innerText = "Diesel Generator Monitor";
            } else if (num == 2) {
                projectDetailsTxtElement.innerText = "project details";
                projectDetailsTitleElement.innerText = "Ongoing: Maze Robot";
            } else if (num == 3){
                projectDetailsTxtElement.innerText = "Working with the UH Brain Center to create software and hardware to support a sculpture that uses brain signals to mobilize a sculpture with light, sound, and movement ";
                projectDetailsTitleElement.innerText = "Ongoing: Neural Kinetic Sculpture";
            }
            break;  
        case 4:  // creative
            if (num == 1) {
                projectDetailsTxtElement.innerText = "Since 2017 I have been using bullet journaling to bpth organize my time and a creative outlet, which has allowed me to practice organization and flexing those creative muscles.";
                projectDetailsTitleElement.innerText = "Bullet Journaling";
              } else if (num == 2) {
                projectDetailsTxtElement.innerText = "Self-taught seamstress in 2019 to learn the skills to design and sew garments, over 50 of which were later sold to customers.";
                projectDetailsTitleElement.innerText = "Sewing";
              } else if (num == 3){
                projectDetailsTxtElement.innerText = "Competed against dozens of schools in the Texas school system in UIL and invitational speech competitions to win over 20 medals in speech. Went on to win a state medal in prose interpretation junior year of highschool.";
                projectDetailsTitleElement.innerText = "Speech";
              }
            break;   
    }
    
    return;
}
