import * as ncp from "copy-paste";
import { Range, window } from "vscode";
import * as vscode from "vscode";
import { Executor } from "./executor";
import { Selector } from "./selector";

export class RequestController {
    public async run(range: Range) {
        let editor = window.activeTextEditor
        if (!editor || !editor.document) {
            return
        }

        let selectedText = new Selector().getSelectedText(editor, range)
        if (!selectedText) {
            return
        }

        let joined = selectedText.replace(/\n/g, " ").replace(/\r\n/g, " ")
        Executor.runInTerminal(joined)
    }
}