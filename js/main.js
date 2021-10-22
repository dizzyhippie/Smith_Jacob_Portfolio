import { getPortfolioData } from "./components/dataMiner.js";
(() => {
    const   portfolio = document.querySelector("#portfolio"),
            theTemplate = document.querySelector("#portfolio-template").content;

            function buildTeam(info) {
                info.forEach(project=> {
                    let panel = theTemplate.cloneNode(true),
                        projectInfo = panel.firstElementChild.children;
        
                    // add the custom data attribute value to the section tag inside the template
                    panel.firstElementChild.dataset.key = project.id;

                    projectInfo[0].textContent = project.name;
                    projectInfo[1].textContent = project.industry;
                    
        
                    // put the virtual panel in the team section in our HTML page
                    portfolio.appendChild(panel);
                })
            }

            getPortfolioData(null, buildTeam);

   
})()