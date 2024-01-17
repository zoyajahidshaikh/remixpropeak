// routes/groups.tsx

import GroupList from "../featuress/groups/groups-list";
import type { LoaderFunction } from "@remix-run/node";
import GroupModel, { IGroup } from "../models/group-model";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  const groupsFromDB: {
    _id: string;
    appLevelAccess: any;
    groupName: string;
    groupMembers: any[];
    isDeleted: boolean;
  }[] = await GroupModel.find({});

  const formattedGroups: IGroup[] = groupsFromDB.map(group => ({
    _id: group._id,
    appLevelAccess: group.appLevelAccess || {}, // Add default if necessary
    groupName: group.groupName || "",           // Add default if necessary
    groupMembers: group.groupMembers || [],    // Add default if necessary
    isDeleted: group.isDeleted || false,        // Add default if necessary
  } as IGroup)); // Explicit type assertion

  console.log(formattedGroups, 'group wala data............');
  return json(formattedGroups);
};

export default function Groups() {
  const groups: IGroup[] = useLoaderData();
  console.log(groups, 'data............');
  return (
    <div className="container">
      <GroupList groups={groups} />
    </div>
  );
}
