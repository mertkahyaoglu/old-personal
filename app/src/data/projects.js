var projects = [
  {
    title: 'iyzico Merchant Control Panel',
    description:
      'iyzico control panel is a single page application for merchants that allows them check out payments, perform transactions such as cancellation and return and more.',
    link: 'https://sandbox-merchant.iyzipay.com/',
    image: 'images/projects/spm.jpg',
    tags: [
      { name: 'reactjs', color: '#61DAFB' },
      { name: 'redux', color: '#9772D0' },
      { name: 'graphql', color: '#FD00A7' },
    ],
  },
  {
    title: 'Jekyll Admin - GSoC Project',
    description:
      'A Jekyll plugin that provides users with a traditional CMS-style graphical interface to author content and administer Jekyll sites.',
    link: 'https://github.com/jekyll/jekyll-admin',
    github: 'https://github.com/jekyll/jekyll-admin',
    image: 'images/projects/jekyll-admin.jpg',
    tags: [
      { name: 'reactjs', color: '#61DAFB' },
      { name: 'redux', color: '#9772D0' },
      { name: 'ruby', color: '#E9573F' },
    ],
  },
  {
    title: 'Atom Video',
    description:
      'Video chat package for Atom Editor. Allows developers to communicate with each other visually.',
    link: 'https://atom.io/packages/atom-video',
    github: 'https://github.com/mertkahyaoglu/atom-video',
    image: 'images/projects/atom-video.jpg',
    tags: [
      { name: 'reactjs', color: '#61DAFB' },
      { name: 'redux', color: '#9772D0' },
      { name: 'peerjs', color: '#E96151' },
    ],
  },
  {
    title: 'Atom Chat',
    description: 'Chat package for Atom Editor.',
    link: 'https://atom.io/packages/atom-chat',
    github: 'https://github.com/mertkahyaoglu/atom-chat',
    image: 'images/projects/atom-chat.jpg',
    tags: [
      { name: 'coffeescript', color: '#191932' },
      { name: 'socket.io', color: '#1E6D8E' },
    ],
  },
  {
    title: 'Twitter Sentiment Analysis',
    description:
      'The aim of the project is to determine how people are feeling when they share tweets. The program classifies only Turkish tweets.',
    link: 'https://tsa-webapp.herokuapp.com/',
    github: 'https://github.com/mertkahyaoglu/twitter-sentiment-analysis',
    image: 'images/projects/twitter-sentiment-analysis.jpg',
    tags: [
      { name: 'python', color: '#1E415E' },
      { name: 'nltk', color: '#ff9000' },
    ],
  },
  {
    title: 'Movie Stats',
    description:
      "The project scraps Top 250 movies' data from imdb.com and shows statistics about them using charts.",
    link: 'http://mertkahyaoglu.github.io/movie-stats',
    github: 'https://github.com/mertkahyaoglu/movie-stats',
    image: 'images/projects/movie-stats.jpg',
    tags: [
      { name: 'scrapy', color: '#60A839' },
      { name: 'angularjs', color: '#DD1B16' },
      { name: 'highcharts', color: '#8085E8' },
    ],
  },
  {
    title: 'Tetris',
    description:
      'Classic tetris game with scoreboard showing 10 highest scores.',
    link: 'http://ec2-35-160-20-129.us-west-2.compute.amazonaws.com/',
    github: 'https://github.com/mertkahyaoglu/tetris',
    image: 'images/projects/tetris.jpg',
    tags: [
      { name: 'reactjs', color: '#61DAFB' },
      { name: 'flask', color: '#000000' },
      { name: 'mongodb', color: '#439945' },
    ],
  },
  {
    title: 'BrainBalls',
    description:
      'BrainBalls is a memory game that you try to remember sequences of balls. The game is created with Phaser.js for web application and used LibGDX for Android version.',
    link: 'http://mertkahyaoglu.github.io/brainballs/',
    github: 'https://github.com/mertkahyaoglu/brainballs',
    android:
      'https://play.google.com/store/apps/details?id=com.mertkahyaoglu.brainballs.android',
    image: 'images/projects/brainballs.jpg',
    tags: [
      { name: 'phaserjs', color: '#87517F' },
      { name: 'libGDX', color: '#E44D3C' },
    ],
  },
  {
    title: 'Random Movie',
    description:
      'This is a fun project for movie addicts that are not able to find a movie to watch. The project includes REST-API(Node), Angular webpage and Android app.',
    link: 'https://random-movie.github.io/',
    github: 'https://github.com/random-movie',
    android:
      'https://play.google.com/store/apps/details?id=com.mertkahyaoglu.randommovie',
    image: 'images/projects/random-movie.jpg',
    tags: [
      { name: 'nodejs', color: '#80BD01' },
      { name: 'angularjs', color: '#DD1B16' },
      { name: 'android', color: '#93C65C' },
    ],
  },
  {
    title: 'Smartphones',
    description: 'This is a course project built with Webpy Framework.',
    link: 'http://smartphones-ceng.herokuapp.com/',
    github: 'https://github.com/mertkahyaoglu/smartphones',
    image: 'images/projects/smartphones.jpg',
    tags: [
      { name: 'python', color: '#1E415E' },
      { name: 'webpy', color: '#32A81E' },
      { name: 'mysql', color: '#5A85A0' },
    ],
  },
  {
    title: 'Node Modules',
    description:
      'Node Modules that I wrote for my projects and GitHub community.',
    link: 'https://www.npmjs.com/~mertkahyaoglu',
    image: 'images/projects/node-modules.jpg',
    tags: [{ name: 'nodejs', color: '#80BD01' }],
  },
  {
    title: 'jQuery Plugins',
    description: 'jQuery Plugins that I created for my projects.',
    link: 'https://github.com/search?q=user%3Amertkahyaoglu+jquery',
    image: 'images/projects/jquery-plugins.jpg',
    tags: [{ name: 'jquery', color: '#96C96D' }],
  },
  {
    title: 'Collision Game',
    description:
      'Built with LibGDX Game Engine. I have written my own framework over LibGDX. The aim of the game is to avoid collision with red balls as long as you can.',
    link: 'https://github.com/mertkahyaoglu/mini-libgdx',
    github: 'https://github.com/mertkahyaoglu/mini-libgdx',
    image: 'images/projects/collision.jpg',
    tags: [
      { name: 'android', color: '#93C65C' },
      { name: 'libGDX', color: '#E44D3C' },
    ],
  },
  {
    title: 'Woodezza (Commercial)',
    description:
      'Woodezza.com is an e-commerce website that you can purchase natural and wooden kitchen countertops.',
    link: 'https://www.woodezza.com',
    image: 'images/projects/woodezza.jpg',
    tags: [{ name: 'laravel', color: '#DC5A56' }],
  },
  {
    title: 'İthal Gurme (Commercial)',
    description:
      'Ithalgurme.com is an e-commerce website that you can purchase sauces, world cheeses, Far East spices & sauces and discover new recipes.',
    link: 'https://ithalgurme.com/',
    image: 'images/projects/ithalgurme.jpg',
    tags: [{ name: 'laravel', color: '#DC5A56' }],
  },
  {
    title: 'Transfer Datça (Commercial)',
    description:
      'Transfer Datça is a Class A travel agency which makes private and shared airport transfers between Datça and Dalaman Airport.',
    link: 'https://www.transferdatca.net/',
    image: 'images/projects/transferdatca.jpg',
    tags: [{ name: 'laravel', color: '#DC5A56' }],
  },
];

module.exports = projects;