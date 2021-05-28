![](https://img.shields.io/badge/license-MIT-yellow) ![](https://img.shields.io/badge/javascript-latest-orange) ![](https://img.shields.io/badge/NodeJS-v10-green)
# redisCache
A simple architecture to understand the memory caching functionality for faster data loading and how to reduce traffic on database. Using Redis as memory caching tool can help to reduce the load time  of data on UI and will also ehance the UI's performance

## What is Redis ?
Redis, which stands for Remote Dictionary Server, is a fast, open-source, in-memory key-value data store for use as a database, cache, message broker, and queue.All Redis data resides in-memory, in contrast to databases that store data on disk or SSDs. By eliminating the need to access disks, in-memory data stores such as Redis avoid seek time delays and can access data in microseconds.Redis is a popular choice for caching, session management, gaming, real-time analytics, chat/messaging, media streaming, and pub/sub apps.
[Read More](https://redis.io/topics/introduction)

![](Images/web2.png)


## Pre-requisite
To run this solution we need to have those services running on the system 
1. NodeJS installed - [Windows Installation](https://phoenixnap.com/kb/install-node-js-npm-on-windows) |  [Linux Installation](https://www.geeksforgeeks.org/installation-of-node-js-on-linux/)
2. MongoDB installed - [Windows Installation](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/) |  [Linux Installation](https://docs.mongodb.com/manual/administration/install-on-linux/)
3. Redis Installed - [Windows Installation](https://divyanshushekhar.com/how-to-install-redis-on-windows-10/) |  [Linux Installation](https://linuxtechlab.com/how-install-redis-server-linux/)

### NOTE- 
    Before starting make sure all the pre-requisites are running 
    
## Configure the Project
1. Git clone the project to a specific folder/directory.
2. cd to the folder redisCache.
3. download all the required packages
   ```
   npm install --save
   ```
4. Start the server
   ```
   node index.js
   ```



