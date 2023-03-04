import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Dashboard = () => {
  const tasks = [
    { id: 1, name: "Task 1", status: "completed", project: "Project 1" },
    { id: 2, name: "Task 2", status: "in progress", project: "Project 2" },
    { id: 3, name: "Task 3", status: "not started", project: "Project 3" },
    { id: 4, name: "Task 4", status: "in progress", project: "Project 1" },
    { id: 5, name: "Task 5", status: "not started", project: "Project 2" },
    { id: 6, name: "Task 6", status: "completed", project: "Project 3" },
  ];
  const [updatedTasks, setUpdatedTasks] = useState(tasks);
  const [completedTasks, setCompletedTasks] = useState(
    updatedTasks.filter((task) => task.status === "completed").length
  );
  const inProgressTasks = updatedTasks.filter(
    (task) => task.status === "in progress"
  );
  const notStartedTasks = updatedTasks.filter(
    (task) => task.status === "not started"
  );
  const projects = [
    { id: 1, name: "Project 1", numTasks: 2 },
    { id: 2, name: "Project 2", numTasks: 2 },
    { id: 3, name: "Project 3", numTasks: 2 },
  ];
  React.useEffect(() => {
    // Update the number of completed tasks if the new status is "completed"
    const tempCompletedTasks = updatedTasks.filter(
      (task) => task.status === "completed"
    ).length;
    setCompletedTasks(tempCompletedTasks);
  }, [updatedTasks]);

  const handleTaskStatusChange = (taskId, newStatus) => {
    // Find the task with the given ID and update its status
    const tempUpdatedTasks = updatedTasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }
      return task;
    });
    setUpdatedTasks(tempUpdatedTasks);
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="summary">
        <div className="project-summary">
          <h3>Projects</h3>
          <div className="summary-list">
            {projects.map((project) => (
              <div key={project.id} className="summary-item">
                <div className="summary-item-header">
                  <h4>{project.name}</h4>
                </div>
                <div className="summary-item-body">
                  {project.numTasks} tasks
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="task-summary">
          <h3>Tasks</h3>
          <div className="summary-list">
            <div className="summary-item">
              <div className="summary-item-header">
                <h4>Completed</h4>
              </div>
              <div className="summary-item-body">
                {completedTasks} <FaCheckCircle className="completed-icon" />
              </div>
            </div>
            <div className="summary-item">
              <div className="summary-item-header">
                <h4>Not Started</h4>
              </div>
              <div className="summary-item-body">{notStartedTasks.length}</div>
            </div>
            <div className="summary-item">
              <div className="summary-item-header">
                <h4>In Progress</h4>
              </div>
              <div className="summary-item-body">{inProgressTasks.length}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="task-list">
        <h3>All Tasks</h3>
        <></>
        <div className="task-list-body" style={{ display: 'flex', flexDirection:"row", justifyContent:'space-between', flexWrap:'wrap' }}>
          {updatedTasks.map((task) => (
            <div key={task.id} className="task" style={{display:'flex', flexDirection:'column'}}>
              <div className="task-header">
                <h4>{task.name}</h4>
                <select
                  value={task.status}
                  onChange={(e) => {
                    console.log(e.target.value);
                    handleTaskStatusChange(task.id, e.target.value);
                  }}
                >
                  <option value="completed">Completed</option>
                  <option value="in progress">In Progress</option>
                  <option value="not started">Not Started</option>
                </select>
              </div>
              <div className="task-body">
                <div className="task-project">{task.project}</div>
                <div className="task-status">{task.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
