FROM ruby:2.5.3

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update && apt-get install -y

RUN curl -fsSL https://deb.nodesource.com/setup_15.x | bash -
RUN apt-get install -y nodejs

ENV APP_HOME /usr/src/app
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME
ADD Gemfile* $APP_HOME/
RUN gem update --system
RUN gem install bundler -v 1.14.6
RUN bundle install --jobs=4 --retry=3

ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

RUN npm install --force
RUN rails webpacker:install:vue

ADD . $APP_HOME
