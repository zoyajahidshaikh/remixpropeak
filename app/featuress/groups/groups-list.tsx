import * as React from 'react';
import * as validate from '../../common/validate-entitlements';
import { useNavigate } from '@remix-run/react';

interface GroupListProps {
  groups: {
    appLevelAccess: any; // Adjust the type based on your actual structure
    _id: string;
    groupName: string;
    onDelete?: (id: string) => void; // Ensure onDelete is a function taking a string parameter
  }[];
}

const GroupList: React.FC<GroupListProps> = React.memo(({ groups }) => {
  const navigate = useNavigate();

  // Check if groups is not an array or is empty
  if (!Array.isArray(groups) || groups.length === 0) {
    // Handle the case where groups is not an array or is empty
    return <div>No groups available</div>;
  }

  let editUserGroup = validate.validateAppLevelEntitlements(
    groups[0].appLevelAccess, // Assuming appLevelAccess is a property of the first group
    'User Groups',
    'Edit'
  );

  var groupView = groups.map((group) => {
    return (
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
        key={group._id}
      >
        <div>{group.groupName}</div>

        {editUserGroup ? (
          <span
            className="btn btn-xs btn-outline-info"
            title="Edit Group"
            onClick={() => navigate(`/edit-group/${group._id}`)}
          >
            <i className="fas fa-pencil-alt"></i>
          </span>
        ) : (
          ''
        )}{' '}
        &nbsp;
        {group.onDelete && (
          <span
            className="btn btn-xs btn-outline-danger"
            title="Delete Group"
            onClick={() => group.onDelete && group.onDelete(group._id)}
          >
            🗑
          </span>
        )}
      </li>
    );
  });

  return <ul className="list-group list-group-flush">{groupView}</ul>;
});

export default GroupList;









// import React from 'react';
// import '../styles';
// import * as validate from '../../common/validate-entitlements';

// const GroupList = React.memo({groups}:{groups:any}){
// 	// const GroupList = (props) => {
// 	// console.log("Grouplist rendered", props);
// 	let editUserGroup = validate.validateAppLevelEntitlements(props.appLevelAccess, 'User Groups', 'Edit');
// 	let deleteUserGroup = validate.validateAppLevelEntitlements(props.appLevelAccess, 'User Groups', 'Delete');

// 	var groupView = groups.groups.map((group, index) => {

// 		return (
// 			<li className="list-group-item d-flex justify-content-between align-items-center" key={group._id}>
// 				<div>
// 					{group.groupName}
// 				</div>
// 				<span>
// 					{editUserGroup ? <span className="btn btn-xs btn-outline-info" title="Edit Group" onClick={props.editGroupWindow.bind(this, group._id, group)}>
// 						<i className="fas fa-pencil-alt"></i>
// 					</span> : ""} &nbsp;
// 					{deleteUserGroup ? <span className="btn btn-xs btn-outline-danger" title="Delete Group" onClick={props.onDelete.bind(this, group._id)}>
// 						<i className="far fa-trash-alt"></i>
// 					</span> : ""}
// 				</span>
// 			</li>
// 		)
// 	});

// 	return (
		
// 			<ul className="list-group list-group-flush">
// 				{groupView}
// 			</ul>

// 	);
// });

// export default GroupList;

