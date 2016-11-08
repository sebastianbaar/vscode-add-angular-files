import { workspace } from 'vscode';

export class Utils {

    public static getStylesheetConfig(): string {
        var addNg2ConfigStylesheet: string = workspace.getConfiguration('addNg2')['stylesheet'];
        
        var stylesheetFileExtension: string = 'css';
        switch (addNg2ConfigStylesheet) {
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
        return workspace.getConfiguration('addNg2')['addTestFile'];
    }
}