#!/usr/bin/env bash

original_dir=$(pwd)

checkout() {
  cd "$HOME"/Workspaces/"$1" || exit
  git checkout main
  git branch --delete chore
  git pull --all --prune
  rm -rf node_modules/
  npm install
}

names=(
  collections
  configs
  next-app
  react-app
  styles
)

for name in "${names[@]}"; do
  checkout "$name" &
done

wait

cd "$original_dir" || exit
