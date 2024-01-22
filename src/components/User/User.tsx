import React from "react";

export interface UserProps {
    uid: string,
    name: string,
    email: string
}

const User = ({ uid, name, email }: UserProps) => {
    return (
        <div>
            UID: {uid}, Name: {name}, E-mail: {email}
        </div>
    );
};

export default User;