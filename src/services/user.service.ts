import { DocumentDefinition } from "mongoose";
import User, { UserDocument } from "../model/user.model";

export async function createUser (input: DocumentDefinition<Omit<UserDocument, 'createdAt'| 'updatedAt'|'comparePasswrd'>
>) {
    try {
        return await User.create(input);
    } catch (error: any) {
        throw new Error(error);
    }
}
