import React, { ChangeEvent, Component, FormEvent } from 'react';
import TaskMenu from '../../tasks/task-menu';
import * as accessrightservice from '../../Services/access-right/access-right-service';
import * as applevelaccessrightservice from '../../Components/Entitlement/services/applevelaccessright-service';

interface User {
  userId: string;
  name: string;
  // Add other properties as needed
}

interface Project {
  projectName: string;
  projectUsers: User[];
  // Add other properties as needed
}

interface ContextState {
  projectName: string;
  project: Project;
  users: User[];
  userNameToId: Record<string, string>; // Assuming userNameToId is a mapping from userName to userId
}

interface ContextActions {
  getProjectData: (projectId: string) => Promise<void>;
  setUsers: () => void;
}

interface AccessRightsProps {
  context: {
    actions: ContextActions;
    state: ContextState;
  };
  projectId: string;
}

interface Entitlement {
  id: number;
  entitlementId: string;
  group: string;
  value: boolean;
}

interface AccessRightsState {
  projectName: string;
  project: Project;
  users: User[];
  userNameToId: Record<string, string>;
  userName: string;
  label: string;
  entitlements: Entitlement[];
}

export default class AccessRights extends Component<AccessRightsProps, AccessRightsState> {
  constructor(props: AccessRightsProps) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // const { projectName, project, users, userNameToId } = props.context.state;
    const { projectName, project, users, userNameToId } = props.context.state || {};

    this.state = {
      projectName,
      project,
      users,
      userNameToId,
      userName: '',
      label: '',
      entitlements: [
        { id: 1, entitlementId: 'edit', group: 'Projects', value: false },
        { id: 2, entitlementId: 'delete', group: 'Projects', value: false },
        // Add other initial entitlements as needed
      ],
    };
  }

  async componentDidMount() {
    await this.props.context.actions.getProjectData(this.props.projectId);
    if (this.state.users.length === 0) this.props.context.actions.setUsers();
  }

  async getUserAccessRights(userId: string | undefined) {
    // Implement the logic to get user access rights
  }

  handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    let userName = e.target.value;

    if (userName === '') {
      let entitlementsCopy = [...this.state.entitlements];
      let entitlements = entitlementsCopy.map((e) => {
        e.value = false;
        return e;
      });
      this.setState({
        entitlements,
        userName,
        label: '',
      });
    } else {
      let userId = this.state.userNameToId && this.state.userNameToId[userName.toLowerCase().replace(/ +/g, '')];
      this.getUserAccessRights(userId);
      this.setState({
        userName,
        label: '',
      });
    }
  }

  handleCheck(id: number, e: ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    const value = target.checked;

    let rights = [...this.state.entitlements];
    let userEntitlements = rights.map((r) => {
      if (r.id === id) {
        r.value = value;
      }
      return r;
    });

    this.setState({
      entitlements: userEntitlements,
    });
  }

  async onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  
    let userId = this.state.userNameToId && this.state.userNameToId[this.state.userName.toLowerCase().replace(/ +/g, '')];
  
    let userEntitlements = this.state.entitlements.filter((e) => {
      return e.value === true;
    });
  
    try {
      let { response, err } = await accessrightservice.saveUserAccessRight(userAccessRights);
  
      if (err) {
        this.setState({
          message: 'Error: ' + err,
        });
      } else if (response && response.data && response.data.err) {
        this.setState({
          message: 'Error: ' + response.data.err,
        });
      } else if (response && response.data) {
        let entitlementsCopy = [...this.state.entitlements];
        let entitlements = entitlementsCopy.map((e) => {
          e.value = false;
          return e;
        });
  
        this.setState({
          label: response.data.msg,
          userName: '',
          entitlements,
        });
      } else {
        // Handle other cases or set state accordingly
        // For example, show a generic success message or take appropriate actions
        console.log('Unexpected response:', response);
      }
    } catch (error) {
      // Handle unexpected errors
      console.error('Unexpected error:', error);
  
      // Set an appropriate message or take actions based on the error
      this.setState({
        message: 'An unexpected error occurred. Please try again later.',
      });
    }
  }
  

  render() {
    let { entitlements } = this.state;
    let projectUsers = this.state.project.projectUsers && this.state.project.projectUsers.map((u) => {
      return (
        <option key={u.userId} data-value={u.userId}>
          {u.name}
        </option>
      );
    });

    let entitlementObject: Record<string, Entitlement[]> = {};
    if (entitlements.length > 0) {
      for (let i = 0; i < entitlements.length; i++) {
        if (entitlementObject[entitlements[i].group]) {
          entitlementObject[entitlements[i].group].push(entitlements[i]);
        } else {
          entitlementObject[entitlements[i].group] = [entitlements[i]];
        }
      }
    }

    var keys = Object.keys(entitlementObject);
    let checkBoxes = keys.map((k, index) => {
      let values = entitlementObject[k].map((a) => {
        return (
          <div key={a.id} className="col-sm-2">
            <div className="form-group">
              <input
                type="checkbox"
                placeholder=" "
                onChange={this.handleCheck.bind(this, a.id)}
                checked={a.value}
              />
              &nbsp;
              <label style={{ fontSize: 'small', marginRight: '7px', textTransform: 'capitalize' }}>
                {a.entitlementId}
              </label>
            </div>
          </div>
        );
      });

      return (
        <div className="row" key={index} style={{ marginTop: '10px' }}>
          <div className="col-sm-2">
            <div className="form-group">
              <label htmlFor={k} style={{ fontSize: 'small', textTransform: 'capitalize' }}>
                {k}
              </label>
            </div>
          </div>
          {values}
        </div>
      );
    });

    return (
      <React.Fragment>
        <div className="container content-wrapper">
          <h3 className="project-title d.inline-block mt-3 mb-3">{this.state.projectName}-Access Rights</h3>
          <hr />
          <TaskMenu {...this.props} />
          <form onSubmit={this.onSubmit}>
            <span style={{ color: 'green' }}>{this.state.label}</span>
            <div className="row" style={{ marginTop: '10px' }}>
              <div className="col-sm-4">
                <label htmlFor="Assigned Users" style={{ fontSize: 'small' }}>
                  Project Users :
                </label>
                <input
                  type="text"
                  value={this.state.userName}
                  list="assignedUsers"
                  onChange={this.handleInputChange}
                  name="userName"
                  className="form-control"
                  autoComplete="off"
                  placeholder="Select User"
                />
                <datalist id="assignedUsers">{projectUsers}</datalist>
              </div>
            </div>

            {checkBoxes}

            <div className="row" style={{ marginTop: '10px' }}>
              <div className="col-sm-2 float-right">
                <input
                  type="submit"
                  className="btn btn-primary btn-block"
                  value="Save"
                  disabled={!this.state.userName}
                />
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
