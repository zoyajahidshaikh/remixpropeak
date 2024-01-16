import * as mongoose from "mongoose";

// Define the database model
const GroupSchema = new mongoose.Schema({
    groupName: {
        type: String
    },
    groupMembers: [],
    isDeleted: {
        type: Boolean
    }
}, {
    versionKey: false
});

const Group = mongoose.model('group', GroupSchema);

export default Group;
