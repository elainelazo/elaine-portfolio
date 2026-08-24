const EMAIL = "elainelazo1015@gmail.com";


// ========================================
// NAVIGATION
// ========================================

function scrollToSection(id) {
    const element = document.getElementById(id);

    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


function switchTab(tab, button) {

    // Remove active state from all tabs
    document.querySelectorAll(".tab").forEach(tabButton => {
        tabButton.classList.remove("active");
    });

    // Add active state to selected tab
    if (button) {
        button.classList.add("active");
    }

    const pages = {
        about: "about-page",
        projects: "projects-page",
        photos: "photos-page",
        friends: "friends-page",
        resume: "resume-page",
        more: "more-page"
    };

    // Hide all tab pages
    document.querySelectorAll(".tab-page").forEach(page => {
        page.classList.remove("show");
    });

    // Show the main feed
    if (tab === "posts") {

        const contentGrid = document.querySelector(".content-grid");

        if (contentGrid) {
            contentGrid.style.display = "grid";
        }

        const profile = document.querySelector(".profile-shell");

        if (profile) {
            profile.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

        return;
    }

    // Hide feed
    const contentGrid = document.querySelector(".content-grid");

    if (contentGrid) {
        contentGrid.style.display = "none";
    }

    // Show selected page
    const page = document.getElementById(pages[tab]);

    if (page) {
        page.classList.add("show");

        page.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


// ========================================
// MESSAGE MODAL
// ========================================

function openMessage() {

    const modal = document.getElementById("messageModal");

    if (!modal) return;

    modal.classList.add("show");

    modal.setAttribute("aria-hidden", "false");

    const nameInput = document.getElementById("senderName");

    if (nameInput) {
        setTimeout(() => {
            nameInput.focus();
        }, 100);
    }
}


function closeMessage() {

    const modal = document.getElementById("messageModal");

    if (!modal) return;

    modal.classList.remove("show");

    modal.setAttribute("aria-hidden", "true");
}


// ========================================
// CONTACT FORM
// ========================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("senderName").value.trim();

        const email =
            document.getElementById("senderEmail").value.trim();

        const message =
            document.getElementById("senderMessage").value.trim();


        const subject = encodeURIComponent(
            `Portfolio inquiry from ${name}`
        );


        const body = encodeURIComponent(
`Hi Elaine,

${message}

------------------------------

Name: ${name}
Email: ${email}`
        );


        window.location.href =
            `mailto:${EMAIL}?subject=${subject}&body=${body}`;

    });
}


// ========================================
// COPY EMAIL
// ========================================

function copyEmail() {

    if (navigator.clipboard) {

        navigator.clipboard
            .writeText(EMAIL)
            .then(() => {

                showToast(
                    `Email copied: ${EMAIL}`
                );

            })
            .catch(() => {

                showToast(EMAIL);

            });

    } else {

        showToast(EMAIL);

    }
}


// ========================================
// TOAST MESSAGE
// ========================================

function showToast(text) {

    let toast = document.getElementById("toast");


    if (!toast) {

        toast = document.createElement("div");

        toast.id = "toast";


        Object.assign(toast.style, {

            position: "fixed",

            bottom: "25px",

            left: "50%",

            transform: "translateX(-50%)",

            background: "#1c1e21",

            color: "#ffffff",

            padding: "11px 16px",

            borderRadius: "8px",

            zIndex: "300",

            fontSize: "13px",

            boxShadow:
                "0 5px 20px rgba(0,0,0,.25)"

        });


        document.body.appendChild(toast);
    }


    toast.textContent = text;


    clearTimeout(window.__toastTimer);


    window.__toastTimer = setTimeout(() => {

        toast.remove();

    }, 2600);

}


// ========================================
// LIKE BUTTON
// ========================================

function react(button) {

    const liked =
        button.dataset.liked === "true";


    button.dataset.liked =
        String(!liked);


    if (liked) {

        button.textContent = "♡ Like";

        button.style.color = "";

    } else {

        button.textContent = "♥ Liked";

        button.style.color = "#1877f2";

    }

}


// ========================================
// PROJECT DATA
// ========================================

const projectData = {

    dgate: {

        icon: "↗",

        title: "DGATE: Disbursement Gate",

        type: "Professional Project",

        text:
            "A payment and disbursement platform supporting merchant fund-disbursement workflows. Elaine contributed to APIs, services, back-office functionality, system integrations, troubleshooting and feature enhancements using C#/.NET, SQL and web technologies.",

        tags: [
            "C#",
            ".NET",
            "RESTful API",
            "SOAP",
            "SQL Server",
            "Git"
        ]

    },


    happyhands: {

        icon: "🕹",

        title: "HappyHands",

        type: "Capstone Project",

        text:
            "An interactive AR-based nursery rhymes and mini-games collection for kindergarten students. The project used a markerless AR approach and was developed with Unity 3D and C# as the primary programming language.",

        tags: [
            "Unity 3D",
            "C#",
            "AR",
            "Markerless Algorithm",
            "Game Development"
        ]

    },


    customeyes: {

        icon: "👓",

        title: "CustomEyes",

        type: "College Project",

        text:
            "An eyeglass e-commerce website developed using ReactJS, HTML, CSS and Bootstrap, with threat detection and analysis considerations included in the project, that apparently, I don't have access to the source code anymore.",

        tags: [
            "ReactJS",
            "HTML",
            "CSS",
            "Bootstrap",
            "E-commerce"
        ]

    }

};


// ========================================
// OPEN PROJECT
// ========================================

function openProject(id) {

    const project = projectData[id];

    if (!project) return;


    const projectContent =
        document.getElementById("projectContent");


    if (!projectContent) return;


    projectContent.innerHTML = `

        <div class="project-emoji">
            ${project.icon}
        </div>

        <h2>
            ${project.title}
        </h2>

        <p>
            ${project.text}
        </p>

        <div>

            ${project.tags
                .map(tag =>
                    `<span class="tag">${tag}</span>`
                )
                .join("")
            }

        </div>

    `;


    const modal =
        document.getElementById("projectModal");


    if (modal) {

        modal.classList.add("show");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

    }

}


// ========================================
// CLOSE PROJECT
// ========================================

function closeProject() {

    const modal =
        document.getElementById("projectModal");


    if (!modal) return;


    modal.classList.remove("show");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

}


// ========================================
// RESUME BUTTON
// ========================================

function downloadResume() {

    /*
        Later, replace this with your actual
        hosted resume URL.

        Example:

        window.open(
            "https://yourwebsite.com/resume.pdf",
            "_blank"
        );
    */


    showToast(
        "Resume link coming soon 👀"
    );

}


// ========================================
// CLOSE MODALS WHEN CLICKING OUTSIDE
// ========================================

document
    .querySelectorAll(".modal-backdrop")
    .forEach(modal => {

        modal.addEventListener(
            "click",
            event => {

                if (event.target === modal) {

                    modal.classList.remove("show");

                    modal.setAttribute(
                        "aria-hidden",
                        "true"
                    );

                }

            }
        );

    });


// ========================================
// ESC KEY CLOSES MODALS
// ========================================

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeMessage();

            closeProject();

        }

    }
);