## HTTPie

[![Version](https://vsmarketplacebadge.apphb.com/version/wk-j.vscode-httpie.svg)](https://marketplace.visualstudio.com/items?itemName=wk-j.vscode-httpie) [![Installs](https://vsmarketplacebadge.apphb.com/installs-short/wk-j.vscode-httpie.svg)](https://marketplace.visualstudio.com/items?itemName=wk-j.vscode-httpie)

## Install

- [HTTPie](https://httpie.org)
- [VS Code HTTPie](vscode:extension/wk-j.vscode-httpie)

## Usage

1. Create `Reqeust.httpie`
2. Add HTTPie commands

```javascript
http -v PUT httpbin.org/put API-Key:foo hello=world

// separate command by (//)
http DELETE example.org/todos/7

// request google search
http www.google.com search=='HTTPie logo' tbm==isch

// multiple line
http www.google.com
    search=='HTTPie logo'
    tbm==isch
```

3. Click `Send request`