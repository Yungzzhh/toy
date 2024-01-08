import { Table } from "antd";
import { axios } from "@/package/axios";
import { useEffect, useState } from "react";
import './index.scss'

/**
 * 
 * @returns 虚拟列表使用
 */
const TableTest = () => {
  const [dataSource, setDataSource] = useState([]);

  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
      // render: (_: unknown, age: unknown) => {
      //   console.log(_);
      //   console.log(age);

      //   return (
      //     <div>
      //       {age.age}
      //     </div>
      //   )
      // }
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
    },
  ];

  useEffect(() => {
    getTableList();
  }, []);

  const getTableList = async () => {
    const res = await axios.get("/pic/table");
    setDataSource(res.data);
  };

  return (
    <div className="table">
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        virtual
        scroll={{ x: 300, y: 400 }}
      />
    </div>
  );
};

export default TableTest;
