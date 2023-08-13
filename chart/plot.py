import matplotlib.pyplot as plt
import numpy as np

# Create some data
x = np.linspace(0, 10, 100)
y = x**2

# Create a line chart
plt.plot(x, y)

# Add a title and labels
plt.title('Squared Numbers')
plt.xlabel('x')
plt.ylabel('y')

# Show the plot
plt.show()
