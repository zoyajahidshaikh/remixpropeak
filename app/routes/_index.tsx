// routes/index.tsx

import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import Group from "../models/group-model";
import { json } from "@remix-run/node";
import GroupList from "../featuress/groups/groups-list";
import { useLoaderData } from "@remix-run/react";
import mongoose, { ConnectOptions } from "mongoose";
import config from "../config/config";
import LeaveList from "../featuress/leave/components/leave-list";
interface MyConnectOptions extends ConnectOptions {
  useUnifiedTopology?: boolean;
}

export const connectToMongoDB = async () => {
  try {
    // Use MyConnectOptions instead of ConnectOptions
    await mongoose.connect(config.db, {
      useUnifiedTopology: true,
    } as MyConnectOptions);

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

connectToMongoDB();

export const loader: LoaderFunction = async () => {
  const groups = await Group.find({});
  // console.log(groups, 'data............');
  return json({ groups });
};

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
interface LoaderData {
  groups: any[]; // Replace any with the actual type of your groups array
}
const GroupListWrapper = () => {
  // Use the LoaderData interface to define the type of useLoaderData
  const { groups } = useLoaderData() as LoaderData;
  return <GroupList groups={groups} />;
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>HELLO</h1>
      <GroupListWrapper />
      <LeaveList/>
    </div>
  );
}
1850

672
549
831