# Gantt Chart for Clayverest

## Project Description

This project was developed as a technical assessment for Clayverest. It's a Gantt Chart that allow the user to monitor its current projects.

## Key Features Implemented

- Component Architecture: Clean separation between data (mockData.js), presentation (TaskBar.jsx), and container logic (GanttChart.jsx).
- Dynamic Data Flow: The task list and project name are managed in the top-level state (App.jsx), allowing for real-time updates.
- Modals: Implemented two distinct modal types for user interaction:
  - A Task Details Modal to view information when clicking on a task bar.
  - An Add Task Modal with a form to create and add new tasks to the chart.
- Sidebar: A simple sidebar to demonstrate state lifting by allowing users to change the project title.

## Next Features / Future Development

The following features are planned to expand the utility of the Gantt chart and would be the next steps in development:

- Task Modification
- Task Deletion
- Improve CSS to match Clayverest app
