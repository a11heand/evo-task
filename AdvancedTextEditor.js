/*
Filename: AdvancedTextEditor.js
Content: An advanced text editor with multiple features and functionalities.
*/

// TextEditor class
class TextEditor {
  constructor() {
    this.document = '';
    this.clipboard = '';
    this.undoHistory = [];
    this.redoHistory = [];
  }

  // Append text to the document
  append(text) {
    this.document += text;
  }

  // Delete text from the document
  delete(start, end) {
    this.document = this.document.slice(0, start) + this.document.slice(end);
  }

  // Copy text to clipboard
  copy(start, end) {
    this.clipboard = this.document.slice(start, end);
  }

  // Cut text from the document and store in clipboard
  cut(start, end) {
    this.copy(start, end);
    this.delete(start, end);
  }

  // Paste text from clipboard
  paste(position) {
    this.document = this.document.slice(0, position) + this.clipboard + this.document.slice(position);
  }

  // Undo the last operation
  undo() {
    if (this.undoHistory.length > 0) {
      const lastOperation = this.undoHistory.pop();
      this.redoHistory.push(lastOperation);
      this.document = lastOperation.snapshot;
    }
  }

  // Redo the last undone operation
  redo() {
    if (this.redoHistory.length > 0) {
      const lastUndone = this.redoHistory.pop();
      this.undoHistory.push(lastUndone);
      this.document = lastUndone.snapshot;
    }
  }
}

// Create a new instance of TextEditor
const myEditor = new TextEditor();

// Generate random text for testing
function generateRandomText(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let text = '';
  for (let i = 0; i < length; i++) {
    text += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return text;
}

// Use the TextEditor functionalities
myEditor.append('Hello World! ');
myEditor.append('This is an advanced text editor implementation.\n');
myEditor.append(generateRandomText(1000)); // Append random text
console.log(myEditor.document);

myEditor.undo(); // Undo the last operation
console.log(myEditor.document);

myEditor.redo(); // Redo the last undone operation
console.log(myEditor.document);

myEditor.delete(6, 11); // Delete 'World' from the document
console.log(myEditor.document);

myEditor.copy(0, 5); // Copy 'Hello' to clipboard
myEditor.cut(0, 5); // Cut 'Hello' from the document
console.log(myEditor.document);

myEditor.paste(0); // Paste 'Hello' at the beginning of the document
console.log(myEditor.document);
