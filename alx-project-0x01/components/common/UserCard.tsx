import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  address,
  company,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
      <h2 className="text-xl font-bold text-blue-700">{name}</h2>
      <p className="text-gray-500">@{username}</p>
      <p className="text-sm text-gray-600 mt-1">{email}</p>
      <p className="text-sm text-gray-600">📞 {phone}</p>
      <a
        href={`https://${website}`}
        target="_blank"
        rel="noreferrer"
        className="text-sm text-blue-500 underline"
      >
        🌐 {website}
      </a>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-700 text-sm">Company</h3>
        <p className="text-gray-600">{company.name}</p>
        <p className="text-gray-400 text-sm italic">{company.catchPhrase}</p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-700 text-sm">Address</h3>
        <p className="text-gray-600">
          {address.street}, {address.suite}, {address.city}
        </p>
        <p className="text-xs text-gray-400">ZIP: {address.zipcode}</p>
      </div>
    </div>
  );
};

export default UserCard;
