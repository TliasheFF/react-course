import ReactDOM from 'react-dom/client';
import { restaurants } from './constants/mock';
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <h1>{restaurants[0].name}</h1>
    <h3>Меню:</h3>
      <ul>
        <li>{restaurants[0].menu[0].name}</li>
        <li>{restaurants[0].menu[1].name}</li>
        <li>{restaurants[0].menu[2].name}</li>
      </ul>
    <h3>Отзывы:</h3>
      <ul>
        <li>{restaurants[0].reviews[0].text}</li>
        <li>{restaurants[0].reviews[1].text}</li>
      </ul>
    <h1>{restaurants[1].name}</h1>
    <h3>Меню:</h3>
      <ul>
        <li>{restaurants[1].menu[0].name}</li>
        <li>{restaurants[1].menu[1].name}</li>
      </ul>
    <h3>Отзывы:</h3>
      <ul>
        <li>{restaurants[1].reviews[0].text}</li>
        <li>{restaurants[1].reviews[1].text}</li>
        <li>{restaurants[1].reviews[2].text}</li>
      </ul>
  </div>
);

// root.render(
//   React.createElement('div', {children: [
//     React.createElement('h1', {children: restaurants[0].name}),
//     React.createElement('h3', {children: 'Меню:'}),
//     React.createElement('ul', {children: [
//         React.createElement('li', {children: restaurants[0].menu[0].name}),
//         React.createElement('li', {children: restaurants[0].menu[1].name}),
//         React.createElement('li', {children: restaurants[0].menu[2].name}),
//       ]}),
//     React.createElement('h3', {children: 'Отзывы:'}),
//     React.createElement('ul', {children: [
//       React.createElement('li', {children: restaurants[0].reviews[0].text}),
//       React.createElement('li', {children: restaurants[0].reviews[1].text}),
//     ]}),
//     React.createElement('h1', {children: restaurants[1].name}),
//     React.createElement('h3', {children: 'Меню:'}),
//     React.createElement('ul', {children: [
//         React.createElement('li', {children: restaurants[1].menu[0].name}),
//         React.createElement('li', {children: restaurants[1].menu[1].name}),
//       ]}),
//     React.createElement('h3', {children: 'Отзывы:'}),
//     React.createElement('ul', {children: [
//       React.createElement('li', {children: restaurants[1].reviews[0].text}),
//       React.createElement('li', {children: restaurants[1].reviews[1].text}),
//       React.createElement('li', {children: restaurants[1].reviews[2].text}),
//     ]}),
//   ]}),
//   );
