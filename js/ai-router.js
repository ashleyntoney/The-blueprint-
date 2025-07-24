
async function generateAIResponse() {
  const model = document.getElementById('ai-model').value;
  const input = document.getElementById('prompt-input').value;
  const output = document.getElementById('ai-output');
  if (!input.trim()) {
    output.innerText = '⚠️ Please enter a prompt first.';
    return;
  }
  output.innerText = '🤖 Generating response...';
  const endpoints = {
    gemini: 'https://your-gemini-endpoint',
    chatgpt: 'https://your-chatgpt-endpoint',
    claude: 'https://your-claude-endpoint'
  };
  try {
    const response = await fetch(endpoints[model], {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: input })
    });
    const data = await response.json();
    output.innerText = data?.response || '[No response returned]';
  } catch (err) {
    output.innerText = '❌ Error: ' + err;
  }
}
