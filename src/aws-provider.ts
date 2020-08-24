// https://www.terraform.io/docs/providers/aws/r/aws_provider.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformProvider } from 'cdktf';

// Configuration

export interface AwsProviderConfig {
  /** The access key for API operations. You can retrieve this
from the 'Security & Credentials' section of the AWS console. */
  readonly accessKey?: string;
  readonly allowedAccountIds?: string[];
  readonly forbiddenAccountIds?: string[];
  /** Explicitly allow the provider to perform "insecure" SSL requests. If omitted,default value is `false` */
  readonly insecure?: boolean;
  /** The maximum number of times an AWS API request is
being executed. If the API request still fails, an error is
thrown. */
  readonly maxRetries?: number;
  /** The profile for API operations. If not set, the default profile
created with `aws configure` will be used. */
  readonly profile?: string;
  /** The region where AWS operations will take place. Examples
are us-east-1, us-west-2, etc. */
  readonly region: string;
  /** Set this to true to force the request to use path-style addressing,
i.e., http://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will
use virtual hosted bucket addressing when possible
(http://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service. */
  readonly s3ForcePathStyle?: boolean;
  /** The secret key for API operations. You can retrieve this
from the 'Security & Credentials' section of the AWS console. */
  readonly secretKey?: string;
  /** The path to the shared credentials file. If not set
this defaults to ~/.aws/credentials. */
  readonly sharedCredentialsFile?: string;
  /** Skip the credentials validation via STS API. Used for AWS API implementations that do not have STS available/implemented. */
  readonly skipCredentialsValidation?: boolean;
  /** Skip getting the supported EC2 platforms. Used by users that don't have ec2:DescribeAccountAttributes permissions. */
  readonly skipGetEc2Platforms?: boolean;
  readonly skipMetadataApiCheck?: boolean;
  /** Skip static validation of region name. Used by users of alternative AWS-like APIs or users w/ access to regions that are not public (yet). */
  readonly skipRegionValidation?: boolean;
  /** Skip requesting the account ID. Used for AWS API implementations that do not have IAM/STS API and/or metadata API. */
  readonly skipRequestingAccountId?: boolean;
  /** session token. A session token is only required if you are
using temporary security credentials. */
  readonly token?: string;
  /** Alias name */
  readonly alias?: string;
  /** assume_role block */
  readonly assumeRole?: AwsProviderAssumeRole[];
  /** endpoints block */
  readonly endpoints?: AwsProviderEndpoints[];
  /** ignore_tags block */
  readonly ignoreTags?: AwsProviderIgnoreTags[];
}
export interface AwsProviderAssumeRole {
  /** The external ID to use when assuming the role. If omitted, no external ID is passed to the AssumeRole call. */
  readonly externalId?: string;
  /** The permissions applied when assuming a role. You cannot use, this policy to grant further permissions that are in excess to those of the,  role that is being assumed. */
  readonly policy?: string;
  /** The ARN of an IAM role to assume prior to making API calls. */
  readonly roleArn?: string;
  /** The session name to use when assuming the role. If omitted, no session name is passed to the AssumeRole call. */
  readonly sessionName?: string;
}
export interface AwsProviderEndpoints {
  /** Use this to override the default service endpoint URL */
  readonly accessanalyzer?: string;
  /** Use this to override the default service endpoint URL */
  readonly acm?: string;
  /** Use this to override the default service endpoint URL */
  readonly acmpca?: string;
  /** Use this to override the default service endpoint URL */
  readonly amplify?: string;
  /** Use this to override the default service endpoint URL */
  readonly apigateway?: string;
  /** Use this to override the default service endpoint URL */
  readonly applicationautoscaling?: string;
  /** Use this to override the default service endpoint URL */
  readonly applicationinsights?: string;
  /** Use this to override the default service endpoint URL */
  readonly appmesh?: string;
  /** Use this to override the default service endpoint URL */
  readonly appstream?: string;
  /** Use this to override the default service endpoint URL */
  readonly appsync?: string;
  /** Use this to override the default service endpoint URL */
  readonly athena?: string;
  /** Use this to override the default service endpoint URL */
  readonly autoscaling?: string;
  /** Use this to override the default service endpoint URL */
  readonly autoscalingplans?: string;
  /** Use this to override the default service endpoint URL */
  readonly backup?: string;
  /** Use this to override the default service endpoint URL */
  readonly batch?: string;
  /** Use this to override the default service endpoint URL */
  readonly budgets?: string;
  /** Use this to override the default service endpoint URL */
  readonly cloud9?: string;
  /** Use this to override the default service endpoint URL */
  readonly cloudformation?: string;
  /** Use this to override the default service endpoint URL */
  readonly cloudfront?: string;
  /** Use this to override the default service endpoint URL */
  readonly cloudhsm?: string;
  /** Use this to override the default service endpoint URL */
  readonly cloudsearch?: string;
  /** Use this to override the default service endpoint URL */
  readonly cloudtrail?: string;
  /** Use this to override the default service endpoint URL */
  readonly cloudwatch?: string;
  /** Use this to override the default service endpoint URL */
  readonly cloudwatchevents?: string;
  /** Use this to override the default service endpoint URL */
  readonly cloudwatchlogs?: string;
  /** Use this to override the default service endpoint URL */
  readonly codeartifact?: string;
  /** Use this to override the default service endpoint URL */
  readonly codebuild?: string;
  /** Use this to override the default service endpoint URL */
  readonly codecommit?: string;
  /** Use this to override the default service endpoint URL */
  readonly codedeploy?: string;
  /** Use this to override the default service endpoint URL */
  readonly codepipeline?: string;
  /** Use this to override the default service endpoint URL */
  readonly cognitoidentity?: string;
  /** Use this to override the default service endpoint URL */
  readonly cognitoidp?: string;
  /** Use this to override the default service endpoint URL */
  readonly configservice?: string;
  /** Use this to override the default service endpoint URL */
  readonly cur?: string;
  /** Use this to override the default service endpoint URL */
  readonly dataexchange?: string;
  /** Use this to override the default service endpoint URL */
  readonly datapipeline?: string;
  /** Use this to override the default service endpoint URL */
  readonly datasync?: string;
  /** Use this to override the default service endpoint URL */
  readonly dax?: string;
  /** Use this to override the default service endpoint URL */
  readonly devicefarm?: string;
  /** Use this to override the default service endpoint URL */
  readonly directconnect?: string;
  /** Use this to override the default service endpoint URL */
  readonly dlm?: string;
  /** Use this to override the default service endpoint URL */
  readonly dms?: string;
  /** Use this to override the default service endpoint URL */
  readonly docdb?: string;
  /** Use this to override the default service endpoint URL */
  readonly ds?: string;
  /** Use this to override the default service endpoint URL */
  readonly dynamodb?: string;
  /** Use this to override the default service endpoint URL */
  readonly ec2?: string;
  /** Use this to override the default service endpoint URL */
  readonly ecr?: string;
  /** Use this to override the default service endpoint URL */
  readonly ecs?: string;
  /** Use this to override the default service endpoint URL */
  readonly efs?: string;
  /** Use this to override the default service endpoint URL */
  readonly eks?: string;
  /** Use this to override the default service endpoint URL */
  readonly elasticache?: string;
  /** Use this to override the default service endpoint URL */
  readonly elasticbeanstalk?: string;
  /** Use this to override the default service endpoint URL */
  readonly elastictranscoder?: string;
  /** Use this to override the default service endpoint URL */
  readonly elb?: string;
  /** Use this to override the default service endpoint URL */
  readonly emr?: string;
  /** Use this to override the default service endpoint URL */
  readonly es?: string;
  /** Use this to override the default service endpoint URL */
  readonly firehose?: string;
  /** Use this to override the default service endpoint URL */
  readonly fms?: string;
  /** Use this to override the default service endpoint URL */
  readonly forecast?: string;
  /** Use this to override the default service endpoint URL */
  readonly fsx?: string;
  /** Use this to override the default service endpoint URL */
  readonly gamelift?: string;
  /** Use this to override the default service endpoint URL */
  readonly glacier?: string;
  /** Use this to override the default service endpoint URL */
  readonly globalaccelerator?: string;
  /** Use this to override the default service endpoint URL */
  readonly glue?: string;
  /** Use this to override the default service endpoint URL */
  readonly greengrass?: string;
  /** Use this to override the default service endpoint URL */
  readonly guardduty?: string;
  /** Use this to override the default service endpoint URL */
  readonly iam?: string;
  /** Use this to override the default service endpoint URL */
  readonly imagebuilder?: string;
  /** Use this to override the default service endpoint URL */
  readonly inspector?: string;
  /** Use this to override the default service endpoint URL */
  readonly iot?: string;
  /** Use this to override the default service endpoint URL */
  readonly iotanalytics?: string;
  /** Use this to override the default service endpoint URL */
  readonly iotevents?: string;
  /** Use this to override the default service endpoint URL */
  readonly kafka?: string;
  /** Use this to override the default service endpoint URL */
  readonly kinesis?: string;
  /** Use this to override the default service endpoint URL */
  readonly kinesisAnalytics?: string;
  /** Use this to override the default service endpoint URL */
  readonly kinesisanalytics?: string;
  /** Use this to override the default service endpoint URL */
  readonly kinesisanalyticsv2?: string;
  /** Use this to override the default service endpoint URL */
  readonly kinesisvideo?: string;
  /** Use this to override the default service endpoint URL */
  readonly kms?: string;
  /** Use this to override the default service endpoint URL */
  readonly lakeformation?: string;
  /** Use this to override the default service endpoint URL */
  readonly lambda?: string;
  /** Use this to override the default service endpoint URL */
  readonly lexmodels?: string;
  /** Use this to override the default service endpoint URL */
  readonly licensemanager?: string;
  /** Use this to override the default service endpoint URL */
  readonly lightsail?: string;
  /** Use this to override the default service endpoint URL */
  readonly macie?: string;
  /** Use this to override the default service endpoint URL */
  readonly managedblockchain?: string;
  /** Use this to override the default service endpoint URL */
  readonly marketplacecatalog?: string;
  /** Use this to override the default service endpoint URL */
  readonly mediaconnect?: string;
  /** Use this to override the default service endpoint URL */
  readonly mediaconvert?: string;
  /** Use this to override the default service endpoint URL */
  readonly medialive?: string;
  /** Use this to override the default service endpoint URL */
  readonly mediapackage?: string;
  /** Use this to override the default service endpoint URL */
  readonly mediastore?: string;
  /** Use this to override the default service endpoint URL */
  readonly mediastoredata?: string;
  /** Use this to override the default service endpoint URL */
  readonly mq?: string;
  /** Use this to override the default service endpoint URL */
  readonly neptune?: string;
  /** Use this to override the default service endpoint URL */
  readonly networkmanager?: string;
  /** Use this to override the default service endpoint URL */
  readonly opsworks?: string;
  /** Use this to override the default service endpoint URL */
  readonly organizations?: string;
  /** Use this to override the default service endpoint URL */
  readonly outposts?: string;
  /** Use this to override the default service endpoint URL */
  readonly personalize?: string;
  /** Use this to override the default service endpoint URL */
  readonly pinpoint?: string;
  /** Use this to override the default service endpoint URL */
  readonly pricing?: string;
  /** Use this to override the default service endpoint URL */
  readonly qldb?: string;
  /** Use this to override the default service endpoint URL */
  readonly quicksight?: string;
  /** Use this to override the default service endpoint URL */
  readonly r53?: string;
  /** Use this to override the default service endpoint URL */
  readonly ram?: string;
  /** Use this to override the default service endpoint URL */
  readonly rds?: string;
  /** Use this to override the default service endpoint URL */
  readonly redshift?: string;
  /** Use this to override the default service endpoint URL */
  readonly resourcegroups?: string;
  /** Use this to override the default service endpoint URL */
  readonly resourcegroupstaggingapi?: string;
  /** Use this to override the default service endpoint URL */
  readonly route53?: string;
  /** Use this to override the default service endpoint URL */
  readonly route53Domains?: string;
  /** Use this to override the default service endpoint URL */
  readonly route53Resolver?: string;
  /** Use this to override the default service endpoint URL */
  readonly s3?: string;
  /** Use this to override the default service endpoint URL */
  readonly s3Control?: string;
  /** Use this to override the default service endpoint URL */
  readonly sagemaker?: string;
  /** Use this to override the default service endpoint URL */
  readonly sdb?: string;
  /** Use this to override the default service endpoint URL */
  readonly secretsmanager?: string;
  /** Use this to override the default service endpoint URL */
  readonly securityhub?: string;
  /** Use this to override the default service endpoint URL */
  readonly serverlessrepo?: string;
  /** Use this to override the default service endpoint URL */
  readonly servicecatalog?: string;
  /** Use this to override the default service endpoint URL */
  readonly servicediscovery?: string;
  /** Use this to override the default service endpoint URL */
  readonly servicequotas?: string;
  /** Use this to override the default service endpoint URL */
  readonly ses?: string;
  /** Use this to override the default service endpoint URL */
  readonly shield?: string;
  /** Use this to override the default service endpoint URL */
  readonly sns?: string;
  /** Use this to override the default service endpoint URL */
  readonly sqs?: string;
  /** Use this to override the default service endpoint URL */
  readonly ssm?: string;
  /** Use this to override the default service endpoint URL */
  readonly stepfunctions?: string;
  /** Use this to override the default service endpoint URL */
  readonly storagegateway?: string;
  /** Use this to override the default service endpoint URL */
  readonly sts?: string;
  /** Use this to override the default service endpoint URL */
  readonly swf?: string;
  /** Use this to override the default service endpoint URL */
  readonly synthetics?: string;
  /** Use this to override the default service endpoint URL */
  readonly transfer?: string;
  /** Use this to override the default service endpoint URL */
  readonly waf?: string;
  /** Use this to override the default service endpoint URL */
  readonly wafregional?: string;
  /** Use this to override the default service endpoint URL */
  readonly wafv2?: string;
  /** Use this to override the default service endpoint URL */
  readonly worklink?: string;
  /** Use this to override the default service endpoint URL */
  readonly workmail?: string;
  /** Use this to override the default service endpoint URL */
  readonly workspaces?: string;
  /** Use this to override the default service endpoint URL */
  readonly xray?: string;
}
export interface AwsProviderIgnoreTags {
  /** Resource tag key prefixes to ignore across all resources. */
  readonly keyPrefixes?: string[];
  /** Resource tag keys to ignore across all resources. */
  readonly keys?: string[];
}

