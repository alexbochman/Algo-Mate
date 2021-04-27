
// Required         =======================================================================================
const vscode = require("vscode");
const commands = require("./commands");
const { workspace, ConfigurationTarget } = require("vscode");

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
        this.updateStatusBar();
    }

    updateStatusBar() {
        this.collapsibleButton.text = "[Algo-Mate]";
        this.collapsibleButton.command = commands.OPEN_MENU;
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
            console.log("function: un-collapsing");
            collapsed = false;
        } else {
            console.log("function: collapsing");
            collapsed = true;
        }
    }

    // PLACEHOLDER TEXT TESTING FUNC
    // async showInputBox() {
    //     const result = await vscode.window.showInputBox({
    //         value: 'abcdef',
    //         valueSelection: [2, 4],
    //         placeHolder: 'For example: fedcba. But not: 123'

	//     });
    // }
}

exports.UserInterface = UserInterface;