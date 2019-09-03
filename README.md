# Belly Button Biodiversity

![Bacteria by filterforge.com](Images/bacteria_by_filterforgedotcom.jpg)

In this challenge, I have built an interactive dashboard to explore the [Belly Button Biodiversity DataSet](http://robdunnlab.com/projects/belly-button-biodiversity/).

## Step 1 - Plotly.js

Used Plotly.js to build interactive charts for this dashboard.

* Created a PIE chart that uses data from samples route (`/samples/<sample>`) to display the top 10 samples.

  ![PIE Chart](Images/pie-chart.png)

* Created a Bubble Chart that uses data from samples route (`/samples/<sample>`) to display each sample.

  ![Bubble Chart](Images/bubble_chart.png)

* Dashboard

![Example Dashboard Page](Images/dashboard_part1.png)
![Example Dashboard Page](Images/dashboard_part2.png)

## Step 2 - Heroku

Deployed the  Flask app to [Heroku](https://belly-button-dash-app.herokuapp.com/).

- - -

## Advanced Challenge Assignment (Optional)

* Gauge Chart to plot the Weekly Washing Frequency obtained from the `/metadata/<sample>`route.

![Weekly Washing Frequency Gauge](Images/gauge.png)

- - -

## Flask API

Use Flask API starter code to serve the data needed for your plots.

* Tested different routes.

1. /samples/<sample>

![route1](Images/route1-2.png)

2. /metadata/<sample>

![route1](Images/route2-2.png)


