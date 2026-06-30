/* ==========================================================================
   THRESHOLD TERMINAL REDESIGN DATA AND CONTROLLER
   ========================================================================== */

// Helper: Generate terminal bar
function getTerminalBar(level) {
    const totalBlocks = 15;
    const filledBlocks = Math.round((level / 100) * totalBlocks);
    const emptyBlocks = totalBlocks - filledBlocks;
    return `<span class="diag-fill">${"█".repeat(filledBlocks)}</span>${"░".repeat(emptyBlocks)}`;
}

const ARCHIVE_TEMPLATES = {
    about_bio: () => `
        <div class="screen-header">
            <div class="screen-meta">guest@threshold:~/archives/root/about_bio.md</div>
            <h2 class="screen-title">System Bio Archive</h2>
        </div>
        <div class="screen-content">
            <p>I am Varad Dubey, an AIML Engineering student and developer based in Indore, India. I specialize in designing and engineering machine learning systems and intelligent frontend interfaces.</p>
            <p>Career Objective: "To achieve professional and financial growth by working and learning with experienced professionals while contributing to organizational success."</p>
            <p>My workflow focuses on Python engineering, computer vision libraries, and minimalist tech layouts. Inspired by dark metallic layers and terminal aesthetics, I build layouts that emphasize raw usability, speed, and interactive feedback loops.</p>
            
            <div class="bio-metrics">
                <div class="metric-card">
                    <div class="metric-val">AIML</div>
                    <div class="metric-lbl">SPECIALIZATION</div>
                </div>
                <div class="metric-card">
                    <div class="metric-val">7.11</div>
                    <div class="metric-lbl">B.TECH CGPA</div>
                </div>
                <div class="metric-card">
                    <div class="metric-val">English, Hindi, French</div>
                    <div class="metric-lbl">LANGUAGES KNOWN</div>
                </div>
            </div>
            
            <div style="margin-top: 2rem; border-top: 1px dashed var(--border-color); padding-top: 1.5rem;">
                <div style="font-size: 0.72rem; margin-bottom: 0.5rem;"><span style="color: var(--text-muted);">PHONE:</span> +91 9179892882</div>
                <div style="font-size: 0.72rem; margin-bottom: 0.5rem;"><span style="color: var(--text-muted);">EMAIL:</span> varaddubey2020@gmail.com</div>
                <div style="font-size: 0.72rem; margin-bottom: 0.5rem;"><span style="color: var(--text-muted);">GITHUB:</span> github.com/ViShU-VaRaD</div>
                <div style="font-size: 0.72rem; margin-bottom: 0.5rem;"><span style="color: var(--text-muted);">PASSPORT:</span> Applied</div>
            </div>

            <div style="margin-top: 1.8rem;">
                <a href="assets/varad_resume.pdf" download="Varad_Dubey_Resume.pdf" class="btn-cli" style="display: inline-block;">[ DOWNLOAD RESUME PDF ]</a>
            </div>
        </div>
    `,

    education: () => `
        <div class="screen-header">
            <div class="screen-meta">guest@threshold:~/archives/root/education.log</div>
            <h2 class="screen-title">Academic Qualifications</h2>
        </div>
        <div class="screen-content">
            <div class="diagnostic-tree">
                <div class="diag-group">
                    <h4><i class="fa-solid fa-graduation-cap"></i> HIGHER EDUCATION</h4>
                    <div class="diag-list">
                        <div class="diag-item" style="border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 1rem;">
                            <div class="diag-header"><span class="diag-name">B.Tech in CSE (Artificial Intelligence & Machine Learning)</span><span>2024 - 2028</span></div>
                            <p style="font-size: 0.7rem; color: var(--text-dim); margin-top: 0.3rem;">
                                Acropolis Institute of Technology and Research, Indore (Affiliated to RGPV Bhopal)
                                <br>Current Average: 7.11 CGPA
                            </p>
                        </div>
                    </div>
                </div>

                <div class="diag-group">
                    <h4><i class="fa-solid fa-school"></i> SCHOOL EDUCATION</h4>
                    <div class="diag-list">
                        <div class="diag-item" style="border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 1rem; margin-top: 1rem;">
                            <div class="diag-header"><span class="diag-name">HSC (Higher Secondary Certificate)</span><span>2024</span></div>
                            <p style="font-size: 0.7rem; color: var(--text-dim); margin-top: 0.3rem;">
                                St. Antony Convent School (CBSE)
                                <br>Performance: 70%
                            </p>
                        </div>
                        <div class="diag-item" style="border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 1rem; margin-top: 1rem;">
                            <div class="diag-header"><span class="diag-name">SSC (Secondary School Certificate)</span><span>2022</span></div>
                            <p style="font-size: 0.7rem; color: var(--text-dim); margin-top: 0.3rem;">
                                St. Antony Convent School (CBSE)
                                <br>Performance: 70%
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    
    proj_removal: () => `
        <div class="screen-header">
            <div class="screen-meta">guest@threshold:~/archives/root/projects/smart_removal.sys</div>
            <h2 class="screen-title">Smart Object Removal Tool</h2>
        </div>
        <div class="screen-content">
            <div class="project-viewer">
                <div class="project-showcase">
                    <div class="project-tint-wrapper">
                        <img src="assets/smart_removal.png" alt="Smart Object Removal" class="project-img-mono">
                    </div>
                    <div class="project-actions">
                        <a href="https://github.com/ViShU-VaRaD" target="_blank" class="btn-cli">[ GIT_REPOSITORY ]</a>
                    </div>
                </div>
                <div class="project-specs">
                    <div class="spec-line"><span class="spec-label">INDEX CLASS:</span><span class="spec-value">Computer Vision (CV) System</span></div>
                    <div class="spec-line"><span class="spec-label">CORE ENGINES:</span><span class="spec-value">OpenCV, Python Libraries</span></div>
                    <div class="spec-line"><span class="spec-label">PORT TYPE:</span><span class="spec-value">Intelligent Eraser Sandbox</span></div>
                    <div class="spec-line"><span class="spec-label">ROLE:</span><span class="spec-value">Software Developer</span></div>
                    <div class="spec-line"><span class="spec-label">DESCRIPTION:</span><span class="spec-value">Working on a minor project expected to deliver a real-time solution that intelligently detects and erases unwanted or distracting objects/people in visual media.</span></div>
                </div>
            </div>
        </div>
    `,
    
    skills_matrix: () => `
        <div class="screen-header">
            <div class="screen-meta">guest@threshold:~/archives/root/skills_matrix.log</div>
            <h2 class="screen-title">System Diagnostic Log</h2>
        </div>
        <div class="screen-content">
            <div class="diagnostic-tree">
                <div class="diag-group">
                    <h4><i class="fa-solid fa-code"></i> DEVELOPER FRONTEND ENGINES</h4>
                    <div class="diag-list">
                        <div class="diag-item">
                            <div class="diag-header"><span class="diag-name">HTML / CSS / JavaScript</span><span>90%</span></div>
                            <div class="diag-bar">[${getTerminalBar(90)}]</div>
                        </div>
                    </div>
                </div>
                
                <div class="diag-group">
                    <h4><i class="fa-solid fa-server"></i> DEVELOPER BACKEND & DATABASE PARSERS</h4>
                    <div class="diag-list">
                        <div class="diag-item">
                            <div class="diag-header"><span class="diag-name">Flask / FastAPI / REST APIs</span><span>85%</span></div>
                            <div class="diag-bar">[${getTerminalBar(85)}]</div>
                        </div>
                        <div class="diag-item">
                            <div class="diag-header"><span class="diag-name">MySQL Database</span><span>80%</span></div>
                            <div class="diag-bar">[${getTerminalBar(80)}]</div>
                        </div>
                    </div>
                </div>

                <div class="diag-group">
                    <h4><i class="fa-solid fa-brain"></i> AIML FRAMEWORKS & LANGUAGES</h4>
                    <div class="diag-list">
                        <div class="diag-item">
                            <div class="diag-header"><span class="diag-name">Python Language</span><span>95%</span></div>
                            <div class="diag-bar">[${getTerminalBar(95)}]</div>
                        </div>
                        <div class="diag-item">
                            <div class="diag-header"><span class="diag-name">Pandas / NumPy / Matplotlib</span><span>88%</span></div>
                            <div class="diag-bar">[${getTerminalBar(88)}]</div>
                        </div>
                        <div class="diag-item">
                            <div class="diag-header"><span class="diag-name">PyTorch</span><span>82%</span></div>
                            <div class="diag-bar">[${getTerminalBar(82)}]</div>
                        </div>
                    </div>
                </div>

                <div class="diag-group">
                    <h4><i class="fa-solid fa-screwdriver-wrench"></i> SYSTEM TOOLS</h4>
                    <div class="diag-list">
                        <div class="diag-item">
                            <div class="diag-header"><span class="diag-name">GitHub / Version Control</span><span>90%</span></div>
                            <div class="diag-bar">[${getTerminalBar(90)}]</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    certifications: () => `
        <div class="screen-header">
            <div class="screen-meta">guest@threshold:~/archives/root/certifications.log</div>
            <h2 class="screen-title">Verified Certifications</h2>
        </div>
        <div class="screen-content">
            <div class="diagnostic-tree">
                <div class="diag-group">
                    <h4><i class="fa-solid fa-certificate"></i> ACTIVE CREDENTIALS</h4>
                    <div class="diag-list">
                        <div class="diag-item" style="border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 1rem;">
                            <div class="diag-header"><span class="diag-name">Data Structure and Algorithms using Java</span><span>IIT Kharagpur / NPTEL</span></div>
                            <p style="font-size: 0.7rem; color: var(--text-dim); margin-top: 0.3rem;">
                                Completed academic course on Java DSA algorithms, conducted by IIT Kharagpur.
                            </p>
                        </div>
                        <div class="diag-item" style="border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 1rem; margin-top: 1rem;">
                            <div class="diag-header"><span class="diag-name">Data Science Foundation Certification</span><span>Infosys Springboard</span></div>
                            <p style="font-size: 0.7rem; color: var(--text-dim); margin-top: 0.3rem;">
                                Complete foundations study of data structures, statistical analysis, and machine learning models.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    
    contact_me: () => `
        <div class="screen-header">
            <div class="screen-meta">guest@threshold:~/archives/root/contact_me.sh</div>
            <h2 class="screen-title">Contact Me</h2>
        </div>
        <div class="shell-interface">
            <div class="shell-log" id="shell-log">
                // THRESHOLD QUANTUM COMM CHANNEL SECURED //
                // STATUS: READY FOR SEND DISPATCH //
            </div>
            
            <form id="shell-form" class="shell-form" autocomplete="off">
                <div class="shell-prompt">
                    <span class="prompt-path">guest@threshold:~/contact</span><span class="prompt-dollar">$</span>
                    <span class="prompt-cmd">input-sender-name:</span>
                    <div class="shell-input-wrapper">
                        <input type="text" id="shell-name" class="shell-text-input" placeholder="type name..." required>
                    </div>
                </div>
                
                <div class="shell-prompt">
                    <span class="prompt-path">guest@threshold:~/contact</span><span class="prompt-dollar">$</span>
                    <span class="prompt-cmd">input-sender-email:</span>
                    <div class="shell-input-wrapper">
                        <input type="email" id="shell-email" class="shell-text-input" placeholder="type email address..." required>
                    </div>
                </div>
                
                <div class="shell-prompt">
                    <span class="prompt-path">guest@threshold:~/contact</span><span class="prompt-dollar">$</span>
                    <span class="prompt-cmd">input-message-body:</span>
                    <div class="shell-input-wrapper">
                        <textarea id="shell-message" class="shell-text-input shell-textarea" placeholder="type message details..." required></textarea>
                    </div>
                </div>
                
                <button type="submit" class="btn-execute">[ EXECUTE CONTACT_ME.SH ]</button>
            </form>
        </div>
    `,

    download_resume: () => `
        <div class="screen-header">
            <div class="screen-meta">guest@threshold:~/archives/root/download_resume.sh</div>
            <h2 class="screen-title">Executing download_resume.sh</h2>
        </div>
        <div class="screen-content">
            <div class="shell-interface">
                <div class="shell-log" id="download-log">
                    // INITIALIZING SECURE PACKET DOWNLOAD...<br>
                    // LINK ESTABLISHED: assets/varad_resume.pdf<br>
                    // DOWNLOAD TRIGGERED IN BROWSER SYSTEM.<br>
                    <br>
                    <a href="assets/varad_resume.pdf" download="Varad_Dubey_Resume.pdf" class="btn-execute" style="display:inline-block; margin-top:1rem; text-decoration:none;">[ RE-TRIGGER DOWNLOAD ]</a>
                </div>
            </div>
        </div>
    `
};

/* ==========================================================================
   INITIALIZATION & CONTROL
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initCustomCursor();
    initTerminalController();
    initHUDControls();
    initDataStreamFeed();
    
    // Load default tab (about_bio)
    loadTab("about_bio");
});

/* ==========================================================================
   CUSTOM CURSOR DESIGN IMPLEMENTATION
   ========================================================================== */

function initCustomCursor() {
    const cursorOutline = document.getElementById("cursor-outline");
    const cursorDot = document.getElementById("cursor-dot");
    
    if (!cursorOutline || !cursorDot) return;

    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;

    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
    });

    function animateCursor() {
        const ease = 0.18;
        outlineX += (mouseX - outlineX) * ease;
        outlineY += (mouseY - outlineY) * ease;
        
        cursorOutline.style.left = `${outlineX}px`;
        cursorOutline.style.top = `${outlineY}px`;
        
        requestAnimationFrame(animateCursor);
    }
    requestAnimationFrame(animateCursor);

    // Interactive element hovers
    const selectors = "a, button, .hud-btn, .file-item, .btn-terminal, spline-viewer, .project-tint-wrapper";
    
    document.addEventListener("mouseover", (e) => {
        if (e.target.closest(selectors)) {
            cursorOutline.classList.add("custom-cursor-hover");
        }
    });

    document.addEventListener("mouseout", (e) => {
        if (e.target.closest(selectors)) {
            cursorOutline.classList.remove("custom-cursor-hover");
        }
    });
}

/* ==========================================================================
   EXPLORER TERMINAL TREE TABS LOADER
   ========================================================================== */

function initTerminalController() {
    const fileItems = document.querySelectorAll(".file-item");
    
    fileItems.forEach(item => {
        item.addEventListener("click", () => {
            const fileKey = item.getAttribute("data-file");
            
            // Remove active from all items
            fileItems.forEach(i => i.classList.remove("active"));
            
            // Add active to current
            item.classList.add("active");
            
            // Load tab
            loadTab(fileKey);
        });
    });
}

/**
 * Loads a specified tab/file archive into the terminal content screen.
 * Triggers fade transitions, injects responsive templates, and executes shell scripts.
 * 
 * @param {string} fileKey - Key of the archive template to compile
 */
function loadTab(fileKey) {
    const mainContent = document.getElementById("terminal-content");
    if (!mainContent) return;

    // Apply fade-out animation
    mainContent.style.opacity = "0";
    mainContent.style.transform = "translateY(5px)";
    mainContent.style.transition = "opacity 0.2s ease, transform 0.2s ease";

    setTimeout(() => {
        if (ARCHIVE_TEMPLATES[fileKey]) {
            mainContent.innerHTML = ARCHIVE_TEMPLATES[fileKey]();
            
            // Re-bind actions if contact/transmission form loaded
            if (fileKey === "contact_me") {
                initShellFormHandler();
            } else if (fileKey === "download_resume") {
                // Trigger download programmatically
                const link = document.createElement('a');
                link.href = 'assets/varad_resume.pdf';
                link.download = 'Varad_Dubey_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        } else {
            mainContent.innerHTML = `<div class="error-node">[ ERROR // FILE NOT COMPILED OR MISSING ]</div>`;
        }
        
        // Apply fade-in animation
        mainContent.style.opacity = "1";
        mainContent.style.transform = "translateY(0)";
    }, 200);
}

