import React from "react";
import { useState } from "react";
import "./App.css";
import { Input } from "./Components/Input";
import { Card } from "./Components/Card";

interface User {
  name: string;
  age: number;
  hobby: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [hobby, setHobby] = useState<string>("");

  function handleSubmit(name: string, age: number, hobby: string) {
    const user = { name, age, hobby };
    setUsers([...users, user]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Input placeholder="Nome" onChange={(e) => setName(e.target.value)} />
        <Input
          placeholder="Idade"
          type="number"
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <Input placeholder="Hobby" onChange={(e) => setHobby(e.target.value)} />
        <button onClick={() => handleSubmit(name, age, hobby)}>
          Cadastrar
        </button>
        {users &&
          users.map((user) => (
            <Card name={user.name} age={user.age} hobby={user.hobby} />
          ))}
      </header>
    </div>
  );
}

export default App;
