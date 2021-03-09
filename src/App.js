import React, { useRef } from "react";
import { Form } from "@unform/web";
import { Scope } from "@unform/core";
import Input from "./components/form/input"

function App() {
  const formRef = useRef(null);

  function handleSubmit(data, { reset }) {
    if (data.name == "") {
      formRef.current.setErrors({
        cliente: 'O campo é obrigatório',
        produto: 'O campo é obrigatório',
        pedido: 'O campo é obrigatório'
      });
    }

    console.log(data);

    reset();
  }
  return (
    <div className="App">
      <h1> -TINTAS MARCOS- </h1>
      <h1 /><h1 />
      <h2> Cadastro de Cliente </h2>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Scope path="cliente">
          Nome:
          <Input name="nome" />
          CNPJ:
          <Input name="cnpj" />
          E-mail:
          <Input type="email" name="email" />
          Telefone:
          <Input placeholder="(99)9999-9999" name="telefone" />
        </Scope>

        <button type="submit">Enviar</button>
      </Form>

      <h2> Cadastro de Produto </h2>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Scope path="produto">
          Descrição:
          <Input name="descricao" />
          Cor:
          <Input name="cor" />
          Dimensões:
          <Input name="dimensoes" />
          Preço:
          <Input name="preco" />
        </Scope>

        <button type="submit">Enviar</button>
      </Form>

      <h2> Pedido </h2>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Scope path="pedido">
          Vendedor:
          <Input name="vendedor" />
          Cliente:
          <Input name="cliente" />
          Data:
          <Input type="date" name="data" />
          Status:
          <Input name="status" />
          Produtos:
          <Input name="produtos" />
          Valor Total:
          <Input name="valorTotal" />
          Comissão:
          <Input name="comissao" />
        </Scope>

        <button type="submit">Enviar</button>
      </Form>
    </div>
  );
}

export default App;
