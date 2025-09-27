(() => {
  const style = document.createElement('style');
  style.textContent = `
    .ai-btn-group { display:inline-flex; gap:6px; margin-left:8px; vertical-align:middle; }
    .ai-btn {
      padding: 6px 10px; border: none; border-radius: 6px;
      font-size: 12px; line-height: 1; cursor: pointer;
      color: #fff;
    }
    .ai-btn:hover { 
    background-color: #6ba4e04a;
     }

    .r-1kkk96v {
        margin-top: -15px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        background-color: #a6a2a352;
        color: white;
        padding : 1.2px;
    }
    .r-1ey881g {
        margin-top: -15px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        background-color: #a6a2a352;
        color: white;
        padding : 1.2px;
    }

    /* Modal and overlay styles */
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(94, 98, 107, 0.58);
            z-index: 50;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease-out;
        }
        
        .modal-overlay.active {
            opacity: 1;
            pointer-events: auto;
        }

        .modal-container {
            position: relative;
            border-radius: 0.75rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            overflow: hidden;
            transform: scale(0.95);
            transition: transform 0.3s ease-out;
            max-width: 50rem;
            width: 90%;
            margin: 3rem auto;
            color: #ffffff;
            background: 
                radial-gradient(ellipse 110% 70% at 25% 80%, rgba(147, 51, 234, 0.12), transparent 55%),
                radial-gradient(ellipse 130% 60% at 75% 15%, rgba(59, 130, 246, 0.10), transparent 65%),
                radial-gradient(ellipse 80% 90% at 20% 30%, rgba(236, 72, 153, 0.14), transparent 50%),
                radial-gradient(ellipse 100% 40% at 60% 70%, rgba(16, 185, 129, 0.08), transparent 45%),
                #000000;
        }
        
        .modal-overlay.active .modal-container {
            transform: scale(1);
        }

        .close-btn {
            position: absolute;
            top: 1rem;
            right: 1rem;
            color: #9ca3af;
            cursor: pointer;
            transition: color 0.3s;
            border: none;
            background: none;
            
                
        }

        .close-btn:hover {
            color: #4b5563;
        }

        .close-btn svg {
            height: 1.5rem;
            width: 1.5rem;
        }

        .modal-body {
            padding: 2rem;
            max-height: 70 0px;
            overflow-y: scroll;
        }

        .modal-body h2 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #eef5f6ff;
            margin-bottom: 0.5rem;
        }

        .modal-body p {
            color: #f0f3f7ff;
            margin-bottom: 1.5rem;
        }

        .modal-actions {
            display: flex;
            justify-content: flex-end;
            gap: 0.5rem;
        }

        .cancel-btn, .action-btn, .ok-btn {
            font-weight: 400;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            transition: all 0.3s;
            border: none;
            cursor: pointer;
        }

        .cancel-btn {
            background-color: #e5e7eb;
            color: #1f2937;
        }

        .cancel-btn:hover {
            background-color: #d1d5db;
        }

        .action-btn {
            background-color: #3b82f6;
            color: #ffffff;
        }

        .action-btn:hover {
            background-color: #2563eb;
        }

        .llm-buttons {
            padding: 10px;
            margin-top: 10px;
            display:flex;
            justify-content: center;
            gap: 20px;
        }
        .analyze-btn, .smartreply-btn, .similar-create-btn{
            font-weight: 600;
            padding: 0.5rem 1rem;
            border-radius: 9999px;
            transition: all 0.3s;
            border: none;
            cursor: pointer;
        }

        .analyze-btn {
            background-color: #e5e7eb;
            color: #1f2937;
        }

        .analyze-btn:hover {
            background-color: #d1d5db;
        }
        .smartreply-btn{
            background-color: #e5e7eb;
            color: #1f2937;
        }

        .smartreply-btn:hover {
            background-color: #d1d5db;
        }
        .similar-create-btn {
            background-color: #e5e7eb;
            color: #1f2937;
        }

        .similar-create-btn:hover {
            background-color: #d1d5db;
        }

        .tab-container {
            width: 100%;
            max-width: 800px;
            margin: 20px auto;
            border: 0.5px solid #5d5b5bcb;
            border-radius: 8px;
            max-height : 40px;
            min-height : 38px;
        }

        .tab-list {
            display: flex;
            justify-content: space-around;
            padding: 4px;
            list-style-type: none; /* Removes bullet points for list items */
            max-height : 40px;
            min-height : 38px;
            column-gap: 10px;
            margin: 0;
        }

        .tab {
            background: none;
            border: none;
            cursor: pointer;
            color: #c1bfbfcf;
            transition: all 0.3s ease;
            flex-grow: 1;
            text-align: center;
            border-radius: 8px;
            max-height:32px;
            padding: 2px 20px;
        }

        .tab:hover {
            color: #d0cacaff;
            background-color: #9b96966f;
        }

        .tab.active {
            color: #ffffff;
            border: 0.5px solid #9d9da1db;
            background-color: #3f3b3b67;
        }

        



        #modalInput {
            display: block;
            width: 100%;
            padding: 0.75rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
            border-radius: 0.5rem;
            border: 1px solid #d1d5db;
            font-size: 1rem;
            color: #eef0f4ff;
            outline: none;
            visibility:hidden;
        }

        #modalInput:focus {
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.25);
        }

        div#request-text {
        background: #77777766;
        padding: 5px 5px;
        border-radius: 5px;
        }

        div#dynamicContent {
            background-color: rgb(86 105 255 / 21%);
            border-radius: 10px;
            margin-top: 20px;
            padding: 10px;
            max-height: 20rem;
            overflow-y: scroll;
        }

        /* Custom scrollbar for a cleaner look */
        ::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #1f2937;
        }
        ::-webkit-scrollbar-thumb {
            background: #4b5563;
            border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #6b7280;
        }
    
  `;
  document.documentElement.appendChild(style);

  // Function to create and inject the main modal
    function createAndInjectModal(twttxt,airesponse) {
        // Create modal overlay
        const modalOverlay = document.createElement('div');
        modalOverlay.classList.add('modal-overlay');

        // Create modal container
        const modalContainer = document.createElement('div');
        modalContainer.classList.add('modal-container');

        // Create close button
        const closeBtn = document.createElement('button');
        closeBtn.classList.add('close-btn');
        closeBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>`;

        // Create modal body
        const modalBody = document.createElement('div');
        let inputtweet = parseMarkdown(twttxt)
        modalBody.classList.add('modal-body');
        modalBody.innerHTML = `
            <h2>X-pressive </h2>
            <div id="request-text"><p>${inputtweet}</p></div>
            

            <div class="tab-container">
                <ul role="tablist" class="tab-list">
                <button role="tab" id="tab1" aria-controls="panel1" aria-selected="true" class="tab active">Analyze</button>
                <button role="tab" id="tab2" aria-controls="panel2" aria-selected="false" class="tab">Reply</button>
                <button role="tab" id="tab3" aria-controls="panel3" aria-selected="false" class="tab">Create Similar</button>
                <button role="tab" id="tab4" aria-controls="panel4" aria-selected="false" class="tab">Why Banger</button>
                </ul>
            </div>

            <div id="dynamicContent" style="margin-bottom: 1.5rem;">
            <p>Response</p>
            </div>
            <input type="text" id="modalInput" placeholder="Enter text here..." />
            <div class="modal-actions">
                <button class="cancel-btn">
                    Cancel
                </button>
                <button class="action-btn">
                    Take Action
                </button>
            </div>`;

        // Append elements to the container
        modalContainer.appendChild(closeBtn);
        modalContainer.appendChild(modalBody);
        modalOverlay.appendChild(modalContainer);

        // Append modal to the body and activate it
        document.body.appendChild(modalOverlay);
        setTimeout(() => {
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }, 10);

        // Event listeners
        const cancelButton = modalBody.querySelector('.cancel-btn');
        const actionButton = modalBody.querySelector('.action-btn');
        x = 'tab1';
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          // Deactivate all tabs and panels
          tabs.forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
          });
          // Activate the clicked tab and its corresponding panel
          tab.classList.add('active');
          tab.setAttribute('aria-selected', 'true');
          // Log the id and text of the clicked tab
            console.log('Tab clicked:', tab.id, tab.textContent.trim());
            x = tab.id;

            console.log(x);
                
        });
        });


        closeBtn.addEventListener('click', () => removeModal(modalOverlay));
        cancelButton.addEventListener('click', () => removeModal(modalOverlay));
        actionButton.addEventListener('click', () => injectActionResponse(twttxt,x));
        
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                removeModal(modalOverlay);
            }
        });
    }



    // Function to simulate a response and inject it
    async function injectActionResponse(twttxt1,tabselected) {
         userInput = tabselected;
         console.log(userInput);
            if(userInput === 'tab1'){
                llmtask = 'Analyze the tweet';
            }
            if(userInput === 'tab2'){
                llmtask = '5 Reply for the tweet in a fun and human way';
            }
            if(userInput === 'tab3'){
                llmtask = 'Create a tweet similar to the following tweet with a possiblity of hook and virality';
            }
        const dynamicContent = document.getElementById('dynamicContent');
        
        // Display a loading message while awaiting resp
        dynamicContent.innerHTML = "<p>Thinking like human ...</p>";

        try {
            
            const API_KEY = await getApiKey();
            var response = '';
            if (API_KEY) {
                console.log("Using API Key:", API_KEY.substring(0, 5) + '...'); // Do not print the full key!
                response = await generateContentWithoutImport(twttxt1,llmtask,API_KEY);
                
            } else {
                console.log("Cannot proceed without an API key.");
            }
            

            // const response = await generateContentWithoutImport(twttxt1,llmtask);
            let responseoutput = parseMarkdown(response);
            dynamicContent.innerHTML = `<p>${responseoutput}</p>`;
        } catch (error) {
            dynamicContent.innerHTML = `<p style="color: red;">Error: Failed to fetch response.</p>`;
            console.error(error);
        }
    }

    function parseMarkdown(markdownText) {
        let htmlText = markdownText;

        // Headers (e.g., # Header, ## Header)
        htmlText = htmlText.replace(/^### (.*$)/gim, '<h3>$1</h3>');
        htmlText = htmlText.replace(/^## (.*$)/gim, '<h2>$1</h2>');
        htmlText = htmlText.replace(/^# (.*$)/gim, '<h1>$1</h1>');

        // Bold (**text** or __text__)
        htmlText = htmlText.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
        htmlText = htmlText.replace(/__(.*?)__/gim, '<strong>$1</strong>');

        // Italic (*text* or _text_)
        htmlText = htmlText.replace(/\*(.*?)\*/gim, '<em>$1</em>');
        htmlText = htmlText.replace(/_(.*?)_/gim, '<em>$1</em>');

        // Unordered lists (e.g., - item)
        htmlText = htmlText.replace(/^\- (.*$)/gim, '<li>$1</li>');
        htmlText = htmlText.replace(/<li>(.*?)<\/li>/gim, '<ul><li>$1</li></ul>');
        
        // Links ([Text](url))
        htmlText = htmlText.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank">$1</a>');

        // Newlines to break tags
        htmlText = htmlText.replace(/\n/g, '<br>');

        return htmlText;
        }
    // Function to remove the modal from the DOM
    function removeModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        setTimeout(() => {
            modal.remove();
        }, 300);
    }

    // A custom alert function that also uses a dynamic modal
    function showCustomAlert(message, parentModal) {
        if (parentModal) {
            removeModal(parentModal);
        }

        const alertOverlay = document.createElement('div');
        alertOverlay.classList.add('modal-overlay');
        alertOverlay.innerHTML = `
            <div class="modal-container">
                <div class="modal-body">
                    <h2>Alert</h2>
                    <p>${message}</p>
                    <div class="modal-actions">
                        <button class="action-btn ok-btn">OK</button>
                    </div>
                </div>
            </div>`;
        
        document.body.appendChild(alertOverlay);
        setTimeout(() => {
            alertOverlay.classList.add('active');
        }, 10);

        const okButton = alertOverlay.querySelector('.ok-btn');
        okButton.addEventListener('click', () => removeModal(alertOverlay));
        alertOverlay.addEventListener('click', (e) => {
            if (e.target === alertOverlay) {
                removeModal(alertOverlay);
            }
        });
    }





  // Track processed tweets to avoid repeated work
  const processed = new WeakSet();

   function getTweetText(article) {
    const textEl = article.querySelector('[data-testid="tweetText"]');
    if (textEl) return textEl.innerText.trim();
    // Fallback (last resort): try to extract main text, ignoring action bars
    return Array.from(article.querySelectorAll('[data-testid="tweetText"], div[dir="auto"]'))
      .map(n => n.innerText?.trim())
      .filter(Boolean)
      .join('\n');
  }

  function makeBtn(icon,label, className, onClick) {
    const btn = document.createElement('button');
    btn.className = `ai-btn ${className}`;
    btn.type = 'button';
    btn.textContent = label;
    btn.addEventListener('click', onClick);
    btn.innerHTML = icon;
    return btn;
  }

  function injectButtonsInto(article) {
    if (processed.has(article)) return;

    // Find the Grok button in THIS tweet
    // Your DOM shows: <button aria-label="Grok actions" ...>
    const grokBtn =
      article.querySelector('button[aria-label="Grok actions"]') ||
      article.querySelector('button[aria-label*="Grok" i]');
    if (!grokBtn) return; // Some tweets may not show Grok like ads abd promo vids

    // The action row container is the parent of grokBtn's parent.
    // Structure in your DOM:
    //  <div ... action-row>
    //    <div><button aria-label="Grok actions">...</button></div>
    //    ...
    //  </div>
    const grokWrapper = grokBtn.parentElement;
    const actionRow = grokWrapper && grokWrapper.parentElement;
    if (!actionRow) return;

    // Avoid duplicates per action row
    if (actionRow.querySelector('.ai-btn-group')) {
      processed.add(article);
      return;
    }

    // Build button group
    const group = document.createElement('div');
    group.className = 'ai-btn-group';

    const tweetText = getTweetText(article);
    const geminiIcon = `
    <svg height="17" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg" style="flex: 0 0 auto; line-height: 1;">
      <title>Gemini</title>
      <path d="M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z" fill="#3186FF"></path>
      <path d="M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z" fill="url(#lobe-icons-gemini-fill-0)"></path>
      <path d="M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z" fill="url(#lobe-icons-gemini-fill-1)"></path>
      <path d="M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z" fill="url(#lobe-icons-gemini-fill-2)"></path>
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="lobe-icons-gemini-fill-0" x1="7" x2="11" y1="15.5" y2="12">
          <stop stop-color="#08B962"></stop>
          <stop offset="1" stop-color="#08B962" stop-opacity="0"></stop>
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="lobe-icons-gemini-fill-1" x1="8" x2="11.5" y1="5.5" y2="11">
          <stop stop-color="#F94543"></stop>
          <stop offset="1" stop-color="#F94543" stop-opacity="0"></stop>
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="lobe-icons-gemini-fill-2" x1="3.5" x2="17.5" y1="13.5" y2="12">
          <stop stop-color="#FABC12"></stop>
          <stop offset=".46" stop-color="#FABC12" stop-opacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  `;
  const gpticon = '<svg fill="currentColor" fill-rule="evenodd" height="17" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg" style="flex: 0 0 auto; line-height: 1;"><title>OpenAI</title><path d="M21.55 10.004a5.416 5.416 0 00-.478-4.501c-1.217-2.09-3.662-3.166-6.05-2.66A5.59 5.59 0 0010.831 1C8.39.995 6.224 2.546 5.473 4.838A5.553 5.553 0 001.76 7.496a5.487 5.487 0 00.691 6.5 5.416 5.416 0 00.477 4.502c1.217 2.09 3.662 3.165 6.05 2.66A5.586 5.586 0 0013.168 23c2.443.006 4.61-1.546 5.361-3.84a5.553 5.553 0 003.715-2.66 5.488 5.488 0 00-.693-6.497v.001zm-8.381 11.558a4.199 4.199 0 01-2.675-.954c.034-.018.093-.05.132-.074l4.44-2.53a.71.71 0 00.364-.623v-6.176l1.877 1.069c.02.01.033.029.036.05v5.115c-.003 2.274-1.87 4.118-4.174 4.123zM4.192 17.78a4.059 4.059 0 01-.498-2.763c.032.02.09.055.131.078l4.44 2.53c.225.13.504.13.73 0l5.42-3.088v2.138a.068.068 0 01-.027.057L9.9 19.288c-1.999 1.136-4.552.46-5.707-1.51h-.001zM3.023 8.216A4.15 4.15 0 015.198 6.41l-.002.151v5.06a.711.711 0 00.364.624l5.42 3.087-1.876 1.07a.067.067 0 01-.063.005l-4.489-2.559c-1.995-1.14-2.679-3.658-1.53-5.63h.001zm15.417 3.54l-5.42-3.088L14.896 7.6a.067.067 0 01.063-.006l4.489 2.557c1.998 1.14 2.683 3.662 1.529 5.633a4.163 4.163 0 01-2.174 1.807V12.38a.71.71 0 00-.363-.623zm1.867-2.773a6.04 6.04 0 00-.132-.078l-4.44-2.53a.731.731 0 00-.729 0l-5.42 3.088V7.325a.068.068 0 01.027-.057L14.1 4.713c2-1.137 4.555-.46 5.707 1.513.487.833.664 1.809.499 2.757h.001zm-11.741 3.81l-1.877-1.068a.065.065 0 01-.036-.051V6.559c.001-2.277 1.873-4.122 4.181-4.12.976 0 1.92.338 2.671.954-.034.018-.092.05-.131.073l-4.44 2.53a.71.71 0 00-.365.623l-.003 6.173v.002zm1.02-2.168L12 9.25l2.414 1.375v2.75L12 14.75l-2.415-1.375v-2.75z"></path></svg>';
  const claudeicon = '<svg height="17" viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg" style="flex: 0 0 auto; line-height: 1;"><title>Claude</title><path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z" fill="#D97757" fill-rule="nonzero"></path></svg>'; 
  const gem1 = makeBtn(geminiIcon,'Gemini', 'ai-btn--gem1', () => {
      // TODO: replace with your Gemini call
        //callGemini(tweetText, "summarize")
      createAndInjectModal(tweetText);
      
      console.log('[Gemini ] tweet:', tweetText);
    //   alert('Gemini clicked:\n' + (tweetText || '(no text)'));

    });

    const gem2 = makeBtn(claudeicon,'ClaudeAI', 'ai-btn--claude', () => {
      // TODO: replace with your Gemini call
      
      console.log('[Claude] tweet:', tweetText);
      alert('Claude clicked:\n' + (tweetText || '(no text)'));
    });

    const chatgpt = makeBtn(gpticon,'ChatGPT', 'ai-btn--chatgpt', () => {
      // TODO: replace with your ChatGPT call
      console.log('[ChatGPT] tweet:', tweetText);
      alert('ChatGPT clicked:\n' + (tweetText || '(no text)'));
    });

    group.appendChild(gem1);
    group.appendChild(gem2);
    group.appendChild(chatgpt);

    // Insert right AFTER the Grok button wrapper so it appears next to the icon
    if (grokWrapper.nextSibling) {
      actionRow.insertBefore(group, grokWrapper.nextSibling);
    } else {
      actionRow.appendChild(group);
    }

    processed.add(article);
  }

 //scan for all tweets 
  function scanAll() {
    // Only target actual tweets
    document.querySelectorAll('article[data-testid="tweet"]').forEach(injectButtonsInto);
  }

  // Initial pass
  scanAll();

  // Observe for dynamically added tweets
  const obs = new MutationObserver((muts) => {
    let found = false;
    for (const m of muts) {
      for (const node of m.addedNodes) {
        if (node.nodeType !== 1) continue;
        if (node.matches?.('article[data-testid="tweet"]')) {
          injectButtonsInto(node);
          found = true;
        } else {
          // If a subtree contains tweets
          const tweets = node.querySelectorAll?.('article[data-testid="tweet"]');
          if (tweets?.length) {
            tweets.forEach(injectButtonsInto);
            found = true;
          }
        }
      }
    }
    // As a fallback, do a light rescan when something changed
    if (!found) scanAll();
  });

  obs.observe(document.body, { childList: true, subtree: true });

        // --- Function to retrieve the API Key ---
    async function getApiKey() {
            try {
                const result = await chrome.storage.sync.get('gemini_apikey');
                const apiKey = result.gemini_apikey;

                if (apiKey) {
                    console.log('API Key retrieved successfully.');
                    return apiKey;
                } else {
                    console.warn('API Key not found in storage.');
                    return null;
                }
            } catch (error) {
                console.error('Error getting API key:', error);
                return null;
            }
    }


  async function generateContentWithoutImport(tweetText,userInput1,api_key) {
  const model = 'gemini-2.5-flash'; 
  const prompt = userInput1 + tweetText;
  const API_KEY =api_key;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
  
  const requestBody = {
    contents: [
      {
        parts: [
          { text: prompt },
        ],
      },
    ],
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': API_KEY,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('API Error:', errorData);
      return;
    }

    const data = await response.json();
    const generatedText = data.candidates[0].content.parts[0].text;
    console.log('Generated Content:', generatedText);
    
    return generatedText;
  } catch (error) {
    console.error('Fetch Error:', error);
  }
}



})();






