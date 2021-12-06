# Mini Projeto - Insta

## O que o usuário pode fazer

- Fazer Login
- Fazer Cadastro
- Ver dados do seu perfil
- Editar Perfil
- Ver Postagens de outras pessoas
    - Ver Quantidade de curtidas em uma postagem
    - Ver comentários em uma postagem
- Curtir postagens de oturas pessoas
- Comentar em Postagens

## O que o usuário não poderá fazer

- Ver a localização de uma postagem
- Ver pessoas que curtiram uma postagem
- Curtir um comentário
- Comentar em outros comentários

## Endpoints

### Login - POST

#### Dados enviados
- Username
- senha

#### Dados retornados 
- sucesso/erro
- token

---

### Cadastro - POST

#### Dados enviados
- Username
- senha

#### Dados retornados 
- Sucesso/Erro

---

### Perfil - GET

#### Dados enviados
-token (poderia omitir, pois subentende-se que ele vai no cabeçalho)(no token, conterá o id ou username)

#### Dados retornados
- URL da foto
- Nome
- Username
- Site
- Bio
- Email
- Telefone
- Genero

---

### Perfil - PUT

##### Descrição:
Atualizar os dados cadastrais do perfil

#### Dados enviados
- token
- URL da foto
- Nome
- Username
- Site
- Bio
- Email
- Telefone
- Genero
- Senha


#### Dados retornados
- Sucesso/Erro

---
### Postagens - GET

#### Dados enviados
- token
- offset das postagens (para retornar aquelas que ainda não vimos)

#### Dados retornados
- Postagens []
    - texto
    - id
    - foi curtido por mim (?)
    - Usuário
        - URL da foto 
        - Username
        - é perfil oficial (?) 
    - Fotos[] 
    - Quantidade de curtidas
    - Comentários
        - Username
        - Texto
    - Data

#### Objetivos Gerais 
- Validar o token do usuário
- Buscar o cadastro do usuário com a informação do token
- Retornar as postagens de outras pessoas

---

### Postagens - POST

#### Dados enviados
- token
- texto 
- array com fotos
    
#### Dados retornados
- Sucesso/erro

#### Objetivos Gerais 
- Validar o token do usuário
- Buscar o cadastro do usuário com a informação do token
- Exigir que seja informado ao menos uma foto bo array
- Cadastrar postagem para o usuário logado
- Cadastro das fotos da postagem (em sua respectiva tabela)
- Retornar sucesso ou erro
---

### Curtidas - POST

#### Dados enviados
- token (dessa forma, já é possível extrair o id de quem tá curtindo/username)
- id da postagem

#### Dados retornados
- sucesso/erro

#### Objetivos Gerais
- Validar o token do usuário
- Buscar o cadastro do usuário com a informação do token
- Buscar a postagem correlacionada com o id informado
- Vefificar se o usuário já curtiu a postagem
- Cadastrar a curtida da postagem no database


### Comentar - POST

#### Dados enviados 
- token (contém o username do usuario)
- id da postagem
- texto da postagem

#### Dados retornados
- sucesso/erro

#### Objetivos Gerais
- Validar o token do usuário
- Buscar o cadastro do usuário com a informação do token
- Validar texto
- Buscar a postagem pelo id informado
- Cadastrar comentário da postagem no databse
- Retornar sucesso ou erro
