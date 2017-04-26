import { ExtensionContext, commands, window } from 'vscode'; 
import { AddFiles } from './add-files';
import { AddFilesExtended } from './add-files-extended';

export function activate(context: ExtensionContext) {
  console.log('Congratulations, your extension is now active!');

  var addAngularFiles = commands.registerCommand('extension.addAngularFiles', (args) => {
    const addFiles: AddFiles = new AddFiles();
    addFiles.showFileNameDialog(args)
      .then(addFiles.createFolder)
      .then(addFiles.createFiles)
      .then(addFiles.openFileInEditor)
      .catch((err) => {
        if (err) {
          window.showErrorMessage(err);
        }
      });
  });

  var addAngularFilesExtended = commands.registerCommand('extension.addAngularFilesExtended', (args) => {
    const addFilesExtended: AddFilesExtended = new AddFilesExtended();
    addFilesExtended.showFileNameDialog(args)
      .then(addFilesExtended.createFolder)
      .then(addFilesExtended.createFiles)
      .then(addFilesExtended.openFileInEditor)
      .catch((err) => {
        if (err) {
          window.showErrorMessage(err);
        }
      });
  });

  context.subscriptions.push(addAngularFiles);
  context.subscriptions.push(addAngularFilesExtended);
}