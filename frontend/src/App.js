import GlobalStyle from "./styles/global"
import styled from "styled-components"
import Form from "./components/Form.js"
import Grid from "./components/Grid.js"
import axios from "axios"
import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
// import "react-toastify/dist/ReactTostify.css"

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  aling-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {
  const [users, setUsers] = useState([]);
  const [nEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/user");
      setUsers(res.data.sort((a, b) => (a.name > b.name ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);


  return (
    <>
      <Container>
        <Title>Users</Title>
        <Form></Form> 
        <Grid users={users}></Grid>
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT}/>
      <GlobalStyle/>
    </>
  );
}

export default App;
