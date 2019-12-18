import React from "react";
import projectData from "../projectdata.json";
import ProjectList from "./ProjectList";
import ProjectDetail from "./ProjectDetail";

class Projects extends React.Component {
  state = { projects: projectData, selectedProject: projectData[0] };

  onProjectSelect = project => {
    this.setState({ selectedProject: project });
  };

  render() {
    return (
      <div className="ui container stackable grid">
        <div className="ui row">
          <div className="eleven wide column">
            <ProjectDetail project={this.state.selectedProject} />
          </div>
          <div className="five wide column">
            <ProjectList
              onProjectSelect={this.onProjectSelect}
              projects={this.state.projects}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;