import React from "react";

function ProfileCard({ user }) {
  return (
    <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
      <div className="relative">
        <img
          src={user.image || "https://via.placeholder.com/400x300"}
          alt={`${user.firstName} ${user.lastName}`}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
        <h2 className="absolute bottom-4 left-4 text-xl font-semibold text-white drop-shadow-lg">
          {user.firstName} {user.lastName}
        </h2>
      </div>

      <div className="p-6 space-y-3">
        <div className="flex flex-col gap-1">
          <p className="text-gray-500 text-sm">Email</p>
          <p className="font-medium text-gray-900 dark:text-gray-100">
            {user.email}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-3">
          <div>
            <p className="text-gray-500 text-sm">Age</p>
            <p className="font-medium text-gray-900 dark:text-gray-100">
              {user.age}
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Birth Date</p>
            <p className="font-medium text-gray-900 dark:text-gray-100">
              {user.birthDate}
            </p>
          </div>
        </div>

        <div className="mt-3">
          <p className="text-gray-500 text-sm">Phone</p>
          <p className="font-medium text-gray-900 dark:text-gray-100">
            {user.phone}
          </p>
        </div>

        <button className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition-all duration-200">
          View Profile
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
