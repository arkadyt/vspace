#
# https://github.com/apancutt/deploy-aws-s3-cloudfront
#

# import aws key variables from .env file
export $(xargs < ./.env.deploy)

./node_modules/deploy-aws-s3-cloudfront/bin/deploy-aws-s3-cloudfront \
  --acl private \
  --bucket apphost-7 \
  --cache-control "**:no-cache" \
  --delete \
  --source ./build \
  --destination vspace \
  --distribution E3C8AR5JG7D1W9 \
  --invalidation-path "/*" \
  --non-interactive