/* ==========================================================================
   HUD SYSTEM MENU NAVIGATION ACTIONS
   ========================================================================== */

function initHUDControls() {
    const hudLinks = document.querySelectorAll(".hud-link");
    const fileItems = document.querySelectorAll(".file-item");

    hudLinks.forEach((link, idx) => {
        link.addEventListener("click", (e) => {
            // Remove active class from HUD menu links
            hudLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");

            // Scroll to the main terminal console panel
            const consoleSection = document.getElementById("console");
            if (consoleSection) {
                consoleSection.scrollIntoView({ behavior: "smooth" });
            }

            // Map navigation links directly to terminal tree folder files:
            // link 0 -> Home (not mapped, keeps terminal active)
            // link 1 -> Project Archives (smart_removal.sys)
            // link 2 -> Bio Archive (about_bio.md)
            // link 3 -> Contact (transmission.sh)
            if (idx === 1 && fileItems[2]) {
                fileItems[2].click();
            } else if (idx === 2 && fileItems[0]) {
                fileItems[0].click();
            } else if (idx === 3 && fileItems[5]) {
                fileItems[5].click();
            }
        });
    });

    // Reset button mock action
    const btnReset = document.getElementById("btn-reset");
    if (btnReset) {
        btnReset.addEventListener("click", () => {
            const body = document.body;
            body.style.opacity = "0.1";
            setTimeout(() => {
                body.style.opacity = "1";
                loadTab("about_bio");
                fileItems.forEach(i => i.classList.remove("active"));
                if (fileItems[0]) fileItems[0].classList.add("active");
                hudLinks.forEach(l => l.classList.remove("active"));
                if (hudLinks[0]) hudLinks[0].classList.add("active");
            }, 500);
        });
    }

    // Fullscreen toggle mockup
    const btnFullscreen = document.getElementById("btn-fullscreen");
    if (btnFullscreen) {
        btnFullscreen.addEventListener("click", () => {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(err => {
                    console.log(`Error enabling fullscreen: ${err.message}`);
                });
            } else {
                document.exitFullscreen();
            }
        });
    }
}