// Resource

export class AwsProvider extends TerraformProvider {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AwsProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'aws',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersionConstraint: '~> 2.0'
      },
      terraformProviderSource: 'aws'
    });
    this._accessKey = config.accessKey;
    this._allowedAccountIds = config.allowedAccountIds;
    this._forbiddenAccountIds = config.forbiddenAccountIds;
    this._insecure = config.insecure;
    this._maxRetries = config.maxRetries;
    this._profile = config.profile;
    this._region = config.region;
    this._s3ForcePathStyle = config.s3ForcePathStyle;
    this._secretKey = config.secretKey;
    this._sharedCredentialsFile = config.sharedCredentialsFile;
    this._skipCredentialsValidation = config.skipCredentialsValidation;
    this._skipGetEc2Platforms = config.skipGetEc2Platforms;
    this._skipMetadataApiCheck = config.skipMetadataApiCheck;
    this._skipRegionValidation = config.skipRegionValidation;
    this._skipRequestingAccountId = config.skipRequestingAccountId;
    this._token = config.token;
    this._alias = config.alias;
    this._assumeRole = config.assumeRole;
    this._endpoints = config.endpoints;
    this._ignoreTags = config.ignoreTags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string;
  public get accessKey() {
    return this._accessKey;
  }
  public set accessKey(value: string | undefined) {
    this._accessKey = value;
  }

  // allowed_account_ids - computed: false, optional: true, required: false
  private _allowedAccountIds?: string[];
  public get allowedAccountIds() {
    return this._allowedAccountIds;
  }
  public set allowedAccountIds(value: string[] | undefined) {
    this._allowedAccountIds = value;
  }

  // forbidden_account_ids - computed: false, optional: true, required: false
  private _forbiddenAccountIds?: string[];
  public get forbiddenAccountIds() {
    return this._forbiddenAccountIds;
  }
  public set forbiddenAccountIds(value: string[] | undefined) {
    this._forbiddenAccountIds = value;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean;
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | undefined) {
    this._insecure = value;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number;
  public get maxRetries() {
    return this._maxRetries;
  }
  public set maxRetries(value: number | undefined) {
    this._maxRetries = value;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string;
  public get profile() {
    return this._profile;
  }
  public set profile(value: string | undefined) {
    this._profile = value;
  }

  // region - computed: false, optional: false, required: true
  private _region: string;
  public get region() {
    return this._region;
  }
  public set region(value: string) {
    this._region = value;
  }

  // s3_force_path_style - computed: false, optional: true, required: false
  private _s3ForcePathStyle?: boolean;
  public get s3ForcePathStyle() {
    return this._s3ForcePathStyle;
  }
  public set s3ForcePathStyle(value: boolean | undefined) {
    this._s3ForcePathStyle = value;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string;
  public get secretKey() {
    return this._secretKey;
  }
  public set secretKey(value: string | undefined) {
    this._secretKey = value;
  }

  // shared_credentials_file - computed: false, optional: true, required: false
  private _sharedCredentialsFile?: string;
  public get sharedCredentialsFile() {
    return this._sharedCredentialsFile;
  }
  public set sharedCredentialsFile(value: string | undefined) {
    this._sharedCredentialsFile = value;
  }

  // skip_credentials_validation - computed: false, optional: true, required: false
  private _skipCredentialsValidation?: boolean;
  public get skipCredentialsValidation() {
    return this._skipCredentialsValidation;
  }
  public set skipCredentialsValidation(value: boolean | undefined) {
    this._skipCredentialsValidation = value;
  }

  // skip_get_ec2_platforms - computed: false, optional: true, required: false
  private _skipGetEc2Platforms?: boolean;
  public get skipGetEc2Platforms() {
    return this._skipGetEc2Platforms;
  }
  public set skipGetEc2Platforms(value: boolean | undefined) {
    this._skipGetEc2Platforms = value;
  }

  // skip_metadata_api_check - computed: false, optional: true, required: false
  private _skipMetadataApiCheck?: boolean;
  public get skipMetadataApiCheck() {
    return this._skipMetadataApiCheck;
  }
  public set skipMetadataApiCheck(value: boolean | undefined) {
    this._skipMetadataApiCheck = value;
  }

  // skip_region_validation - computed: false, optional: true, required: false
  private _skipRegionValidation?: boolean;
  public get skipRegionValidation() {
    return this._skipRegionValidation;
  }
  public set skipRegionValidation(value: boolean | undefined) {
    this._skipRegionValidation = value;
  }

  // skip_requesting_account_id - computed: false, optional: true, required: false
  private _skipRequestingAccountId?: boolean;
  public get skipRequestingAccountId() {
    return this._skipRequestingAccountId;
  }
  public set skipRequestingAccountId(value: boolean | undefined) {
    this._skipRequestingAccountId = value;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string;
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string;
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }

  // assume_role - computed: false, optional: true, required: false
  private _assumeRole?: AwsProviderAssumeRole[];
  public get assumeRole() {
    return this._assumeRole;
  }
  public set assumeRole(value: AwsProviderAssumeRole[] | undefined) {
    this._assumeRole = value;
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints?: AwsProviderEndpoints[];
  public get endpoints() {
    return this._endpoints;
  }
  public set endpoints(value: AwsProviderEndpoints[] | undefined) {
    this._endpoints = value;
  }

  // ignore_tags - computed: false, optional: true, required: false
  private _ignoreTags?: AwsProviderIgnoreTags[];
  public get ignoreTags() {
    return this._ignoreTags;
  }
  public set ignoreTags(value: AwsProviderIgnoreTags[] | undefined) {
    this._ignoreTags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key: this._accessKey,
      allowed_account_ids: this._allowedAccountIds,
      forbidden_account_ids: this._forbiddenAccountIds,
      insecure: this._insecure,
      max_retries: this._maxRetries,
      profile: this._profile,
      region: this._region,
      s3_force_path_style: this._s3ForcePathStyle,
      secret_key: this._secretKey,
      shared_credentials_file: this._sharedCredentialsFile,
      skip_credentials_validation: this._skipCredentialsValidation,
      skip_get_ec2_platforms: this._skipGetEc2Platforms,
      skip_metadata_api_check: this._skipMetadataApiCheck,
      skip_region_validation: this._skipRegionValidation,
      skip_requesting_account_id: this._skipRequestingAccountId,
      token: this._token,
      alias: this._alias,
      assume_role: this._assumeRole,
      endpoints: this._endpoints,
      ignore_tags: this._ignoreTags,
    };
  }
}
