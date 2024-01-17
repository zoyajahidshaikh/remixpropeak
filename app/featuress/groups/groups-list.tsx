import * as React from 'react';
import * as validate from '../../common/validate-entitlements';
import { useNavigate } from '@remix-run/react';

interface IGroup {
  _id: string;
  groupMembers: any[];
  groupName: string;
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

        {/* Assuming you still want to check for editUserGroup */}
        {validate.validateAppLevelEntitlements(
          group.appLevelAccess, // Assuming appLevelAccess is still a property of each group
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
        {/* Assuming onDelete is still a property of each group */}
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



