import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'admin user',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Ahmed morad',
    email: 'ahmed@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Amira fatine',
    email: 'amira@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'salma drori',
    email: 'salma@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
];

export default users;
