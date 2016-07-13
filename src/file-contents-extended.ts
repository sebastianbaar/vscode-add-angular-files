export class FileContentsExtended {

    private camelCase (input: string): string {
        return input.replace( /-([a-z])/ig, function( all, letter ) {
            return letter.toUpperCase();
        });
    }

    public componentContent(inputName: string): string {
        var inputUpperCase: string;       
        inputUpperCase = inputName.charAt(0).toUpperCase() + inputName.slice(1);
        inputUpperCase = this.camelCase(inputUpperCase);
        
        var componentContent: string = "import { Component, OnInit } from '@angular/core';\n\n" +
            "import { " + inputUpperCase + " } from './shared/" + inputName + ".model';\n" +
            "import { " + inputUpperCase + "Service } from './shared/" + inputName + ".service';\n" +
            "\n" +
            "@Component({\n" +
            "\tselector: '" + inputName + "',\n" +
            "\ttemplateUrl: '" + inputName + ".component.html',\n" +
            "\tproviders: [" + inputUpperCase + "Service]\n" +
            "})\n" +
            "\n" +
            "export class " + inputUpperCase + "Component implements OnInit {\n" +
            "\t"+ this.camelCase(inputName) +": "+ inputUpperCase +"[] = [];\n" +
            "\n" +
            "\tconstructor(private " + this.camelCase(inputName) + "Service: " + inputUpperCase + "Service) { }\n" +
            "\n" +
            "\tngOnInit() {\n" +
            "\t\tthis."+ this.camelCase(inputName) + "Service.getList().subscribe((res) => {\n" +
            "\t\t\tthis."+ this.camelCase(inputName) +" = res;\n" +
            "\t\t});\n" +
            "\t}\n" +
            "}";
        return componentContent;
    }

    public serviceContent(inputName: string): string {
        var inputUpperCase: string; 
        inputUpperCase = inputName.charAt(0).toUpperCase() + inputName.slice(1);
        inputUpperCase = this.camelCase(inputUpperCase);
        var serviceContent: string = "import { Injectable } from '@angular/core';\n" +
            "import { Http, Headers, RequestOptions } from '@angular/http';\n" +
            "import { Observable } from 'rxjs/Observable';\n" +
            "import 'rxjs/add/operator/map';\n" +
            "\n" +
            "import { "+ inputUpperCase +" } from './"+ inputName +".model';\n" +
            "\n" +
            "@Injectable()\n" +
            "export class " + inputUpperCase + "Service {\n" +
            "\n" +
            "\tconstructor(private http: Http) { }\n" +
            "\n" +
            "\tgetList(): Observable<"+ inputUpperCase +"[]> {\n" +
            "\t\treturn this.http.get('/api/list').map(res => res.json() as "+ inputUpperCase +"[]);\n" +
            "\t}\n" +
            "}";
        return serviceContent;
    }

    public modelContent(inputName: string): string {
        var inputUpperCase: string; 
        inputUpperCase = inputName.charAt(0).toUpperCase() + inputName.slice(1);
        inputUpperCase = this.camelCase(inputUpperCase);
        var modelContent: string = "export class "+ inputUpperCase +" {\n" +
            "\tid: number;\n" +
            "\tname: string;\n" +
            "}";
        return modelContent;
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