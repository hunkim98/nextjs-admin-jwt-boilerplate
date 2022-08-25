import { Pagination, Container, Stack, Table } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { UserInfo } from "../../dto/User/user.res.dto";

interface Props {
  users: Array<UserInfo>;
  pagesCount: number;
  getUsers: (page: number) => Promise<void>;
}

const Users: React.FC<Props> = ({ getUsers, pagesCount, users }) => {
  const [activePage, setPage] = useState(1);
  const onChangePange = (page: number) => {
    getUsers(page);
    setPage(page);
  };
  const rows = (elements: Array<UserInfo>) => {
    return elements.map((element) => (
      <tr key={element.id}>
        <td>{element.name}</td>
        <td>{element.nickname}</td>
        <td>{element.email}</td>
        <td>{element.telephone}</td>
      </tr>
    ));
  };
  return (
    <Container>
      <Table style={{ marginBottom: 20 }}>
        <thead>
          <tr>
            <th>name</th>
            <th>nickname</th>
            <th>email</th>
            <th>telephone</th>
          </tr>
        </thead>
        <tbody>{rows(users)}</tbody>
      </Table>
      <Pagination
        page={activePage}
        onChange={onChangePange}
        total={pagesCount}
      />
    </Container>
  );
};

export default Users;
