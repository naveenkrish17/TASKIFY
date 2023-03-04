import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const Tasks = ({ incrementCompletedTasks }) => {
  const [completedTasks, setCompletedTasks] = useState(0);
  const [selectedProject, setSelectedProject] = useState("");

  const handleTaskCompletion = () => {
    setCompletedTasks(completedTasks + 1);
    incrementCompletedTasks();
  };

  const handleProjectClick = (projectName) => {
    setSelectedProject(projectName);
  };

  return (
    <div className="tasks">
      <div className="tasks-header">
        <h2>Tasks</h2>
        <button className="add-task-btn">
          <FaPlus /> Add Task
        </button>
      </div>
      <div className="tasks-search">
        <input type="text" placeholder="Search Tasks..." />
      </div>
      <div className="projects-list">
        <h3>Projects:</h3>
        <ul>
          <li onClick={() => handleProjectClick("Project 1")}>Project 1</li>
          <li onClick={() => handleProjectClick("Project 2")}>Project 2</li>
          <li onClick={() => handleProjectClick("Project 3")}>Project 3</li>
        </ul>
      </div>
      {selectedProject && (
        <div className="tasks-table">
          <h3>Add Task for {selectedProject}</h3>
          <table>
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Description</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Task 1</td>
                <td>Description 1</td>
                <td>2023-03-10</td>
                <td>Completed</td>
                <td></td>
              </tr>
              <tr>
                <td>Task 2</td>
                <td>Description 2</td>
                <td>2023-03-15</td>
                <td>In Progress</td>
                <td></td>
              </tr>
              <tr>
                <td>Task 3</td>
                <td>Description 3</td>
                <td>2023-03-20</td>
                <td>Not Started</td>
                <td>
                  <button onClick={handleTaskCompletion}>Task Completed</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Tasks;
