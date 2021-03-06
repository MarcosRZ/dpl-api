# API DEPLOYMENT SCRIPT
# @author Marcos Rodríguez Martinez - MarcosRZ @ GitHub

# TODO: THIS SHOULD BE PARAMETERS !!
processName=pixel-sushi-api
project=pixel-sushi
app=api
repo=https://msucaro:@bitbucket.org/msucaro/pixel-sushi.git
upstreamBranch=develop

deploy=/root/deploy
projects=/root/apps
backups=/root/backups
backupName=$project-$app-$(date +%s-%N).tar.gz

pm2 stop $processName
pm2 delete $processName

mkdir -p $projects/$project/$app
mkdir -p $backups
mkdir -p $projects

# Running instance backup
tar -cvzf $backups/$backupName $projects/$project/$app

#Clone
cd $deploy

git clone $repo
cd $project/$app
git checkout $upstreamBranch

# Build
npm i
npm run build

# Remove current version
rm -rf $projects/$project/$app

# Copy
cp -a dist $projects/$project/$app

# Chdir
cd $projects/$project/$app

# Install
npm i

# Run
pm2 start server.js --name $project-$app

rm -rf $deploy/$project
