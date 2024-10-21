import React from "react";

export interface UserProps {
    uid: string,
    name: string,
    email: string
}

const User = ({ uid, name, email }: UserProps) => {
    if (!uid && !name && !email) {
        return;
    }

    return (
        <div>
            User: {name || email || uid}
        </div>
    );
};

export default User;