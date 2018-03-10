import * as vscode from "vscode"

const keywords = [
    "GET",
    "POST",
    "DELETE",
    "PUT",
    "http",
]

const options = [
    "--json",
    "--form",
    "--pretty",
    "--style",
    "--print",
    "--headers",
    "--body",
    "--verbose",
    "--all",
    "--history-print",
    "--stream",
    "--output",
    "--download",
    "--session",
    "--session-read-only",
    "--auth",
    "--auth-type",
    "--proxy",
    "--follow",
    "--max-redirects",
    "--timeout",
    "--check-status",
    "--ssl",
    "--cert-key",
    "--ignore-stdin",
    "--help",
    "--version",
    "--traceback",
    "--default-scheme",
    "--debug"
]

export class HttpieCompletion implements vscode.CompletionItemProvider {
    public provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {

        return options.map(x => ({
            label: x,
            insertText: x
        })).concat(keywords.map(x => ({
            label: x,
            insertText: x
        })));
    }
    public resolveCompletionItem?(
        item: vscode.CompletionItem,
        token: vscode.CancellationToken): vscode.ProviderResult<vscode.CompletionItem> {

        return { ...item, insertText: (item.insertText.toString().replace("--", "")) }
    }
}