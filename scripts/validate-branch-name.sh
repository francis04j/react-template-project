#!/usr/bin/env bash
LC_ALL=C
bold=$(tput bold)
normal=$(tput sgr0)
RED='\033[0;31m'
YLW='\033[0;33m'
NC='\033[0m' # No Color

local_branch="$(git rev-parse --abbrev-ref HEAD)"

valid_branch_regex="^(JIRA|BB|CHAN|EE)-[0-9._-]+$"

message="\n\nThere is something wrong with your branch name.\nBranch names in this project must adhere to this contract:\n${bold}${YLW}$valid_branch_regex ${normal}${NC} \n\n${RED}Your commit will be rejected.${NC} \nYou should rename your branch to a valid name and try again.\n\n"

if [[ ! $local_branch =~ $valid_branch_regex ]]
then
    echo "$message"
    exit 1
fi

exit 0