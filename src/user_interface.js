
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
        await vscode.window.showQuickPick(dpMenu).then((result) => {
            if (result != null) dpSelection = result.toString();
        });

        if(dpSelection == "[Close Menu]")
            return;
        else
            await vscode.window.showQuickPick(langMenu).then((result) => {
              if (result != null) langSelection = result.toString();
            });

        dpSelection = dpSelection.toLowerCase();
        langSelection = langSelection.toLowerCase();

        if(langSelection != "javascript")
            vscode.env.openExternal(vscode.Uri.parse(
                "https://refactoring.guru/design-patterns/" + dpSelection + "/" + langSelection + "/example"
                ));
        else
            console.log("JavaScript needs its own web pages OR we can drop it as a language, or switch languages");
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
}

exports.UserInterface = UserInterface;