// features/groups/groups-list.tsx

import * as React from 'react';
import * as validate from '../../common/validate-entitlements';
import { useNavigate } from '@remix-run/react';

interface IGroup {
  _id: string;
  appLevelAccess: any; // Add this property if needed
  groupName: string;
  groupMembers: any[]; // Update the type as needed
  isDeleted: boolean;
}

interface GroupListProps {
  groups: IGroup[];
}

const GroupList: React.FC<GroupListProps> = React.memo(({ groups }) => {
  const navigate = useNavigate();

  var groupView = groups.map((group) => {
    return (
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
        key={group._id}
      >
        <div>{group.groupName}</div>
        {validate.validateAppLevelEntitlements(
          group.appLevelAccess,
          'User Groups',
          'Edit'
        ) ? (
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
        {group.isDeleted && (
          <span
            className="btn btn-xs btn-outline-danger"
            title="Delete Group"
            onClick={() => {/* Add your delete logic here */}}
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
