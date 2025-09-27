
// JavaScript for copy functionality
document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.getElementById('copy-btn');
    const responseContent = document.getElementById('response-content');
    const copyToast = document.getElementById('copy-toast');
    const geminiapikey = document.getElementById('geminiapiinput').value;
    const chatgptapikey = document.getElementById('gptapiinput').value;
    const claudeapikey = document.getElementById('claudeapiinput').value;
    const messagePara = document.getElementById('message');
    // Save the input value when the button is clicked
    saveButton.addEventListener('click', () => {
        const geminiapikey1 = document.getElementById('geminiapiinput').value;
            const geminikey = geminiapikey1;
            if (geminikey) {
                chrome.storage.sync.set({ 'gemini_apikey': geminikey }, function() {
                    if (chrome.runtime.lastError) {
                        // Handle errors (e.g., storage quota exceeded)
                        messagePara.textContent = `Error saving key: ${chrome.runtime.lastError.message}`;
                        console.error(chrome.runtime.lastError);
                    } else {
                        // Success message displayed *only after* the save is confirmed
                        messagePara.textContent = `Gemini Key saved successfully!`;
                        geminiapikey1.value = '';
                    }
                });
            } else {
                messagePara.textContent = 'Please enter a Key.';
            }
            const data =  chrome.storage.sync.get("gemini_apikey");
            console.log(data);
    });
});
