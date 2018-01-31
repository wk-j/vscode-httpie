import { window, Range } from "vscode";
import { Selector } from "./selector";

export class RequestController {
    public async run(range: Range) {
        let editor = window.activeTextEditor;
        if (!editor || !editor.document) {
            return;
        }

        // Get selected text of selected lines or full document
        let selectedText = new Selector().getSelectedText(editor, range);
        if (!selectedText) {
            return;
        }

        console.log(selectedText);
    }
}