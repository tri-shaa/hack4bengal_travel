// Add an event listener to the button
document.getElementById('planTripButton').addEventListener('click', async function() {
    const API_KEY = 'qNrUBHWSPLWzURrMtLZjcRObTh1sM1u4gZAC0AUXC1n669Np'; 
    const url = 'https://api.fireworks.ai/inference/v1/chat/completions';

    try {
        // Prepare the request body
        const requestBody = {
            model: "accounts/fireworks/models/llama-v3-70b-instruct",
            max_tokens: 1024,
            top_p: 1,
            top_k: 40,
            presence_penalty: 0,
            frequency_penalty: 0,
            temperature: 0.6,
            messages: [
                {
                    role: "user",
                    content: "You are a travel agent . Provide detailed tour guides of a place as per user and also provide with budget plans starting from simple , basic and luxury ."
                }
            ]
        };

        // Make the POST request
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response
        const data = await response.json();
        console.log(data); // Handle the response data as needed
    } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors or display a message to the user
    }
});