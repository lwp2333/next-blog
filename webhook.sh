#!/bin/bash
# node 软链
export PATH=$PATH:/www/server/nvm/versions/node/v16.14.2/bin

echo "-------开始-------"
date --date='0 days ago' "+%Y-%m-%d %H:%M:%S"

#判断宝塔WebHook参数是否存在
if [ ! -n "$1" ]; then
  echo "param参数错误"
  echo "End"
  exit
fi

#服务器项目路径
serverPath="/www/wwwroot/$1"
#项目 git 网址
gitHttp="https://github.com/lwp2333/$1.git"

echo "项目路径: $serverPath"
echo "git路径: $gitHttp"

#判断项目路径是否存在
if [ -d "$serverPath" ]; then
  cd $serverPath

  echo "step-1: 拉取远程最新代码"
  git checkout .
  git pull
  echo "step-2: 拉取完成"

  echo "step-3: 开始安装依赖"
  date --date='0 days ago' "+%Y-%m-%d %H:%M:%S"
  yarn
  date --date='0 days ago' "+%Y-%m-%d %H:%M:%S"
  echo "step-4: 完成依赖安装"

  echo "step-5: 开始打包"
  date --date='0 days ago' "+%Y-%m-%d %H:%M:%S"
  yarn build
  date --date='0 days ago' "+%Y-%m-%d %H:%M:%S"
  echo "step-6: 完成打包"

  echo "step-7: 开始pm2 restart"
  pm2 restart ecosystem.config.js
  echo "step-8: 完成pm2 restart"

  echo "-------结束--------"
  exit
else
  echo "该项目路径不存在"
  echo "End"
  exit
fi
