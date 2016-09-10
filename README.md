# nodely
A starting point for NodeJS projects, that includes authentication via PassportJS

---
## Prerequisites
### NodeJS v6

```bash
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs

```

## MongoDB
```bash
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
service mongod start
```
---
## Up & Running

Clone this repository & enter it
```bash
git clone https://github.com/Nusrath/nodely.git && cd nodely
```

Install the dependencies
```bash
npm install
```

Start the application!
```bash
npm start
```
