import { ExtensionContext, commands, window } from 'vscode'; 
import { AddFiles } from './add-files';
import { AddFilesExtended } from './add-files-extended';

export function activate(context: ExtensionContext) {
  console.log('Congratulations, your extension is now active!');

  var addAngular2Files = commands.registerCommand('extension.addAngular2Files', (args) => {
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

  var addAngular2FilesExtended = commands.registerCommand('extension.addAngular2FilesExtended', (args) => {
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

  context.subscriptions.push(addAngular2Files);
  context.subscriptions.push(addAngular2FilesExtended);
}