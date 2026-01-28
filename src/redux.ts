import { v1 } from 'uuid';

let rerenderEntireTree: () => void = () => {};

export const subscribe = (callback: () => void) => {
  rerenderEntireTree = callback;
};

export const state = {
  profilePage: {
    user: {
      name: 'John Doe',
      description: 'Frontend Developer | React Enthusiast',
      dateOfBirth: 'January 15, 1995',
      city: 'New York, USA',
      education: 'MIT, Computer Science',
      webSite: 'https://johndoe.dev',
      coverImage: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=1200&h=300&fit=crop',
    },
    posts: [
      {
        id: v1(),
        message: 'Just finished building a new React component! Loving the power of hooks.',
        date: '2 hours ago',
      },
      {
        id: v1(),
        message: 'Working on a social network project. Excited to see it come together!',
        date: 'Yesterday',
      },
    ],
  },
  dialogsPage: {
    dialogs: [
      {
        id: v1(),
        name: 'John',
        messages: [
          { id: v1(), message: 'Hi!' },
          { id: v1(), message: 'How are you doing?' },
          { id: v1(), message: 'Want to grab coffee later?' },
        ],
      },
      {
        id: v1(),
        name: 'Anna',
        messages: [
          { id: v1(), message: 'Hey! Did you finish the project?' },
          { id: v1(), message: 'Let me know if you need help' },
        ],
      },
      {
        id: v1(),
        name: 'Mike',
        messages: [
          { id: v1(), message: 'Yo!' },
          { id: v1(), message: 'Check out this new song' },
          { id: v1(), message: 'Its awesome!' },
        ],
      },
      {
        id: v1(),
        name: 'Sarah',
        messages: [
          { id: v1(), message: 'Happy birthday!' },
          { id: v1(), message: 'Hope you have a great day!' },
        ],
      },
      {
        id: v1(),
        name: 'Alex',
        messages: [
          { id: v1(), message: 'Meeting at 3pm today' },
          { id: v1(), message: 'Dont forget the documents' },
          { id: v1(), message: 'See you there!' },
        ],
      },
    ],
  },
  sidebar: {
    menuItems: [
      { id: v1(), label: 'Profile', path: '/profile' },
      { id: v1(), label: 'Dialogs', path: '/dialogs' },
      { id: v1(), label: 'News', path: '/news' },
      { id: v1(), label: 'Music', path: '/music' },
      { id: v1(), label: 'Settings', path: '/settings' },
    ],
  },
};

export const addPost = (message: string) => {
  const newPost = {
    id: v1(),
    message,
    date: 'Just now',
  };
  state.profilePage.posts.unshift(newPost);
  rerenderEntireTree();
};
