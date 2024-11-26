function showTab(event, tabId) {
    // Hide all tab items
    const tabItems = document.querySelectorAll('.tab-item');
    tabItems.forEach(item => item.classList.remove('active'));

    // Remove active class from all buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => btn.classList.remove('active'));

    // Show the selected tab and set the active button
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}
