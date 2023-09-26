export const cookies = [
    {
        "name": "__Secure-next-auth.session-token",
        "value": `${process.env["AUTH_COOKIE"]}`,
        "url": "",
        "domain": "chat.openai.com",
        "path": "/",
        "expire": 60000,
        "httpOnly": true,
        "secure": true,
        "samesite": "Lax"
    },
]