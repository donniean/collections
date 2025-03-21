#!/usr/bin/env bash

original_dir=$(pwd)

func() {
  cd "$HOME"/repos/"$1" || exit
  git checkout main
  git branch -D chore
  git pull --all --prune
  # rm -rf node_modules/
  npm install
}

names=(
  collections
  configs
  react-app
)

for name in "${names[@]}"; do
  func "$name" &
done

wait

cd "$original_dir" || exit
