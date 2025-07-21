function showTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    // Remove active class from all buttons
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the selected tab and mark button as active
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Add typing effect to the subtitle
const subtitle = document.querySelector('.hero-description');
const text = subtitle.textContent;
subtitle.textContent = '';

let i = 0;
const typeWriter = () => {
    if (i < text.length) {
        subtitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
};

setTimeout(typeWriter, 1500);


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        // Highlights current section in navigation
        link.style.color = link.getAttribute('href').slice(1) === current ?
            'var(--primary)' : 'var(--text-secondary)';
    });
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    observer.observe(el);
});


function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-open');
}

// Experience modal data
const experienceData = {
    'software-engineer': {
        title: 'Software Engineer Intern',
        company: 'PINScale Tech Pvt. Ltd.',
        duration: 'May 2024 - Aug 2024',
        highlights: ['Full-Stack Development', 'Internal Tools', 'Team Collaboration'],
        responsibilities: [
            'Streamlined order management for sales team by developing full-stack internal tool using Python, HTML, CSS, and JavaScript',
            'Built dynamic UI components like search filters, order forms, and status indicators using vanilla JavaScript and responsive design',
            'Created backend scripts in Python to handle form submissions, data parsing, and real-time updates without external frameworks',
            'Collaborated with senior developer to test and debug the tool, documenting code and functionality for future updates'
        ],
        technologies: ['Python', 'JavaScript', 'HTML/CSS', 'Data Processing', 'Form Handling', 'Real-time Updates']
    },
    'research-assistant': {
        title: 'Graduate Research Assistant',
        company: 'University of Oklahoma',
        duration: 'Sep 2023 - May 2025',
        highlights: ['Full-Stack Development', 'Process Automation', 'Code Optimization'],
        responsibilities: [
            'Engineered full-stack web applications using Django (Python) and front-end technologies (JavaScript, HTML, CSS) to replace manual data processing tools and streamline user workflows.',
            'Recreated and extended Excel-based logic into scalable web forms, enabling research staff to input data, trigger calculations, and generate outputs via a web interface.',
            'Refactored computational logic into modular Django views and Python functions, packaged for deployment by non-technical end users.'
        ],
        technologies: ['Pythibn', 'JavaScript', 'HTML/CSS', 'Automation', 'UI Development', 'Django']
    },
    'senior-analyst': {
        title: 'Senior Web Analyst',
        company: 'PINScale Tech Pvt. Ltd., India',
        duration: 'May 2022 - July 2023',
        highlights: ['25% ROAS Increase', '30% Tracking Accuracy', '7% Conversion Boost'],
        responsibilities: [
            'Increased ROAS by 25% through multi-touch attribution modeling using GA4 and BigQuery, reallocating ad spend toward high-converting channels',
            'Enabled data-driven campaign decisions by building real-time marketing performance dashboards using Looker Studio and Power BI',
            'Improved tracking accuracy by 30% by implementing QA-tested GTM strategy with structured data layers',
            'Increased conversion rates by 7% through A/B testing initiatives using statistical models and confidence intervals',
            'Drove 15% engagement increase through personalization experiments via Mixpanel and Google Optimize',
            'Reduced manual tagging errors by 35% by automating UTM tracking framework'
        ],
        technologies: ['GA4', 'BigQuery', 'Looker Studio', 'Power BI', 'GTM', 'Mixpanel', 'Statistical Analysis', 'A/B Testing']
    },
    'web-analyst': {
        title: 'Web Analyst',
        company: 'ProYuga Tech Ltd., India',
        duration: 'Oct 2020 - Apr 2022',
        highlights: ['22% Conversion Increase', '28% Churn Reduction', 'VR Analytics'],
        responsibilities: [
            'Improved checkout conversion by 22% by analyzing VR subscription funnel performance using GA4 and SQL to identify friction points',
            'Enabled scalable tracking by defining GTM data layer structures and partnering with developers to implement custom GA4 events',
            'Enhanced campaign analysis by contributing to event-to-database mapping logic for GA4 backend integration',
            'Reduced churn by 28% through segmentation-based analysis identifying risk patterns for targeted retention campaigns'
        ],
        technologies: ['GA4', 'SQL', 'GTM', 'Data Analysis', 'Funnel Optimization', 'Customer Segmentation']
    },
    'platform-manager': {
        title: 'Senior Platform Manager',
        company: 'ProYuga Tech Ltd., India',
        duration: 'Nov 2017 - Sep 2020',
        highlights: ['Team Leadership', 'Process Automation', 'System Integration'],
        responsibilities: [
            'Boosted operational efficiency by leading a team of 7 to develop automation tools using Zoho Creator and Excel',
            'Enabled unified customer lifecycle visibility by integrating CRM and email platforms into Zoho dashboards via APIs',
            'Improved executive decision-making by creating dashboards aggregating CRM and campaign data',
            'Enhanced lead segmentation by merging CRM, form, and campaign data to create comprehensive customer profiles'
        ],
        technologies: ['Zoho Creator', 'Excel', 'API Integration', 'CRM', 'Dashboard Development', 'Team Leadership']
    }
};

function openModal(experienceId) {
    const modal = document.getElementById('experienceModal');
    const data = experienceData[experienceId];

    if (!data) return;

    // Populate modal content
    document.getElementById('modalJobTitle').textContent = data.title;
    document.getElementById('modalCompany').textContent = data.company;
    document.getElementById('modalDuration').textContent = data.duration;

    // Populate highlights (achievements for modal)
    const highlightsContainer = document.getElementById('modalHighlights');
    highlightsContainer.innerHTML = data.highlights.map(highlight =>
        `<span class="modal-highlight-item">${highlight}</span>`
    ).join('');

    // Populate responsibilities
    const responsibilitiesContainer = document.getElementById('modalResponsibilities');
    responsibilitiesContainer.innerHTML = data.responsibilities.map(responsibility =>
        `<div class="modal-responsibility-item">${responsibility}</div>`
    ).join('');

    // Populate technologies
    const techContainer = document.getElementById('modalTechTags');
    techContainer.innerHTML = data.technologies.map(tech =>
        `<span class="modal-tech-tag">${tech}</span>`
    ).join('');

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    const modal = document.getElementById('experienceModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal when clicking outside
document.getElementById('experienceModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Initialize experience section when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Tree timeline experience loaded successfully');
});