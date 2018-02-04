import { window, Range } from "vscode";
import { Selector } from "./selector";
import * as ncp from "copy-paste";
import * as vscode from "vscode";

export class RequestController {
    public async run(range: Range) {
        let editor = window.activeTextEditor;
        if (!editor || !editor.document) {
            return;
        }

        let selectedText = new Selector().getSelectedText(editor, range);
        if (!selectedText) {
            return;
        }

        let joined = selectedText.replace(/\n/g, " ").replace(/\r\n/g, " ")
        this.executeInTerminal(joined);
    }

    executeInTerminal(text: string) {
        let editor = vscode.window.activeTextEditor;
        ncp.copy(text + '\n', function () {
            vscode.commands.executeCommand("workbench.action.terminal.paste").then(() => {
                editor.show();
            });
            editor.show();
        });
    }
}