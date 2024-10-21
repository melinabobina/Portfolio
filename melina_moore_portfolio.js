

function changeProjects(num, clickedButton){
    let projectButton1 = document.getElementById("button-1"); 
    let projectButton2 = document.getElementById("button-2");
    let projectButton3 = document.getElementById("button-3");
    let projectButton4 = document.getElementById("button-4");
    var projectDetailsTxtElement = document.getElementById("project-details-text");

    let filterButtons = document.getElementsByClassName("project-filter-buttons");
    for (let i = 0; i < filterButtons.length; i++) {
        filterButtons[i].style.backgroundColor = "black";
        filterButtons[i].style.color = "white"; // Reset to default
    }
    clickedButton.style.backgroundColor= "white";
    clickedButton.style.color= "black";
    
    switch(num) {
        case 1:   // hardware projects
            projectButton1.innerText = "Binary Calculator";
            projectButton2.innerText = "Coffee and Tea Level Indicator";
            projectButton3.innerText = "Traffic Light Simulator";
            projectButton4.innerText = "";
            projectButton4.style.backgroundColor = "black";
            projectButton4.style.borderStyle = "solid";
            projectDetailsTxtElement.innerText = "Details of Binary Calculator here";
            break;

        case 2: // software projects
            projectButton1.innerText = "STEMinist Website";
            projectButton2.innerText = "MATLAB App Design";
            projectButton3.innerText = "Unpipelined vs Pipelined Processor Simulation";
            projectButton4.innerText = "This Website!";
            projectButton4.style.backgroundColor = "white";
            projectButton4.style.borderStyle = "groove";
            projectDetailsTxtElement.innerText = "Managed a team of seven to develop a website honoring women in STEM using HTML, CSS, and JavaScript.\nDirected and mentored all team members to each create unique STEM themed games. \nEstablished weekly meetings to meet project timelines and foster a cohesive team environment, resulting in a successful and fully functional site.";
            break;

        case 3:  //embedded projects 
            projectButton1.innerText = "Diesel Generator Monitor";
            projectButton2.innerText = "Ongoing: Maze Robot";
            projectButton3.innerText = "Ongoing: Neural Kinetic Sculpture";
            projectButton4.innerText = "";
            projectButton4.style.backgroundColor = "black";
            projectButton4.style.borderStyle = "solid";
            projectDetailsTxtElement.innerText = "Details of Binary Calculator here";
            break;

        case 4:  //creative projects
            projectButton1.innerText = "Bullet Journaling";
            projectButton2.innerText = "Sewing";
            projectButton3.innerText = "Speech";
            projectButton4.innerText = "";
            projectButton4.style.backgroundColor = "black";
            projectButton4.style.borderStyle = "solid";
            projectDetailsTxtElement.innerText = "Details of Binary Calculator here";
            break;
    }
}

function changeDetails(ProjectNumber){
    if(ProjectNumber)
    return;
}
