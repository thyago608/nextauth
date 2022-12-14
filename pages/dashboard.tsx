import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { api } from "../services/api";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api.get("/me").then((response) => console.log(response.data));
  }, []);

  return (
    <>
      <div>Dashboard: {user?.email}</div>
      <div>asuhasuahush</div>
    </>
  );
}
