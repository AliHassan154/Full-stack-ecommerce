import { useAuth } from "../../context/authContext.js";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Spinner from "./Spinner.js";


export default function AdminRoute() {
    const [auth] = useAuth();
    const [ok, setOk] = useState(false);

    useEffect(() => {
        const authCheck = async () => {
            try {
                const res = await fetch(
                    "https://thorough-tranquility-production-dca2.up.railway.app/api/auth/admin",
                    {
                        method: "GET",
                        headers: {
                            Authorization: auth?.token,
                        },
                    }
                );
                console.log("Private Routes Response", res);
                const result = await res.json();
                console.log("Private Routes Result", result);

                if (result.ok) {
                    setOk(true);
                } else {
                    setOk(false);
                }
            } catch (error) {
                setOk(false);
                console.log("Private Routes Error", error);
            }
        };

        if (auth?.token) {
            authCheck();
        } else {
            setOk(false);
        }
    }, [auth?.token]);

    return ok ? <Outlet /> : <Spinner />;
}