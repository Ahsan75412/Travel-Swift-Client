import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import UserRow from "./UserRow";

const Users = () => {
    const {
        data: users,
        isLoading,
        refetch,
    } = useQuery("users", () =>
        fetch("https://travel-tour-server-eight.vercel.app/user", {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );
    // console.log(users);
    if (isLoading) {
        return <Loading />;
    }
    return (
        <div>
            <h2 className="text-2xl font-bold text-yellow-700">All users: {users.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <UserRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                                index={index}
                            ></UserRow>
                        ))}

                    </tbody>
                </table>

            </div>

        </div>

    );
};

export default Users;