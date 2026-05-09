"use client";

import UpdateUserModal from "@/components/shared/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Image from "next/image";
import React from "react";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;


  return (
    <div className="min-h-screen  mt-10 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-[2rem] p-8 text-center">
        
        {/* Profile Image */}
        <div className="relative w-32 h-32 mx-auto mb-6">
          <Avatar className="h-32 w-32">
           <Avatar.Image
            src={user?.image }
            alt={user?.name}              
            referrerPolicy="no-referrer"
            />
            <Avatar.Fallback className="text-3xl">
              {user?.name?.charAt(0).toUpperCase()}
            </Avatar.Fallback>
          </Avatar>
          
        </div>

        {/* Name */}
        <h2 className="text-3xl font-black text-gray-800 mb-2">
          {user?.name}
        </h2>

        {/* Email */}
        <p className="text-gray-500 text-xs mb-8">
          {user?.email}
        </p>

        {/* Info Card */}
        <div className="bg-slate-100 rounded-2xl p-5 text-left space-y-4">
          
          <div>
            <p className="text-sm text-gray-500 mb-1">
              Name
            </p>
            <h4 className="font-semibold text-gray-800">
              {user?.name}
            </h4>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-1">
              Email Address
            </p>
            <h4 className="font-semibold text-gray-800 break-all">
              {user?.email}
            </h4>
          </div>

          <div className="flex justify-end">
<UpdateUserModal user={user} />
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;