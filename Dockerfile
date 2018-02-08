FROM ubuntu:16.04

# Dependencies
RUN apt-get update -y \
	&& apt-get upgrade -y \
	&& apt-get install -y wget curl python build-essential git libfontconfig \
	&& apt-get clean

# Install NODE.js
RUN wget -qO- https://deb.nodesource.com/setup_7.x > node_setup.sh  && bash node_setup.sh  
RUN apt-get install -y nodejs && apt-get clean

# Install Ember.js
RUN npm install -g ember-cli && mkdir library

COPY . /library

# Install dependencies ember
RUN cd library \
	&& npm install -y

# install chrome for default testem config (as of 2.15.0)
RUN apt-get update &&\
    apt-get install -y \
        apt-transport-https \
        gnupg \
        --no-install-recommends &&\
	curl -sSL https://dl.google.com/linux/linux_signing_key.pub | apt-key add - &&\
	echo "deb [arch=amd64] https://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list &&\
	apt-get update &&\
	apt-get install -y \
	    google-chrome-stable \
	    --no-install-recommends

# tweak chrome to run with --no-sandbox option
RUN \
	sed -i 's/"$@"/--no-sandbox "$@"/g' /opt/google/chrome/google-chrome

WORKDIR /library

CMD ["ember", "s"]
