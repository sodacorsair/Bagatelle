# Bagatelle

Bagatelle is a blog framework implemented by react and beego.

## Setup

Git clone https://github.com/sodacorsair/bagatelle front-end and https://github.com/sodacorsair/bagatelle-server server-end code, behold that server-end need to dump into path of go repository.

Then run `npm -i -S` at front-end code and `go get` at server-end.

Build your own mysql database and change relevant settings in beego config file.

Run `npm run start` at front-end and `bee run` at server-end respectively to launch your blog website.

## Initialization of blog

There is a default account named after `admin` while its default password is the same. You can modify them by sql(I'm too lazy to optimize that...). The first article will be your personal profile(which is shown in the About column), you could modify it at the manage page.
