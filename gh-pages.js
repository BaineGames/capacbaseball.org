import { publish } from 'gh-pages';

publish(
 'docs', // path to public directory
 {
  branch: 'master',
  repo: 'https://github.com/bainegames/capacbaseball.org.git', // Update to point to your repository
  user: {
   name: 'Bainegames', // update to use your name
   email: 'me@bainegames.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);