/* ==========================================================================
   DYNAMIC MONOSPACE HUD DATA STREAM LOGGER
   ========================================================================== */

function initDataStreamFeed() {
    const liveLogs = document.getElementById("live-logs");
    if (!liveLogs) return;

    const nodes = ["GRID_ALPHA", "SECURE_0x9", "NODE_AMETHYST", "CORE_KERNEL", "LINK_VESPERA"];
    const addrs = ["0x5F1A", "0x7FFF", "0x3A0E", "0x9E2B", "0x12BC", "0x88DD"];

    setInterval(() => {
        const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
        const randomAddr = addrs[Math.floor(Math.random() * addrs.length)];
        const randomVal = (Math.random() * 1000).toFixed(4);
        const randomLatency = Math.floor(Math.random() * 32) + 2;

        liveLogs.textContent = `AUX DATA STREAM: [${randomAddr}] // SCANNING NODE: ${randomNode} // VAL: ${randomVal} // LATENCY: ${randomLatency}ms`;
    }, 1500);
}

/* ==========================================================================
   BASH FORM DISPATCH HANDLER & ANIMATION FEEDBACK
   ========================================================================== */

function initShellFormHandler() {
    const form = document.getElementById("shell-form");
    const shellLog = document.getElementById("shell-log");
    
    if (!form || !shellLog) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector(".btn-execute");
        const inputs = form.querySelectorAll(".shell-text-input");
        
        // Input details
        const nameVal = document.getElementById("shell-name").value;
        const emailVal = document.getElementById("shell-email").value;
        const msgVal = document.getElementById("shell-message").value;

        // Freeze form
        submitBtn.disabled = true;
        inputs.forEach(i => i.disabled = true);
        
        // Set loading logs inside mock shell
        shellLog.style.color = "var(--text-dim)";
        shellLog.innerHTML = `
            guest@threshold:~$ ./transmission.sh --run<br>
            // INITIALIZING DISPATCH SEQUENCE...<br>
            // RESOLVING DNS: target(Varad Server)... OK<br>
            // SECURING DATA PACKETS [name: "${nameVal}", email: "${emailVal}"]... OK<br>
            // ENCRYPTING COMPILATION... PENDING DISPATCH
        `;

        setTimeout(() => {
            // Success response logs
            shellLog.style.color = "#10b981"; // Success terminal green
            shellLog.innerHTML = `
                guest@threshold:~$ ./transmission.sh --run<br>
                // COMPILATION SENT SUCCESSFULLY.<br>
                // DISPATCH SECURED. TRANSACTION REGISTERED AT TARGET CORE.<br>
                // THANK YOU FOR VISITING THRESHOLD CORE SYSTEM.
            `;
            form.reset();
            
            // Release inputs
            submitBtn.disabled = false;
            inputs.forEach(i => i.disabled = false);
            
            // Restore default colors after 6 seconds
            setTimeout(() => {
                shellLog.style.color = "var(--text-muted)";
                shellLog.innerHTML = `
                    // THRESHOLD QUANTUM COMM CHANNEL SECURED //<br>
                    // STATUS: READY FOR SEND DISPATCH //
                `;
            }, 6000);
            
        }, 2200);
    });
}
