// UsersPostsApp.js
import React, { useState } from 'react';

// Данные пользователей
const users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  }
];

// Данные постов
const posts = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 2,
    "id": 11,
    "title": "et ea vero quia laudantium autem",
    "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
  },
  {
    "userId": 2,
    "id": 12,
    "title": "in quibusdam tempore odit est dolorem",
    "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
  },
  {
    "userId": 3,
    "id": 21,
    "title": "asperiores ea ipsam voluptatibus modi minima quia sint",
    "body": "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt"
  },
  {
    "userId": 3,
    "id": 22,
    "title": "dolor sint quo a velit explicabo quia nam",
    "body": "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
  },
  {
    "userId": 4,
    "id": 31,
    "title": "ullam ut quidem id aut vel consequuntur",
    "body": "debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae"
  },
  {
    "userId": 4,
    "id": 32,
    "title": "doloremque illum aliquid sunt",
    "body": "deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime"
  },
  {
    "userId": 5,
    "id": 41,
    "title": "non est facere",
    "body": "molestias id nostrum\nexcepturi molestiae dolore omnis repellendus quaerat saepe\nconsectetur iste quaerat tenetur asperiores accusamus ex ut\nnam quidem est ducimus sunt debitis saepe"
  },
  {
    "userId": 5,
    "id": 42,
    "title": "commodi ullam sint et excepturi error explicabo praesentium voluptas",
    "body": "odio fugit voluptatum ducimus earum autem est incidunt voluptatem\nodit reiciendis aliquam sunt sequi nulla dolorem\nnon facere repellendus voluptates quia\nratione harum vitae ut"
  }
];

// Компонент карточки пользователя
const UserCard = ({ user, isActive, onClick }) => (
  <div 
    className={`user-card ${isActive ? 'active' : ''}`}
    onClick={onClick}
  >
    {user.name}
  </div>
);

// Компонент карточки поста
const PostCard = ({ post }) => (
  <div className="post-card">
    <h3 className="post-title">{post.title}</h3>
    <p className="post-content">
      {post.body.split('\n').map((line, i) => (
        <React.Fragment key={i}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </p>
  </div>
);

// Компонент списка пользователей
const UserList = ({ users, selectedUser, onSelectUser }) => (
  <div className="users-sidebar">
    <h2 className="user-list-title">Список пользователей</h2>
    {users.map(user => (
      <UserCard 
        key={user.id}
        user={user}
        isActive={selectedUser.id === user.id}
        onClick={() => onSelectUser(user)}
      />
    ))}
  </div>
);

// Компонент списка постов
const PostList = ({ user, posts }) => (
  <div className="posts-main">
    <h2 className="user-posts-title">Посты пользователя: {user.name}</h2>
    
    <div className="post-list">
      {posts.length === 0 ? (
        <p className="no-posts">
          Этот пользователь еще не написал ни одного поста
        </p>
      ) : (
        posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))
      )}
    </div>
  </div>
);

// Главный компонент приложения
const UsersPostsApp = () => {
  const [selectedUser, setSelectedUser] = useState(users[0]);

  return (
    <div className="app">
      <header className="header">
        <h1>Пользователи и их посты</h1>
      </header>
      
      <div className="container">
        <UserList 
          users={users} 
          selectedUser={selectedUser}
          onSelectUser={setSelectedUser}
        />
        <PostList 
          user={selectedUser} 
          posts={posts.filter(post => post.userId === selectedUser.id)}
        />
      </div>
    </div>
  );
};

// Стили (можно вынести в отдельный CSS-файл)
const styles = `
/* Общие стили */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f9fa;
  color: #333;
}

.app .header {
  background-color: #343a40;
  color: white;
  padding: 20px 0;
  text-align: center;
  margin-bottom: 30px;
}

.app .container {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  gap: 20px;
}

/* Стили боковой панели с пользователями */
.users-sidebar {
  width: 300px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 15px;
}

.user-list-title {
  margin-top: 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  color: #495057;
}

.user-card {
  padding: 12px 15px;
  margin-bottom: 8px;
  background-color: #f1f8ff;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  border-left: 4px solid #007bff;
}

.user-card:hover {
  background-color: #e2f0fd;
  transform: translateX(5px);
}

.user-card.active {
  background-color: #007bff;
  color: white;
}

/* Стили основной области с постами */
.posts-main {
  flex: 1;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.user-posts-title {
  margin-top: 0;
  color: #212529;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.post-list {
  display: grid;
  gap: 15px;
}

.post-card {
  border: 1px solid #e9ecef;
  border-radius: 6px;
  padding: 15px;
  transition: box-shadow 0.2s ease;
}

.post-card:hover {
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
}

.post-title {
  margin-top: 0;
  margin-bottom: 10px;
  color: #212529;
}

.post-content {
  color: #495057;
  line-height: 1.6;
  margin-bottom: 0;
}

.no-posts {
  color: #6c757d;
  font-style: italic;
}
`;

// Добавляем стили в документ
const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);

export default UsersPostsApp;