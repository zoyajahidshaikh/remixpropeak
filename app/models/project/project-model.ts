// import mongoose, { Document, Schema } from "mongoose";
// // import { ProjectUsers, ProjectUserSchema } from "../project/project-user-model";
// // import { NotifyUsers, NotifyUserSchema } from "../user/notify-user-model";
// // import { UserGroups, UserGroupSchema } from "../user/user-group-model";
// // import { Message, MessageSchema } from "../message/message-model";
// // import { UploadFile, UploadFileSchema } from "../upload-file/upload-file-model";
// // import { Tasks, TaskSchema } from "../task/task-model";

// // Define the database model
// interface IProject extends Document {
//   title: string;
//   description: string;
//   startdate: string;
//   enddate: string;
//   status: string;
//   category: string;
//   userid: string;
//   createdBy: string;
//   createdOn: string;
//   modifiedBy: string;
//   modifiedOn: string;
//   sendnotification: string;
//   companyId: string;
//   userGroups: UserGroupSchema[];
//   group: string;
//   isDeleted: boolean;
//   miscellaneous: boolean;
//   archive: boolean;
//   projectUsers: ProjectUserSchema[];
//   notifyUsers: NotifyUserSchema[];
//   messages: MessageSchema[];
//   uploadFiles: UploadFileSchema[];
//   tasks: TaskSchema[];
// }

// const ProjectSchema = new mongoose.Schema<IProject>({
//   title: {
//     type: String,
//   },
//   description: {
//     type: String,
//   },
//   startdate: {
//     type: String,
//   },
//   enddate: {
//     type: String,
//   },
//   status: {
//     type: String,
//   },
//   category: {
//     type: String,
//   },
//   userid: {
//     type: String,
//   },
//   createdBy: {
//     type: String,
//   },
//   createdOn: {
//     type: String,
//   },
//   modifiedBy: {
//     type: String,
//   },
//   modifiedOn: {
//     type: String,
//   },
//   sendnotification: {
//     type: String,
//   },
//   companyId: {
//     type: String,
//   },
//   userGroups: {
//     type: [UserGroupSchema],
//   },
//   group: {
//     type: String,
//   },
//   isDeleted: {
//     type: Boolean,
//   },
//   miscellaneous: {
//     type: Boolean,
//   },
//   archive: {
//     type: Boolean,
//   },
//   projectUsers: {
//     type: [ProjectUserSchema],
//   },
//   notifyUsers: {
//     type: [NotifyUserSchema],
//   },
//   messages: {
//     type: [MessageSchema],
//   },
//   uploadFiles: {
//     type: [UploadFileSchema],
//   },
//   tasks: {
//     type: [TaskSchema],
//   },
// }, { versionKey: false });

// const Project = mongoose.model<IProject>('project', ProjectSchema);

// export default Project;
