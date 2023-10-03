# ChatGPT API

Simple API that enables programmatic access to [chat.openai.com](chat.openai.com)

## Table of Contents

- [Installation & Usage](#installation)
- [Usage](#usage)
- [Disclaimer](#disclaimer)

## Installation

```bash
git clone https://github.com/9akashnp8/chatgpt-api
cd chatgpt-api
npm install
npm run dev
```

## Usage
1. Login to chat.openai.com (preferrably with a dummy account) and copy the `__Secure-next-auth.session-token` cookie from Browser storage.
2. Copy the cookie value and store it on the AUTH_COOKIE env variable from the .example.env file
3. Rename the .example.env file to .env
4. Start the server via `npm run dev`
5. POST your prompt to "/conversation" endpoint. Sample json payload:
```json
{
    "prompt": <insert prompt here>
}
```

## Disclaimer
This projected is created only for educational purposes. Any consequences of unauthorized use is solely the responsibility of the user and the user alone. 


