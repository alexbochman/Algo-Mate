""" 
Notes: 
Run With: python Predictor.py <filename>
Example: python Predictor.py EOD-MSFT.csv
"""

import sys
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

class BuildTimePlot:

    # Import Data from CSV
    data = pd.read_csv(sys.argv[1])
    print(data)
    num_rows = len(data.index)
    print('Number of Rows', num_rows)

    data['Build Time'].plot(kind='hist', bins = np.arange(1000, 2000) - 0.5)

    plt.xticks([1000, 1250, 1500, 1750, 2000])
    plt.yticks([0, 1, 2, 3])
    plt.title('Algo-Mate Build Time Data')
    plt.xlabel('Build Times in Microseconds')
    plt.ylabel('Amount of Builds')

    plt.show()
