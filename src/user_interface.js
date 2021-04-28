
// Required         =======================================================================================
const vscode = require("vscode");
const commands = require("./commands");
const { workspace, ConfigurationTarget } = require("vscode");
const cppData = require("./snippets/cpp.json");
const javaData = require("./snippets/java.json");
const jsData = require("./snippets/javascript.json");
const pyData = require("./snippets/python.json");
const fs = require("fs");

// Global Variables =======================================================================================
var collapsed = true;
var dpMenu = ["[Close Menu]", "Singleton", "Builder", "Observer", "Adapter"];
var langMenu = ["[BACK]", "Cpp", "Java", "JavaScript", "Python"];
var dpSelection = "";
var langSelection = "";

class UserInterface {
    constructor() {
        // On VSCode startup, collapsibleButton is the only item visible. Button toggles all other item's visibility
        this.collapsibleButton = vscode.window.createStatusBarItem(
            vscode.StatusBarAlignment.Left,
            Number.MIN_SAFE_INTEGER
        );
        this.collapsibleButton.show();

        this.bdButton = vscode.window.createStatusBarItem(
          vscode.StatusBarAlignment.Left,
          Number.MIN_SAFE_INTEGER
        );
        this.bdButton.show();
        this.updateStatusBar();
    }

    updateStatusBar() {
        this.collapsibleButton.text = "[Algo-Mate]";
        this.collapsibleButton.command = commands.OPEN_MENU;

        this.bdButton.text = "[Algo-Mate Build Data]";
        this.bdButton.command = commands.GET_BUILD_DATA_BUTTON;
    }

    async openMenu() {
        langSelection = '';
        dpSelection = '';

        await vscode.window.showQuickPick(dpMenu).then((result) => {
            if (result != null) dpSelection = result.toString();
        });

        if(dpSelection == "[Close Menu]") return;
        else
            await vscode.window.showQuickPick(langMenu).then((result) => {
                if (result != null) langSelection = result.toString();
            });

        if (langSelection == "[BACK]")
            this.openMenu();

        dpSelection = dpSelection.toLowerCase();
        langSelection = langSelection.toLowerCase();

        if (dpSelection == '' || langSelection == '') return;
        if(langSelection != "javascript")
            vscode.env.openExternal(vscode.Uri.parse(
                "https://refactoring.guru/design-patterns/" + dpSelection + "/" + langSelection + "/example"
            ));
        else
            vscode.env.openExternal(vscode.Uri.parse(
                "https://www.dofactory.com/javascript/design-patterns/" + dpSelection
            ));

    }

    collapsible() {
        if (collapsed) {
            collapsed = false;
        } else {
            collapsed = true;
        }
    }

    getBuildDataButton() {
        console.clear();
        console.log("Getting build data...");
        getBuildData(cppData, 0);
        getBuildData(jsData, 1);
        getBuildData(javaData, 2);
        getBuildData(pyData, 3);
        vscode.window.showInformationMessage('Algo-Mate build data generated.');
    }

}
exports.UserInterface = UserInterface;

function getBuildData(data, index) {
    var buildData = [];
    var temp;

    // Populating buildData with the time (us) it takes to print JSON data to console
    for (let i = 0; i < 100; i++) {
        var startTime = process.hrtime();
        console.log(data);
        var diff = process.hrtime(startTime);

        temp = Math.floor(diff[1]/1000);
        var t = temp.toString();
        buildData[i] = t;
    }

    buildData.unshift("");
    let csvContent = ",Build Time";
    csvContent += buildData.map((e) => (e += "\n"));

    let file = '';

    switch (index) {
        case 0:
            file = vscode.workspace.workspaceFolders[0].uri.path + "/cppData.csv";
            break;
        case 1:
            file = vscode.workspace.workspaceFolders[0].uri.path + "/javaData.csv";
            break;
        case 2:
            file = vscode.workspace.workspaceFolders[0].uri.path + "/jsData.csv";
            break;
        case 3:
            file = vscode.workspace.workspaceFolders[0].uri.path + "/pyData.csv";
            break;
        default:
        break;
    }

    if (file[1] != "U")
        file = file.substring(1);

    fs.writeFile(file, csvContent, function (err) {
        if (err) throw err;
    });
}


    // PLACEHOLDER TEXT TESTING FUNC
    // async showInputBox() {
    //     const result = await vscode.window.showInputBox({
    //         value: 'abcdef',
    //         valueSelection: [2, 4],
    //         placeHolder: 'For example: fedcba. But not: 123'

	//     });
    // }