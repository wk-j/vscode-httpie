![](https://raw.githubusercontent.com/wk-j/vscode-httpie/master/resource/logo.png)

[![Version](https://vsmarketplacebadge.apphb.com/version/wk-j.vscode-httpie.svg)](https://marketplace.visualstudio.com/items?itemName=wk-j.vscode-httpie) [![Installs](https://vsmarketplacebadge.apphb.com/installs-short/wk-j.vscode-httpie.svg)](https://marketplace.visualstudio.com/items?itemName=wk-j.vscode-httpie)

# Installation

1. Install [HTTPie](https://httpie.org) client
2. Install extension [VS Code HTTPie](https://marketplace.visualstudio.com/items?itemName=wk-j.vscode-httpie)

# Usage

1. Create a file anywhere ending in `.httpie`, such as `Request.httpie`
2. Add HTTPie commands to it:

```javascript
http -v PUT httpbin.org/put API-Key:foo hello=world

// Separate commands with commented lines (//)
http DELETE example.org/todos/7

// Request a Google search
http www.google.com search=='HTTPie logo' tbm==isch

// Use multiple lines for a single command
http www.google.com
    search=='HTTPie logo'
    tbm==isch
```

3. Click the `Send request` button that appears above each command in the file, and the command will execute in the Terminal.
