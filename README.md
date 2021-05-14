![HTTPie Logo](https://raw.githubusercontent.com/wk-j/vscode-httpie/master/resource/logo.png)

> HTTPie support for Visual Studio Code

[![Version](https://vsmarketplacebadge.apphb.com/version/wk-j.vscode-httpie.svg)](https://marketplace.visualstudio.com/items?itemName=wk-j.vscode-httpie)
[![Installs](https://vsmarketplacebadge.apphb.com/installs-short/wk-j.vscode-httpie.svg)](https://marketplace.visualstudio.com/items?itemName=wk-j.vscode-httpie)

# Installation

1. Install [HTTPie](https://httpie.io/) CLI tool - an HTTP client.
2. Install the [VS Code HTTPie](https://marketplace.visualstudio.com/items?itemName=wk-j.vscode-httpie) extension in VS Code.

# Usage

1. Open VS Code.
2. Create a file anywhere in your project and name it to use the `.httpie` extension. e.g. `Request.httpie`.
2. Add HTTPie commands to it. For example:
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
4. Click the `Send request` button that appears above each command in the file. The command will execute in the Terminal.
