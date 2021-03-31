# Algo-Mate README

### Download and Use Extension
1. Make sure Visual Studio Code is installed. Dowload here: https://code.visualstudio.com/download
2. Download and install the extension
   * Option 1: From Visual Studio Marketplace: https://marketplace.visualstudio.com/items?itemName=AlexBochman.algo-mate
   * Option 2: From within VS Code, click on the extensions tab on the left-hand sidebar and search for "<strong>Algo-Mate</strong>"

---

### Clone, Build, Develop, and Test Instructions
1. Make sure Visual Studio Code is installed. Dowload here: https://code.visualstudio.com/download
2. Clone the latest version of Algo-Mate: https://github.com/alexbochman/Algo-Mate.git
3. Open the Algo-Mate project in VS Code
    * Make any changes to the files in the "src" folder, or the package.json
4. Click Run > Start Debugging to test Algo-Mate
5. In the VS Code development window that pops up
    * You'll see [Algo-Mate] on the status bar. Clicking it will bring up UI options.
    * Typing out any of the prefixs from the any of the JSON files _within a file that qualifies_ (.cpp, .java, .js, .py) will display design patterns that can be autocompleted.
    * After autocompleting a design pattern, points of interest (POI) will be highlighted. They can be modified, and groups of POIs will be changed automatically while still highlighted. 
    * Hitting tab will navigate to the next POI.
    * Hitting shift+tab will navigate back to the previous POI.

---

### Result Generation Instructions
Results are based off of data collected when the extension is activated. To simulate a user autocompleting a design pattern within their file, we've written code to pull the design pattern from a JSON file in the same manner, but we're printing it to the console instead of the user's file. The data is iteratively generated, stored within an array, and then exported to a file named data.csv. Steps to reproduce the data and display it graphically are listed below.

#### Getting The Build Data
1. Dowload and open up the project in VS Code.
2. Start the VS Code debugger by navigating to Run > Start Debugging (F5)
3. (!IMPORTANT!) In the [Extension Development Host] window that pops up, navigate (File > Open Folder) to a location where you'd like the data.csv file to be stored.
    * Recommended: Navigate to the root of the project folder where the Algo_Mate_Results.py file is located.
4. Execute the extension by navigating to View > Command Palette and searching for Hello World.
5. In the original VS Code window, you will see the data being printed to the console. The data.csv will have been generated and exported to the workspace folder that was opened in step 3.

#### Generating The Histogram with Python
1. Make sure numpy, pandas, and matplotlib are all installed in your CLI
2. In your CLI, run the command ``` python3 Algo_Mate_Results.py data.csv ``` to generate the histogram in a pop-up window
