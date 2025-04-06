function openTab(tabId) {
    // Hide all tabs
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  
    // Remove active class from buttons
    document.querySelectorAll('.tablink').forEach(b => b.classList.remove('active'));
  
    // Show the clicked tab
    document.getElementById(tabId).classList.add('active');
  
    // Highlight the clicked button
    document.querySelector(`button[onclick="openTab('${tabId}')"]`).classList.add('active');
  }
  