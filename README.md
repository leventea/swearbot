# Swear Generator Discord Bot

This was funny for like 3 minutes but I wrote it anyways.
It generates random swear phrases from the provided list of words, the word list contained in this repository was stolen from the leaked eKreta source code (hungarian school journaling system).

# Deployment

The image can be built without a .env file, but you will have to provide both `TOKEN` and `CLIENT_ID` as environment variables.

```shell
docker build . -t swearbot
docker run -e TOKEN=<your bot token> -e CLIENT_ID=<app client id> swearbot
```