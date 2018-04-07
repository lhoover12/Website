echo "build script dude."
echo "$TRAVIS_PULL_REQUEST" 
echo "$TRAVIS_BRANCH"

if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
        echo "Current build is a Pull"
    echo "$TRAVIS_PULL_REQUEST"
fi



