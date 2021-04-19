import dayjs from 'dayjs';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/mldangelo/personal-site
 */
const data = [
  {
    label: 'Stars this repository has on github',
    key: 'stargazers_count',
    value: '0',
    link: 'https://github.com/tzuyuisbae/personal-website/stargazers',
  }, {
    label: 'Number of people watching this repository',
    key: 'subscribers_count',
    value: '1',
    link: 'https://github.com/tzuyuisbae/personal-website/stargazers',
  }, {
    label: 'Number of forks',
    key: 'forks',
    value: '0',
    link: 'https://github.com/tzuyuisbae/personal-website/network',
  }, {
    label: 'Number of spoons',
    value: '0',
  },
  {
    label: 'Number of linter warnings',
    value: '0', // enforced via github workflow
  },
  {
    label: 'Open github issues',
    key: 'open_issues_count',
    value: '0',
    link: 'https://github.com/tzuyuisbae/personal-website/issues',
  }, {
    label: 'Last updated at',
    key: 'pushed_at',
    value: dayjs().format('MMMM D, YYYY'),
    link: 'https://github.com/tzuyuisbae/personal-website/commits',
  },
  {
    // TODO update this with a pre-commit hook
    /* find . | grep ".js" | grep -vE ".min.js|node_modules|.git|.json" |
    xargs -I file cat file | wc -l */
    label: 'Lines of Javascript powering this website',
    value: '2625',
    link: 'https://github.com/tzuyuisbae/personal-website/graphs/contributors',
  },
];

export default data;
