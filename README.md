## Build
```
yarn install
```

## Compile
```
npx hardhat compile
```

## Run a script
```
npx hardhat run <script>
npx hardhat run --network <network_name> <script>
```

## Configure
```
export PRIVATE_KEY=${PRIVATE_KEY}
export PRIVATE_KEY2=${PRIVATE_KEY2}
export KAS_AUTH=${KAS_AUTH}
```

## Deploy
```
./deploy.sh -n ${network}
```

## Test
```
npx hardhat test
npx hardhat test <script>
```

## Task
```
npx hardhat <task> --<taskArg> <taskArgValue>
```
