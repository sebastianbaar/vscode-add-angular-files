![](images/icon.png)

# Angular Add Files for VS Code

This extension allows you to add **Angular typescript files including snippets** to your VS Code project.

> Inspired by [Dominik Kundel](https://github.com/dkundel)'s [Advanced New File - Visual Studio Code Extension](https://github.com/dkundel/vscode-new-file) and [John Papa](https://github.com/johnpapa)'s [Angular TypeScript Snippets for VS Code](https://github.com/johnpapa/vscode-angular-snippets).

## Changelog

### 2.0.0
* **Now Updated for Angular 4 release**

### 1.1.3
* **user settings: include test file** include test file (.spec) in generation of files in the user settings `"addNg2.addTestFile": VALUE`, where `VALUE` is true (default) or false

### 1.1.2
* **user settings: custom stylesheet language** define the stylesheet language in the user settings `"addNg2.stylesheet": "VALUE"`, where `VALUE` is "css" (default), "sass", or "less"

### 1.0.0
**Now Updated for Angular 2.0.0 release** 

### 0.2.1
* **icon** add an icon 

### 0.2.0

* **@angular** update to Angular2 rc.6
* **tests** add tests (.spec-files)

## Features

Right click on a file or a folder in your current project. There are two options added to the context menu `Add Angular Files` and `Add Angular Files (Extended)`:

### Add Angular Files

This command adds the following files to your new folder (let's assume you typed in `home`):
```
home/home.component.ts
home/home.component.html
home/home.component.css | .less | .scss
home/home.component.spec.ts
```

![alt text](https://cloud.githubusercontent.com/assets/7135276/16797373/83bd9ffc-48e7-11e6-9ac0-9874a4387a3a.gif "Add Angular Files")

### Add Angular Files (Extended)

This command adds the following extended files to your new folder (let's assume you typed in `home`):
```
home/home.component.ts
home/home.component.html
home/home.component.css | .less | .scss
home/home.component.spec.ts
home/shared/home.service.ts
home/shared/home.ts
```

![alt text](https://cloud.githubusercontent.com/assets/7135276/16797375/861bd246-48e7-11e6-8cc8-2fc688197388.gif "Add Angular Files (Extended)")

**The naming of the files as well as the (boilerplate) snippets are based on the [official Angular Style Guide](https://angular.io/docs/ts/latest/guide/style-guide.html)**

### Customize stylesheet language

You can choose between your preferred stylesheet language CSS, SASS or LESS. 

1. Go to user settings (File > Preferences > user settings)
2. Add the following key-value pair:
    `"addNg2.stylesheet": "VALUE"`, where `VALUE` is an ENUM of "css" (default), "sass", or "less"

## Installation

1. Install Visual Studio Code 1.3.0 or higher
2. Launch Code
3. From the command palette `Ctrl`-`Shift`-`P` (Windows, Linux) or `Cmd`-`Shift`-`P` (OSX)
4. Select `Install Extension`
5. Type `add angular files` and press enter
6. Reload Visual Studio Code

# Disclaimer

**Important:** This extension due to the nature of it's purpose will create
files on your hard drive and if necessary create the respective folder structure.
While it should not override any files during this process, I'm not giving any guarantees
or take any responsibility in case of lost data.

# License

MIT
