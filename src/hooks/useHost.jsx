import { useEffect, useState } from "react";


const useHost = (user) => {
    const [host, setHost] = useState(false);
    const [hostLoading, setHostLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            const url = `http://localhost:5000/host/${email}`;
            fetch(url, {
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data) {
                        setHost(data.host);
                        setHostLoading(false);
                    }
                });
        }
    }, [user]);

    return [host, hostLoading];
};
export default useHost;