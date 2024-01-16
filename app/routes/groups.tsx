import GroupList from "../featuress/groups/groups-list";
import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import Group from "../models/group-model";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
// routes/groups.tsx

//import { Outlet } from 'react-router-dom';
export const loader: LoaderFunction = async () => {
    const groups = await Group.find({});
    console.log(groups, 'data............');
    return json({ groups });
  };


export default function Groups() {
  const groups = useLoaderData();
  console.log(groups, 'data............');
  return (
    <div className="cotainer">
      <GroupList groups={groups} />
      {/* <Outlet /> */}
    </div>
  );
}
