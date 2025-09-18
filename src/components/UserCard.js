import React from "react";
import { Card } from "antd";

function UserCard({ user }) {
    const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`;

    return (
        <Card
            hoverable
            cover={
                <img
                    alt={user.name}
                    src={avatarUrl}
                    style={{ height: 200, objectFit: "contain" }}
                />
            }
        >
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>
                Address: {user.address.street}, {user.address.city}
            </p>
            <p>Company: {user.company.name}</p>
        </Card>
    );
}

export default UserCard;
