"use client";
import ProtectedRoute from "@/components/shared/ProtectedRoutes";
import { useTheme } from "next-themes";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useGetUserProfileQuery } from "@/lib/redux/features/users/userApiSlice";

function HeaderContent() {
	const { data } = useGetUserProfileQuery();
	const { theme } = useTheme();
	const profile = data?.profile;
	return (
		<div className="flex flex-col gap-2">
			<Avatar className="border-pumpkin mx-auto size-32 overflow-hidden rounded-full border-4 object-cover">
				<AvatarImage
					src={
						profile?.avatar ||
						(theme === "dark"
							? "/assets/icons/user-profile-circle.svg"
							: "/assets/icons/user-profile-light-circle.svg")
					}
					alt="profile image"
					width={128}
					height={128}
				/>
			</Avatar>
			<div className="flex flex-col items-center justify-center space-y-3">
				<h1 className="font-robotoSlab dark:text-platinum text-5xl font-semibold">
					{profile?.full_name}
				</h1>
				<p className="dark:text-lime-500">@{profile?.username}</p>
			</div>
		</div>
	);
}

export default function Header() {
	return (
		<ProtectedRoute>
			<HeaderContent />
		</ProtectedRoute>
	);
}