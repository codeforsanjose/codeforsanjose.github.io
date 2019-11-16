# Code for San José Website
[Demo](http://www.codeforsanjose.com)
========================

Code for San Jose is the San Jose chapter of [Code for America](https://www.codeforamerica.org/). The San Jose Website is the central location where people can learn about the organization. 

The site hosts the community's:
* Code of Conduct - Community Behavior Guideline
* Local Meetups - Biweekly Events
* Open Source Projects - Active Civic Tech Projects
* Blog - Personal Reflections on our Projects and Events
* Social Channels - Twitter, Slack, GitHub
* Donations - Fund Contribution Channel

## How To Run
Host a local version of the Code for San Jose website to make changes.

For set up, open the command line and run the following code.
1. **Install the bundler tool**, which allows you to download the libraries needed to run the website.
```bash
gem install bundler
```
2. **Clone the project** to download the project file onto your local computer.
```bash
git clone https://github.com/codeforsanjose/codeforsanjose.github.io
```

3. **Enter the directory** moves your command line into the project folder so you can make changes.
```bash
cd codeforsanjose.github.io
```

4. **Install dependencies**, which are programs and files the project requires to run.
```bash
bundle install
```

5. **Run Jekyll with dependencies**, which is the framework used to build the website.
```bash
bundle exec jekyll serve
```

## Technologies
* Built with [Jekyll-doc-theme](https://github.com/aksakalli/jekyll-doc-theme)
* Bootstrap Sass
* Font Awesome
* Bootwatch Paper Bootstrap Theme
* Typeahead title search
* SEO and RSS feed

## How to Contribute
Check the issues for bugs, features, or issues to contribute to. Join the #website channel on our [Slack channel](https://slackin-c4sj.herokuapp.com/).
