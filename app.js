document.addEventListener("DOMContentLoaded", () => {
    const homeView = document.getElementById("home-view");
    const projectView = document.getElementById("project-view");
    const gridContainer = document.getElementById("portfolio-grid");
    const projectContent = document.getElementById("project-content");

    // 1. Populate Home Page Grid
    projectsData.forEach(project => {
        const card = document.createElement("a");
        card.href = `#${project.id}`;
        card.className = "project-card";
        
        card.innerHTML = `
            <div class="card-image-container">
                <img src="${project.image}" alt="${project.title}" class="card-image" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\'><rect width=\\'100\\' height=\\'100\\' fill=\\'%23333\\'/></svg>'">
            </div>
            <div class="card-info">
                <span class="status-badge">${project.status}</span>
                <h3>${project.title}</h3>
            </div>
        `;
        gridContainer.appendChild(card);
    });

    // 2. Routing Logic
    function handleRoute() {
        const hash = window.location.hash.substring(1); // Remove the '#'
        
        if (hash) {
            // Find project and show project view
            const project = projectsData.find(p => p.id === hash);
            if (project) {
                renderProject(project);
                homeView.style.display = "none";
                projectView.style.display = "block";
                window.scrollTo(0, 0);
            }
        } else {
            // Show home view
            homeView.style.display = "block";
            projectView.style.display = "none";
            window.scrollTo(0, 0);
        }
    }

    // 3. Render Project Detail Page
    function renderProject(project) {
        const conclusionsList = project.conclusions.map(point => `<li>${point}</li>`).join("");
        
        projectContent.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-hero-image" onerror="this.style.display='none'">
            <h1 class="project-title">${project.title}</h1>
            
            ${project.disclaimer ? `<div class="disclaimer"><strong>Disclaimer:</strong> ${project.disclaimer}</div>` : ""}
            
            <div class="project-section">
                <h2>The Challenge</h2>
                <p>${project.challenge}</p>
            </div>

            <div class="project-section">
                <h2>The Approach</h2>
                <p>${project.approach}</p>
            </div>

            <div class="project-section">
                <h2>Insights & Business Impact</h2>
                <p>${project.insights}</p>
            </div>

            <div class="project-section">
                <h2>Key Conclusions</h2>
                <ul>
                    ${conclusionsList}
                </ul>
            </div>
        `;
    }

    // Listen for URL changes
    window.addEventListener("hashchange", handleRoute);
    
    // Initial load
    handleRoute();
});