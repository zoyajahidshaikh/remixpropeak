import stylesUrl from "../../styles/group.css";
export const links = () => [{ rel: "stylesheet", href: stylesUrl }];
import { useNavigate } from "@remix-run/react";

// features/groups/groups-list.tsx

import * as React from 'react';
import * as validate from '../../common/validate-entitlements';

const GroupList: React.FC<{ groups: any }> = React.memo(({ groups }) => {
  const navigate =useNavigate();
  let editUserGroup = validate.validateAppLevelEntitlements(
    groups.appLevelAccess,
    'User Groups',
    'Edit'
  );
  let deleteUserGroup = validate.validateAppLevelEntitlements(
    groups.appLevelAccess,
    'User Groups',
    'Delete'
  );

  var groupView = groups.map((group:any, index:any) => {
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
{deleteUserGroup ? (
  <span
    className="btn btn-xs btn-outline-danger"
    title="Delete Group"
    onClick={() => groups.onDelete(group._id)}
  >
    🗑  {/* <i className="far fa-trash-alt"></i> */}
  </span>
) : (
  ''
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

