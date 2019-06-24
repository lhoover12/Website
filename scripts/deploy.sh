echo "build script dude."
echo "PR num  $TRAVIS_PULL_REQUEST"
echo "branch $TRAVIS_BRANCH"
echo "PR branch $TRAVIS_PULL_REQUEST_BRANCH"
echo "this is PR-$TRAVIS_PULL_REQUEST  and   $TRAVIS_EVENT_TYPE"
pip install --upgrade --user awscli # install aws cli w/o sudo
aws configure set aws_access_key_id $AWS_ID
aws configure set aws_secret_access_key $AWS_SEC
aws configure set default.region us-west-2
aws --version

def getPrNumber() {
    sh "git log --oneline -1 > pr.txt"
    def commit = readFile file:'pr.txt'
    return (commit =~ /\#\d*/)[0].split('#')[1]
}

if [ "$TRAVIS_PULL_REQUEST" != "false" -a "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo "################   PULL REQUEST ####################"
    #PRNUM="PR-$TRAVIS_PULL_REQUEST"
    echo "yarn build "
    #yarn
    #REACT_APP_PATH=/page/PR/$PRNUM PUBLIC_URL=/page/PR/$PRNUM yarn build
    #echo "deploying to s3 /page/PR/$PRNUM/"
    #aws s3 sync ./build s3://lukasdevelopementtest/page/PR/$PRNUM/ --metadata-directive REPLACE
    #echo "Current build is a Pull Request "
    echo "$PRNUM"
    echo "##############################################"
fi
if [ "$TRAVIS_BRANCH" == "master" -a "$TRAVIS_EVENT_TYPE" != "pull_request" ]; then
     #echo "################   master ####################"
     # REACT_APP_PATH=/page PUBLIC_URL=/page yarn build
     echo "deploying to s3  /page/"
     # aws git log - sync ./build s3://lukasdevelopementtest/page/ --metadata-directive REPLACE
     echo "Prod updated "
     #aws cloudfront create-invalidation --distribution-id E1DPUTDLIX844A --paths /
     echo "##############################################"
fi

echo "====="
echo "$TRAVIS_BRANCH"
echo "====="
# if Pr deploy to s3 bucket/PR-(PRNUM)

# if master deploy to main s3 bucket/Page
# maybe have dev - prod bucket
