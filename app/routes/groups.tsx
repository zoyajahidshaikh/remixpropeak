// routes/groups.tsx

import GroupList from "../featuress/groups/groups-list";
import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import GroupModel from "../models/group-model";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  const groups: Group[] = await GroupModel.find({});
  console.log(groups, 'data............');
  return json({ groups });
};

export default function Groups() {
  const groups: Group[] = useLoaderData();
  console.log(groups, 'data............');
  return (
    <div className="container">
      <GroupList groups={groups} />
      {/* <Outlet /> */}
    </div>
  );
}
