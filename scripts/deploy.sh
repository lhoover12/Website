echo "build script dude."
echo "$TRAVIS_PULL_REQUEST"
echo "$TRAVIS_BRANCH"
pip install --upgrade --user awscli # install aws cli w/o sudo
aws configure set aws_access_key_id $AWS_ID
aws configure set aws_secret_access_key $AWS_SEC
aws configure set default.region us-west-2
aws --version

if [ "$TRAVIS_PULL_REQUEST" != "false" -a "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    PRNUM="PR-$TRAVIS_PULL_REQUEST"
    aws s3 sync ./build s3://lukasdevelopementtest/page/PR/$PRNUM/ --metadata-directive REPLACE
    npm install
    npm run  REACT_APP_PATH=/page/PR react-scripts build
    echo "Current build is a Pull Request "
    echo "s3://lukasdevelopementtest/page/PR/$PRNUM/"
    echo "$PRNUM"
fi
if [ "$TRAVIS_BRANCH" != "master" ]; then
    echo "################   master ####################"
fi
    echo "====="
echo "$TRAVIS_BRANCH"
echo "====="
# if Pr deploy to s3 bucket/PR-(PRNUM)

# if master deploy to main s3 bucket/Page
# maybe have dev - prod bucket
