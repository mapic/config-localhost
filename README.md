# Default configuration for [Dockerized Mapic Engine](https://github.com/mapic/dockerized)

1. Put folder in `/docks/config/`, making `localhost` directory eg. `/docks/config/localhost`.
2. Then set ENV variable `SYSTEMAPIC_DOMAIN=localhost`.
3. Then update the configs (redis, mongo, engine, mile) to reflect corrent Redis/Mongo passwords.




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


