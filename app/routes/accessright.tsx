import AccessRights from "../featuress/access-rights/access-rights";
import type { LoaderFunction } from "@remix-run/node";
import GroupModel, { IGroup } from "../models/group-model";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
export default function Groups() {
    // const groups: IGroup[] = useLoaderData();
    // console.log(groups, 'data............');
    return (
      <div className="container">
        {/* <GroupList groups={groups} /> */}
        <AccessRights/>
      </div>
    );
  }
  