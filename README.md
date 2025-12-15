
# Loja de Games — Backend (NestJS + TypeORM + MySQL)

Backend de uma **Loja de Games** desenvolvido com **NestJS**, utilizando **TypeORM** e **MySQL** para persistência.  
O sistema implementa **CRUD completo** para os recursos **Produtos** e **Categorias**, com **relacionamento One-to-Many** (uma Categoria possui muitos Produtos).

## ✨ Features

- CRUD completo de **Produtos** (6 métodos/rotas)
- CRUD completo de **Categorias** (6 métodos/rotas)
- Relacionamento **One-to-Many** entre **Categoria** ↔ **Produtos**
- Validação com `class-validator` (DTOs)
- Retorno com **relations** (Categoria dentro de Produto)
- Estrutura seguindo **boas práticas** (Entity, Service, Controller, DTOs)
- Pronto para testes via **Insomnia/Postman**

---

## 🧱 Stack

- **Node.js** 18+
- **NestJS**
- **TypeORM**
- **MySQL** (`mysql2`)
- **class-validator**, **class-transformer**

---

## 📦 Repositório

```bash
git clone https://github.com/JBechaire/git clone https://github.com/JBechaire/loja-games-nest.git



## Dependencias

npm install --save @nestjs/typeorm typeorm mysql2 class-validator class-transformer


## Executando
npm run start:dev