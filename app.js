document.addEventListener("DOMContentLoaded", () => {
    const projectsContainer = document.getElementById("projects-container");
    const wipContainer = document.getElementById("wip-container");

    projectsData.forEach(project => {
        // Create the HTML structure for a single project
        const projectElement = document.createElement("article");
        projectElement.className = "project-card";

        // Map the conclusions array to list items
        const conclusionsList = project.conclusions
            .map(point => `<li>${point}</li>`)
            .join("");

        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            ${project.disclaimer ? `<div class="disclaimer">⚠️ <strong>Disclaimer:</strong> ${project.disclaimer}</div>` : ""}
            
            <div class="project-section">
                <h4>🎯 The Challenge</h4>
                <p>${project.challenge}</p>
            </div>

            <div class="project-section">
                <h4>🛠️ The Approach</h4>
                <p>${project.approach}</p>
            </div>

            <div class="project-section">
                <h4>💡 Insights & Business Impact</h4>
                <p>${project.insights}</p>
            </div>

            <div class="project-section">
                <h4>🔑 Key Conclusions</h4>
                <ul>
                    ${conclusionsList}
                </ul>
            </div>
        `;

        // Append to the correct section based on status
        if (project.status === "completed") {
            projectsContainer.appendChild(projectElement);
        } else if (project.status === "wip") {
            wipContainer.appendChild(projectElement);
        }
    });
});
