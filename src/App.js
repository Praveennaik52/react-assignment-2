import React, { useEffect, useState } from "react";
import { Layout, Row, Col, Spin, Typography, Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import UserCard from "./components/UserCard";
import UserForm from "./components/UserForm";
import "./App.css";

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Fetch users
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Add new user
  const handleAddUser = (newUser) => {
    setUsers([newUser, ...users]);
    setIsModalVisible(false);
  };

  return (
    <Layout>
      <Header className="header">
        <Title level={2} style={{ color: "white", margin: 0 }}>
          React Assignment 2 - Users
        </Title>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setIsModalVisible(true)}
        >
          Add User
        </Button>
      </Header>

      <Content style={{ padding: "20px" }}>
        {loading ? (
          <div className="spinner">
            <Spin size="large" />
          </div>
        ) : (
          <Row gutter={[16, 16]}>
            {users.map((user) => (
              <Col xs={24} sm={12} md={8} lg={6} key={user.id}>
                <UserCard user={user} />
              </Col>
            ))}
          </Row>
        )}
      </Content>

      <Modal
        title="Add New User"
        open={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
      >
        <UserForm onAddUser={handleAddUser} />
      </Modal>
    </Layout>
  );
}

export default App;
