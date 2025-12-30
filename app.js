const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send(`
        <body style="background-color: #1c1c1c; color: white; font-family: sans-serif; text-align: center; padding-top: 50px;">
            <h1 style="color: #00ff00;">🚀 CI/CD Pipeline Success 1!</h1>
            <p style="font-size: 1.2em;">Цей додаток було автоматично задеплоєно через <b>Jenkins</b> та <b>Ansible</b>.</p>
            <div style="border: 1px solid #444; display: inline-block; padding: 20px; border-radius: 10px; background: #2a2a2a;">
                <p><b>Worker IP:</b> 192.168.56.12</p>
                <p><b>Status:</b> Running inside Docker</p>
            </div>
        </body>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});