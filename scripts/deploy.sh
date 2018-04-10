echo "build script dude."
echo "$TRAVIS_PULL_REQUEST" 
echo "$TRAVIS_BRANCH"

if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    aws configure set aws_access_key_id $AWS_ID
    aws configure set aws_secret_access_key_id $AWS_SEC
    PRNUM="PR-$TRAVIS_PULL_REQUEST"
    aws s3 sync ./build $S3_BUCKET/$PRNUM/ --metadata-directive REPLACE
    echo "Current build is a Pull Request "
    
    echo "$PRNUM"
fi
# if Pr deploy to s3 bucket/PR-(PRNUM)

# if master deploy to main s3 bucket/Page
# maybe have dev - prod bucket