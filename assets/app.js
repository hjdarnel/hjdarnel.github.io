var app = angular.module('app', ['ngSanitize']);

app.controller('MainCtrl', function ($scope) {
  // Order: about, experience, coursework, capstone
  $scope.views = [true, false, false];

  var job = function(company, company_url, title, team, duration, location) {
    return {
      'company': company,
      'company_url': company_url,
      'title': title,
      'team': team,
      'duration': duration,
      'location': location
    };
  };

$scope.jobs = [
  job('CaseStack Cloud Services', 'http://casestack.io/', 'Engineering Intern', 'New Product Developement', 'May 2016 - Current', 'Fayetteville, AR'),
  job('BLKBOXlabs', 'http://blkboxlabs.com/', 'Developer', 'Design Team', 'February 2016 - Current', 'Fayetteville, AR'),
  job('JB Hunt Transport', 'http://www.jbhunt.com/', 'Information Services Intern', 'Intermodal Dev Team', 'April - August 2015', 'Lowell, AR')
];
$scope.facts = [
  ['Favorite Sport', 'Ultimate frisbee, college basketball, English Premier League football'],
  ['Languages', 'Java, C++, JavaScript'],
  ['IDE', 'Anything in the <a href="https://www.jetbrains.com/products.html">Jetbrains family of IDEs</a>'],
  ['Class', '<a href="http://uaf46365.ddns.uark.edu/paradigms/">Programming Paradigms</a>'],
  ['Subs',
      '<a href="http://www.reddit.com/r/showerthoughts">r/showerthoughts</a>, ' +
      '<a href="http://www.reddit.com/r/ProgrammerHumor">r/programmerhumor</a>, ' +
      '<a href="http://www.reddit.com/r/cscareerquestions">r/cscareerquestions</a>, ' +
      '<a href="http://www.reddit.com/r/learnprogramming">r/learnprogramming</a>'],
];
$scope.courses = [
  [
    'CSCE 2004 Programming I',
    'MATH 2564 Calculus II',
    'GNEG 1311 Research Experience I (Honors)',
    'GNEG 1111 Intro to Engr I-II (Honors)',
    'ECON 2103 Principles of Macroeconomics',
    'CHEM 1103 Chemistry I',
    'SOCI 2013 Sociology'
  ],
  [
    'CSCE 3193 Programming Paradigms (Honors)',
    'CSCE 2214 Computer Organization',
    'CSCE 2114 Digital Design',
    'CSCE 2014 Programming II',
    'MATH 3103 Combinatorics',
    'MATH 2603 Discrete Mathematics',
    'PHYS 2074 Physics II'
  ],
  [
    'CSCE 4133 Algorithms (Graduate)',
    'CSCE 3513 Software Engineering',
    'CSCE 3613 Operating Systems (Honors)',
    'CSCE 4623 Mobile Programming',
    'MATH 3083 Linear Algebra',
    'PHIL 3103 Ethics & the Profession',
    'STAT 3013 Intro to Probability',
    'SUST 1103 Foundations of Sustainability'
  ],
  [
    'CSCE 4561 Capstone I',
    'CSCE 4753 Computer Networks',
    'CSCE 4523 Database Management',
    'CSCE 4013 Big Data',
    'MGMT 3933 Entrepreneurship/New Business Development'
  ]
];

$scope.toggle = function(show_ind) {
  angular.forEach($scope.views, function(value, ind) {
    $scope.views[ind] = ind == show_ind;
  });
};
});
