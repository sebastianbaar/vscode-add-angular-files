export class FileContents {

    private camelCase (input: string): string {
        return input.replace( /-([a-z])/ig, function( all, letter ) {
            return letter.toUpperCase();
        });
    }

    public componentContent(inputName: string): string {
        var inputUpperCase: string;       
        inputUpperCase = inputName.charAt(0).toUpperCase() + inputName.slice(1);
        inputUpperCase = this.camelCase(inputUpperCase);
        
        var componentContent: string = "import { Component, OnInit } from '@angular/core';\n" +
            "\n" +
            "@Component({\n" +
            "\tselector: '" + inputName + "',\n" +
            "\ttemplateUrl: '" + inputName + ".component.html'\n" +
            "})\n" +
            "\n" +
            "export class " + inputUpperCase + "Component implements OnInit {\n" +
            "\n" +
            "\tngOnInit() { }\n" +
            "}";
        return componentContent;
    }

    public templateContent(inputName: string): string {
        var inputUpperCase: string; 
        inputUpperCase = inputName.charAt(0).toUpperCase() + inputName.slice(1);
        inputUpperCase = this.camelCase(inputUpperCase);
        var templateContent: string = `<div class="${inputName}"> Hello ${inputUpperCase}Component! </div>`;
        return templateContent;
    }

    public cssContent(inputName: string): string {
        var inputUpperCase: string = inputName.charAt(0).toUpperCase() + inputName.slice(1);
        var cssContent: string = `.${inputName} {\n\n}`;
        return cssContent;
    }

}