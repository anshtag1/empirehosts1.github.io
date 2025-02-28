// Example API call to start a server (replace with actual API endpoint)
fetch('https://api.exaroton.com/v1/servers/{server_id}/start', {
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${your_api_token}`,
        'Content-Type': 'application/json'
    },
})
.then(response => response.json())
.then(data => {
    console.log('Server started:', data);
    isServerOnline = true;
    updateServerStatus();
})
.catch(error => console.error('Error starting server:', error));
