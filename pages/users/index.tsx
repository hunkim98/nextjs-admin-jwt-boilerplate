import axios from "axios";
import { NextPage } from "next";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import Users from "../../components/Users/Users";
import { GetAdminUsersResDto, UserInfo } from "../../dto/User/user.res.dto";

const UsersPage: NextPage = () => {
  useEffect(() => {
    getUsers(1);
  }, []);
  const [users, setUsers] = useState<Array<UserInfo>>([]);
  const [usersPagesCount, setUsersPagesCount] = useState<number>(1);

  const getUsers = useCallback(async (page: number) => {
    await axios
      .get("/api/admin/users", { params: { page } })
      .then((res) => {
        const { users, pagesCount } = res.data as GetAdminUsersResDto;
        setUsers(users);
        setUsersPagesCount(pagesCount);
      })
      .catch((err) => {
        setUsers([]);
        setUsersPagesCount(1);
      });
  }, []);

  return (
    <>
      <Head>
        <title>User Manage Page</title>
      </Head>
      <Users pagesCount={usersPagesCount} getUsers={getUsers} users={users} />
    </>
  );
};

export default UsersPage;
