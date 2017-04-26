import { workspace } from 'vscode';

export class Utils {

    public static getStylesheetConfig(): string {
        var addAngularConfigStylesheet: string = workspace.getConfiguration('addAngular')['stylesheet'];
        
        var stylesheetFileExtension: string = 'css';
        switch (addAngularConfigStylesheet) {
        case 'css':
            break;
        case 'sass':
            stylesheetFileExtension = 'scss';
            break;
        case 'less':
            stylesheetFileExtension = 'less';
            break;
        default:
            stylesheetFileExtension = 'css';
        }

        return stylesheetFileExtension;
    }

    public static getAddTestFileConfig(): boolean {
        return workspace.getConfiguration('addAngular')['addTestFile'];
    }
}