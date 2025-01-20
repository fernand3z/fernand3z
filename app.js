// Education section toggle functionality
function toggleEducation() {
    const details = document.getElementById('educationDetails');
    const icon = document.querySelector('.collapse-icon');
    if (details.style.display === 'none' || !details.style.display) {
        details.style.display = 'block';
        icon.textContent = '▼';
    } else {
        details.style.display = 'none';
        icon.textContent = '▶';
    }
}

// Hide education details initially
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('educationDetails').style.display = 'none';
    document.querySelector('.collapse-icon').textContent = '▶';
});

// Adventa experience toggle functionality
function toggleAdventa() {
    const details = document.getElementById('adventaDetails');
    const icon = document.querySelector('.collapse-icon-adventa');
    if (details.style.display === 'none' || !details.style.display) {
        details.style.display = 'block';
        icon.textContent = '▼';
    } else {
        details.style.display = 'none';
        icon.textContent = '▶';
    }
}

// Hide Adventa details initially
document.addEventListener('DOMContentLoaded', function() {
    // Existing education hide code...
    
    // Hide Adventa details
    document.getElementById('adventaDetails').style.display = 'none';
    document.querySelector('.collapse-icon-adventa').textContent = '▶';
});

// NPC System Administrator toggle functionality
function toggleNPCAdmin() {
    const details = document.getElementById('npcAdminDetails');
    const icon = document.querySelector('.collapse-icon-npc-admin');
    if (details.style.display === 'none' || !details.style.display) {
        details.style.display = 'block';
        icon.textContent = '▼';
    } else {
        details.style.display = 'none';
        icon.textContent = '▶';
    }
}

// NPC Assistant Administrator toggle functionality
function toggleNPCAssistant() {
    const details = document.getElementById('npcAssistantDetails');
    const icon = document.querySelector('.collapse-icon-npc-assistant');
    if (details.style.display === 'none' || !details.style.display) {
        details.style.display = 'block';
        icon.textContent = '▼';
    } else {
        details.style.display = 'none';
        icon.textContent = '▶';
    }
}

// Update the DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // Hide NPC Admin details
    document.getElementById('npcAdminDetails').style.display = 'none';
    document.querySelector('.collapse-icon-npc-admin').textContent = '▶';
    
    // Hide NPC Assistant details
    document.getElementById('npcAssistantDetails').style.display = 'none';
    document.querySelector('.collapse-icon-npc-assistant').textContent = '▶';
});

function toggleCertifications() {
    const details = document.getElementById('certificationDetails');
    const icon = document.querySelector('.collapse-icon-cert');
    
    if (details.style.display === 'none') {
        details.style.display = 'block';
        icon.textContent = '▼';
    } else {
        details.style.display = 'none';
        icon.textContent = '▶';
    }
}

function toggleCerts() {
    const certs = document.getElementById('collapsibleCerts');
    const trigger = document.querySelector('.collapse-trigger');
    
    if (certs.style.display === 'none') {
        certs.style.display = 'block';
        trigger.textContent = '//less';
    } else {
        certs.style.display = 'none';
        trigger.textContent = '//more';
    }
}
