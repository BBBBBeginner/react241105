import React from "react";
import { Table } from "@chakra-ui/react";

function MyApp27(props) {
  return (
    <div>
      <h3>chakra ui 테이블</h3>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>번호</Table.ColumnHeader>
            <Table.ColumnHeader>제목</Table.ColumnHeader>
            <Table.ColumnHeader>작성자</Table.ColumnHeader>
            <Table.ColumnHeader>읽기</Table.ColumnHeader>
            <Table.ColumnHeader>날짜</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>글 제목</Table.Cell>
            <Table.Cell>작성자 이름</Table.Cell>
            <Table.Cell>2030</Table.Cell>
            <Table.Cell>2024-11-07</Table.Cell>
          </Table.Row>
          <Table.Row>
            {" "}
            <Table.Cell>1</Table.Cell>
            <Table.Cell>글 제목</Table.Cell>
            <Table.Cell>작성자 이름</Table.Cell>
            <Table.Cell>2030</Table.Cell>
            <Table.Cell>2024-11-07</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>글 제목</Table.Cell>
            <Table.Cell>작성자 이름</Table.Cell>
            <Table.Cell>2030</Table.Cell>
            <Table.Cell>2024-11-07</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>글 제목</Table.Cell>
            <Table.Cell>작성자 이름</Table.Cell>
            <Table.Cell>2030</Table.Cell>
            <Table.Cell>2024-11-07</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>글 제목</Table.Cell>
            <Table.Cell>작성자 이름</Table.Cell>
            <Table.Cell>2030</Table.Cell>
            <Table.Cell>2024-11-07</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>

      <hr />
      <h3>기본 테이블</h3>
      <table>
        <thead>
          {/*tr>th*5>lorem1*/}
          <tr>
            <th>Lorem.</th>
            <th>Veniam.</th>
            <th>Voluptates!</th>
            <th>Cum.</th>
            <th>Voluptas?</th>
          </tr>
          {/*tr>th*5>lorem1*/}
          <tr>
            <th>Lorem.</th>
            <th>Eligendi?</th>
            <th>Ut!</th>
            <th>Ipsam.</th>
            <th>Laudantium!</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default MyApp27;
