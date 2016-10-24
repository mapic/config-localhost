# Config files for  `localhost`

## Automatic Install
1. Run [`install-to-localhost.sh`](https://github.com/mapic/dockerized/blob/master/install-to-localhost.sh) from [`dockerized`](https://github.com/mapic/dockerized) root folder.

## Maunal install
1. Clone repo to `config/` folder in [`dockerized`](https://github.com/mapic/dockerized) root: `cd config && git clone git@github.com:mapic/config-localhost.git localhost`
2. Make sure folder is named `localhost` (not `config-localhost`)
3. Set ENV variable `MAPIC_DOMAIN` to `localhost`: `export MAPIC_DOMAIN=localhost`
4. Update the config files (see overview below).

## Overview 

| Config file                               |        Purpose            |   What to update
| ------------------------------------------|---------------------------|-------------------------------| 
| localhost.nginx.conf                      | NginX server config       |   Domain names                |
| mongo.json                                | MongoDB settings          |   MongoDB access details      |
| mongod.conf                               | MongoDB config            |   Nothing, defaults good      |
| redis.layers.conf                         | Redis config              |   Access details              |
| redis.stats.conf                          | Redis config              |   Access details              |
| redis.temp.conf                           | Redis config              |   Access details              |
| redis.tokens.conf                         | Redis config              |   Access details              |
| engine.config.js                          | Redis config              |   Access details              |
| mile.config.js                            | Mile config               |   Mongo/redis access details  |
| ssl_certificate.key                       | SSL Certificate           |   Create your own             | 
| ssl_certificate.pem                       | SSL Certificate           |   Create your own             |
| dhparams.pem                              | DH params for SSL         |   Nothing (auto-generated)    |
| env.sh                                    | PostGIS settings          |   PostGIS access details      | 
| nginx.conf -> localhost.nginx.conf        | Symlink to nginx config   |   Point to nginx config       |
