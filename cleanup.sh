#!/bin/bash

git-mv-with-history-2 --start-commit 46c5ca9c033f680780e912d6d07fe41f62ce07ee \
contents/about/_index/main.markdown=docs/handbook/about.md \
contents/calendar/_index/main.markdown=docs/handbook/hosting-events.md \
contents/connect/_index/main.markdown=docs/handbook/connect.md \
contents/faq/_index/main.markdown=docs/handbook/faq.md \
contents/location/_index/main.markdown=docs/handbook/around-kgb.md \
contents/membership/_index/main.markdown=docs/handbook/membership.md \
contents/plenum/_index/main.md=docs/plenum/00-index.md \
contents/plenum/2014-02-12/_index/main.md=docs/plenum/2014-02-12.md \
contents/plenum/2014-04-03/_index/main.md=docs/plenum/2014-04-03.md \
contents/plenum/2014-06-21/_index/main.md=docs/plenum/2014-06-21.md \
contents/plenum/2015-01-15/_index/main.md=docs/plenum/2015-01-15.md \
contents/plenum/2017-10-31/_index/main.md=docs/plenum/2017-10-31.md \
contents/plenum/2017-11-14/_index/main.md=docs/plenum/2017-11-14.md \
contents/plenum/2017-11-28/_index/main.md=docs/plenum/2017-11-28.md \
contents/plenum/2018-01-16/_index/main.md=docs/plenum/2018-01-16.md \
contents/plenum/2018-02-12/_index/main.md=docs/plenum/2018-02-12.md \
contents/plenum/2018-03-14/_index/main.md=docs/plenum/2018-03-14.md \
contents/plenum/2018-04-12/_index/main.md=docs/plenum/2018-04-12.md \
contents/plenum/2018-04-25/_index/main.md=docs/plenum/2018-04-25.md \
contents/plenum/2018-05-17/_index/main.md=docs/plenum/2018-05-17.md \
contents/plenum/2018-06-20/_index/main.md=docs/plenum/2018-06-20.md \
contents/plenum/2018-07-11/_index/main.md=docs/plenum/2018-07-11.md \
contents/plenum/2018-08-23/_index/main.md=docs/plenum/2018-08-23.md \
contents/plenum/2018-10-17/_index/main.md=docs/plenum/2018-10-17.md \
contents/plenum/2018-11-21/_index/main.md=docs/plenum/2018-11-21.md \
contents/plenum/2018-12-19/_index/main.md=docs/plenum/2018-12-19.md \
contents/plenum/2019-01-16/_index/main.md=docs/plenum/2019-01-16.md \
contents/plenum/2019-03-06/_index/main.md=docs/plenum/2019-03-06.md \
contents/plenum/2019-04-10/_index/main.md=docs/plenum/2019-04-10.md \
contents/plenum/2020-10-20/_index/main.md=docs/plenum/2020-10-20.md \
contents/plenum/2020-12-15/_index/main.md=docs/plenum/2020-12-15.md \
contents/plenum/2021-01-19/_index/main.md=docs/plenum/2021-01-19.md \
contents/plenum/2021-02-23/_index/main.md=docs/plenum/2021-02-23.md \
contents/plenum/2021-04-20/_index/main.md=docs/plenum/2021-04-20.md \
contents/plenum/2021-05-25/_index/main.md=docs/plenum/2021-05-25.md \
templates/imgs/hsg.svg=static/img/logo.svg \
templates/favicon.ico=static/img/favicon.ico

git filter-branch --force \
--index-filter 'git rm -r --cached --ignore-unmatch ./apache ./bin ./contents ./sponsor-mockup-design ./src ./templates ./.gitignore ./.travis.yml ./index.cgi ./calendar-json-api-url ./config.json ./htaccess ./htaccess.js ./Makefile ./newevents.go ./newevents.js ./package.json ./pretty-print.js ./pretty-print-json.js ./README.md ./redirects ./robots.txt ./tweets.sh ./URLs.txt' \
--prune-empty "46c5ca9c033f680780e912d6d07fe41f62ce07ee..HEAD"

git filter-branch --force \
--prune-empty --parent-filter \
    'gsed "s/-p //g" | gxargs -r git show-branch --independent | gsed "s/\</-p /g"'
