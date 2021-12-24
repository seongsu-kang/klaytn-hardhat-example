#!/bin/bash

while getopts n: flag
do
  case $flag in
    n) network=$OPTARG;;
  esac
done

case $network in
    "ropsten") ;;
    "hardhat") ;;
    "cypress") ;;
    "baobab") ;;
    "") echo "Require network -n \${network}" 
        exit 1;;
    *) echo "Invalid network $network"
        exit 1;;
esac

echo "Network: $network"

npx hardhat deploy --network $network --tags 00
npx hardhat deploy --network $network --tags 01
npx hardhat run    --network $network scripts/setupDeployment.ts