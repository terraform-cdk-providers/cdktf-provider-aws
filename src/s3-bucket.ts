// https://www.terraform.io/docs/providers/aws/r/s3_bucket.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3BucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#acceleration_status S3Bucket#acceleration_status}
  */
  readonly accelerationStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#acl S3Bucket#acl}
  */
  readonly acl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#bucket S3Bucket#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#bucket_prefix S3Bucket#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#force_destroy S3Bucket#force_destroy}
  */
  readonly forceDestroy?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#hosted_zone_id S3Bucket#hosted_zone_id}
  */
  readonly hostedZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#policy S3Bucket#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#request_payer S3Bucket#request_payer}
  */
  readonly requestPayer?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#tags S3Bucket#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#tags_all S3Bucket#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#website_domain S3Bucket#website_domain}
  */
  readonly websiteDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#website_endpoint S3Bucket#website_endpoint}
  */
  readonly websiteEndpoint?: string;
  /**
  * cors_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#cors_rule S3Bucket#cors_rule}
  */
  readonly corsRule?: S3BucketCorsRule[];
  /**
  * grant block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#grant S3Bucket#grant}
  */
  readonly grant?: S3BucketGrant[];
  /**
  * lifecycle_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#lifecycle_rule S3Bucket#lifecycle_rule}
  */
  readonly lifecycleRule?: S3BucketLifecycleRule[];
  /**
  * logging block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#logging S3Bucket#logging}
  */
  readonly logging?: S3BucketLogging[];
  /**
  * object_lock_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#object_lock_configuration S3Bucket#object_lock_configuration}
  */
  readonly objectLockConfiguration?: S3BucketObjectLockConfiguration[];
  /**
  * replication_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#replication_configuration S3Bucket#replication_configuration}
  */
  readonly replicationConfiguration?: S3BucketReplicationConfiguration[];
  /**
  * server_side_encryption_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#server_side_encryption_configuration S3Bucket#server_side_encryption_configuration}
  */
  readonly serverSideEncryptionConfiguration?: S3BucketServerSideEncryptionConfiguration[];
  /**
  * versioning block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#versioning S3Bucket#versioning}
  */
  readonly versioning?: S3BucketVersioning[];
  /**
  * website block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#website S3Bucket#website}
  */
  readonly website?: S3BucketWebsite[];
}
export interface S3BucketCorsRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#allowed_headers S3Bucket#allowed_headers}
  */
  readonly allowedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#allowed_methods S3Bucket#allowed_methods}
  */
  readonly allowedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#allowed_origins S3Bucket#allowed_origins}
  */
  readonly allowedOrigins: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#expose_headers S3Bucket#expose_headers}
  */
  readonly exposeHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#max_age_seconds S3Bucket#max_age_seconds}
  */
  readonly maxAgeSeconds?: number;
}

function s3BucketCorsRuleToTerraform(struct?: S3BucketCorsRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedHeaders),
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedMethods),
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedOrigins),
    expose_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exposeHeaders),
    max_age_seconds: cdktf.numberToTerraform(struct!.maxAgeSeconds),
  }
}

export interface S3BucketGrant {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#id S3Bucket#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#permissions S3Bucket#permissions}
  */
  readonly permissions: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#type S3Bucket#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#uri S3Bucket#uri}
  */
  readonly uri?: string;
}

function s3BucketGrantToTerraform(struct?: S3BucketGrant): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    permissions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.permissions),
    type: cdktf.stringToTerraform(struct!.type),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}

export interface S3BucketLifecycleRuleExpiration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#date S3Bucket#date}
  */
  readonly date?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#days S3Bucket#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#expired_object_delete_marker S3Bucket#expired_object_delete_marker}
  */
  readonly expiredObjectDeleteMarker?: boolean;
}

function s3BucketLifecycleRuleExpirationToTerraform(struct?: S3BucketLifecycleRuleExpiration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    date: cdktf.stringToTerraform(struct!.date),
    days: cdktf.numberToTerraform(struct!.days),
    expired_object_delete_marker: cdktf.booleanToTerraform(struct!.expiredObjectDeleteMarker),
  }
}

export interface S3BucketLifecycleRuleNoncurrentVersionExpiration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#days S3Bucket#days}
  */
  readonly days?: number;
}

function s3BucketLifecycleRuleNoncurrentVersionExpirationToTerraform(struct?: S3BucketLifecycleRuleNoncurrentVersionExpiration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    days: cdktf.numberToTerraform(struct!.days),
  }
}

export interface S3BucketLifecycleRuleNoncurrentVersionTransition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#days S3Bucket#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#storage_class S3Bucket#storage_class}
  */
  readonly storageClass: string;
}

function s3BucketLifecycleRuleNoncurrentVersionTransitionToTerraform(struct?: S3BucketLifecycleRuleNoncurrentVersionTransition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}

export interface S3BucketLifecycleRuleTransition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#date S3Bucket#date}
  */
  readonly date?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#days S3Bucket#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#storage_class S3Bucket#storage_class}
  */
  readonly storageClass: string;
}

function s3BucketLifecycleRuleTransitionToTerraform(struct?: S3BucketLifecycleRuleTransition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    date: cdktf.stringToTerraform(struct!.date),
    days: cdktf.numberToTerraform(struct!.days),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}

export interface S3BucketLifecycleRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#abort_incomplete_multipart_upload_days S3Bucket#abort_incomplete_multipart_upload_days}
  */
  readonly abortIncompleteMultipartUploadDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#enabled S3Bucket#enabled}
  */
  readonly enabled: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#id S3Bucket#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#prefix S3Bucket#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#tags S3Bucket#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * expiration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#expiration S3Bucket#expiration}
  */
  readonly expiration?: S3BucketLifecycleRuleExpiration[];
  /**
  * noncurrent_version_expiration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#noncurrent_version_expiration S3Bucket#noncurrent_version_expiration}
  */
  readonly noncurrentVersionExpiration?: S3BucketLifecycleRuleNoncurrentVersionExpiration[];
  /**
  * noncurrent_version_transition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#noncurrent_version_transition S3Bucket#noncurrent_version_transition}
  */
  readonly noncurrentVersionTransition?: S3BucketLifecycleRuleNoncurrentVersionTransition[];
  /**
  * transition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#transition S3Bucket#transition}
  */
  readonly transition?: S3BucketLifecycleRuleTransition[];
}

function s3BucketLifecycleRuleToTerraform(struct?: S3BucketLifecycleRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    abort_incomplete_multipart_upload_days: cdktf.numberToTerraform(struct!.abortIncompleteMultipartUploadDays),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
    expiration: cdktf.listMapper(s3BucketLifecycleRuleExpirationToTerraform)(struct!.expiration),
    noncurrent_version_expiration: cdktf.listMapper(s3BucketLifecycleRuleNoncurrentVersionExpirationToTerraform)(struct!.noncurrentVersionExpiration),
    noncurrent_version_transition: cdktf.listMapper(s3BucketLifecycleRuleNoncurrentVersionTransitionToTerraform)(struct!.noncurrentVersionTransition),
    transition: cdktf.listMapper(s3BucketLifecycleRuleTransitionToTerraform)(struct!.transition),
  }
}

export interface S3BucketLogging {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#target_bucket S3Bucket#target_bucket}
  */
  readonly targetBucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#target_prefix S3Bucket#target_prefix}
  */
  readonly targetPrefix?: string;
}

function s3BucketLoggingToTerraform(struct?: S3BucketLogging): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    target_bucket: cdktf.stringToTerraform(struct!.targetBucket),
    target_prefix: cdktf.stringToTerraform(struct!.targetPrefix),
  }
}

export interface S3BucketObjectLockConfigurationRuleDefaultRetention {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#days S3Bucket#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#mode S3Bucket#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#years S3Bucket#years}
  */
  readonly years?: number;
}

function s3BucketObjectLockConfigurationRuleDefaultRetentionToTerraform(struct?: S3BucketObjectLockConfigurationRuleDefaultRetention): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    mode: cdktf.stringToTerraform(struct!.mode),
    years: cdktf.numberToTerraform(struct!.years),
  }
}

export interface S3BucketObjectLockConfigurationRule {
  /**
  * default_retention block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#default_retention S3Bucket#default_retention}
  */
  readonly defaultRetention: S3BucketObjectLockConfigurationRuleDefaultRetention[];
}

function s3BucketObjectLockConfigurationRuleToTerraform(struct?: S3BucketObjectLockConfigurationRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_retention: cdktf.listMapper(s3BucketObjectLockConfigurationRuleDefaultRetentionToTerraform)(struct!.defaultRetention),
  }
}

export interface S3BucketObjectLockConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#object_lock_enabled S3Bucket#object_lock_enabled}
  */
  readonly objectLockEnabled: string;
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#rule S3Bucket#rule}
  */
  readonly rule?: S3BucketObjectLockConfigurationRule[];
}

function s3BucketObjectLockConfigurationToTerraform(struct?: S3BucketObjectLockConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object_lock_enabled: cdktf.stringToTerraform(struct!.objectLockEnabled),
    rule: cdktf.listMapper(s3BucketObjectLockConfigurationRuleToTerraform)(struct!.rule),
  }
}

export interface S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#owner S3Bucket#owner}
  */
  readonly owner: string;
}

function s3BucketReplicationConfigurationRulesDestinationAccessControlTranslationToTerraform(struct?: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    owner: cdktf.stringToTerraform(struct!.owner),
  }
}

export interface S3BucketReplicationConfigurationRulesDestination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#account_id S3Bucket#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#bucket S3Bucket#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#replica_kms_key_id S3Bucket#replica_kms_key_id}
  */
  readonly replicaKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#storage_class S3Bucket#storage_class}
  */
  readonly storageClass?: string;
  /**
  * access_control_translation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#access_control_translation S3Bucket#access_control_translation}
  */
  readonly accessControlTranslation?: S3BucketReplicationConfigurationRulesDestinationAccessControlTranslation[];
}

function s3BucketReplicationConfigurationRulesDestinationToTerraform(struct?: S3BucketReplicationConfigurationRulesDestination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    replica_kms_key_id: cdktf.stringToTerraform(struct!.replicaKmsKeyId),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
    access_control_translation: cdktf.listMapper(s3BucketReplicationConfigurationRulesDestinationAccessControlTranslationToTerraform)(struct!.accessControlTranslation),
  }
}

export interface S3BucketReplicationConfigurationRulesFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#prefix S3Bucket#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#tags S3Bucket#tags}
  */
  readonly tags?: { [key: string]: string };
}

function s3BucketReplicationConfigurationRulesFilterToTerraform(struct?: S3BucketReplicationConfigurationRulesFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
  }
}

export interface S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#enabled S3Bucket#enabled}
  */
  readonly enabled: boolean;
}

function s3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsToTerraform(struct?: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface S3BucketReplicationConfigurationRulesSourceSelectionCriteria {
  /**
  * sse_kms_encrypted_objects block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#sse_kms_encrypted_objects S3Bucket#sse_kms_encrypted_objects}
  */
  readonly sseKmsEncryptedObjects?: S3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjects[];
}

function s3BucketReplicationConfigurationRulesSourceSelectionCriteriaToTerraform(struct?: S3BucketReplicationConfigurationRulesSourceSelectionCriteria): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    sse_kms_encrypted_objects: cdktf.listMapper(s3BucketReplicationConfigurationRulesSourceSelectionCriteriaSseKmsEncryptedObjectsToTerraform)(struct!.sseKmsEncryptedObjects),
  }
}

export interface S3BucketReplicationConfigurationRules {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#delete_marker_replication_status S3Bucket#delete_marker_replication_status}
  */
  readonly deleteMarkerReplicationStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#id S3Bucket#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#prefix S3Bucket#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#priority S3Bucket#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#status S3Bucket#status}
  */
  readonly status: string;
  /**
  * destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#destination S3Bucket#destination}
  */
  readonly destination: S3BucketReplicationConfigurationRulesDestination[];
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#filter S3Bucket#filter}
  */
  readonly filter?: S3BucketReplicationConfigurationRulesFilter[];
  /**
  * source_selection_criteria block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#source_selection_criteria S3Bucket#source_selection_criteria}
  */
  readonly sourceSelectionCriteria?: S3BucketReplicationConfigurationRulesSourceSelectionCriteria[];
}

function s3BucketReplicationConfigurationRulesToTerraform(struct?: S3BucketReplicationConfigurationRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delete_marker_replication_status: cdktf.stringToTerraform(struct!.deleteMarkerReplicationStatus),
    id: cdktf.stringToTerraform(struct!.id),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    priority: cdktf.numberToTerraform(struct!.priority),
    status: cdktf.stringToTerraform(struct!.status),
    destination: cdktf.listMapper(s3BucketReplicationConfigurationRulesDestinationToTerraform)(struct!.destination),
    filter: cdktf.listMapper(s3BucketReplicationConfigurationRulesFilterToTerraform)(struct!.filter),
    source_selection_criteria: cdktf.listMapper(s3BucketReplicationConfigurationRulesSourceSelectionCriteriaToTerraform)(struct!.sourceSelectionCriteria),
  }
}

export interface S3BucketReplicationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#role S3Bucket#role}
  */
  readonly role: string;
  /**
  * rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#rules S3Bucket#rules}
  */
  readonly rules: S3BucketReplicationConfigurationRules[];
}

function s3BucketReplicationConfigurationToTerraform(struct?: S3BucketReplicationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    role: cdktf.stringToTerraform(struct!.role),
    rules: cdktf.listMapper(s3BucketReplicationConfigurationRulesToTerraform)(struct!.rules),
  }
}

export interface S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#kms_master_key_id S3Bucket#kms_master_key_id}
  */
  readonly kmsMasterKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#sse_algorithm S3Bucket#sse_algorithm}
  */
  readonly sseAlgorithm: string;
}

function s3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultToTerraform(struct?: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_master_key_id: cdktf.stringToTerraform(struct!.kmsMasterKeyId),
    sse_algorithm: cdktf.stringToTerraform(struct!.sseAlgorithm),
  }
}

export interface S3BucketServerSideEncryptionConfigurationRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#bucket_key_enabled S3Bucket#bucket_key_enabled}
  */
  readonly bucketKeyEnabled?: boolean;
  /**
  * apply_server_side_encryption_by_default block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#apply_server_side_encryption_by_default S3Bucket#apply_server_side_encryption_by_default}
  */
  readonly applyServerSideEncryptionByDefault: S3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefault[];
}

function s3BucketServerSideEncryptionConfigurationRuleToTerraform(struct?: S3BucketServerSideEncryptionConfigurationRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_key_enabled: cdktf.booleanToTerraform(struct!.bucketKeyEnabled),
    apply_server_side_encryption_by_default: cdktf.listMapper(s3BucketServerSideEncryptionConfigurationRuleApplyServerSideEncryptionByDefaultToTerraform)(struct!.applyServerSideEncryptionByDefault),
  }
}

export interface S3BucketServerSideEncryptionConfiguration {
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#rule S3Bucket#rule}
  */
  readonly rule: S3BucketServerSideEncryptionConfigurationRule[];
}

function s3BucketServerSideEncryptionConfigurationToTerraform(struct?: S3BucketServerSideEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    rule: cdktf.listMapper(s3BucketServerSideEncryptionConfigurationRuleToTerraform)(struct!.rule),
  }
}

export interface S3BucketVersioning {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#enabled S3Bucket#enabled}
  */
  readonly enabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#mfa_delete S3Bucket#mfa_delete}
  */
  readonly mfaDelete?: boolean;
}

function s3BucketVersioningToTerraform(struct?: S3BucketVersioning): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    mfa_delete: cdktf.booleanToTerraform(struct!.mfaDelete),
  }
}

export interface S3BucketWebsite {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#error_document S3Bucket#error_document}
  */
  readonly errorDocument?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#index_document S3Bucket#index_document}
  */
  readonly indexDocument?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#redirect_all_requests_to S3Bucket#redirect_all_requests_to}
  */
  readonly redirectAllRequestsTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#routing_rules S3Bucket#routing_rules}
  */
  readonly routingRules?: string;
}

function s3BucketWebsiteToTerraform(struct?: S3BucketWebsite): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    error_document: cdktf.stringToTerraform(struct!.errorDocument),
    index_document: cdktf.stringToTerraform(struct!.indexDocument),
    redirect_all_requests_to: cdktf.stringToTerraform(struct!.redirectAllRequestsTo),
    routing_rules: cdktf.stringToTerraform(struct!.routingRules),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html aws_s3_bucket}
*/
export class S3Bucket extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket.html aws_s3_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3BucketConfig = {}
  */
  public constructor(scope: Construct, id: string, config: S3BucketConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accelerationStatus = config.accelerationStatus;
    this._acl = config.acl;
    this._bucket = config.bucket;
    this._bucketPrefix = config.bucketPrefix;
    this._forceDestroy = config.forceDestroy;
    this._hostedZoneId = config.hostedZoneId;
    this._policy = config.policy;
    this._requestPayer = config.requestPayer;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._websiteDomain = config.websiteDomain;
    this._websiteEndpoint = config.websiteEndpoint;
    this._corsRule = config.corsRule;
    this._grant = config.grant;
    this._lifecycleRule = config.lifecycleRule;
    this._logging = config.logging;
    this._objectLockConfiguration = config.objectLockConfiguration;
    this._replicationConfiguration = config.replicationConfiguration;
    this._serverSideEncryptionConfiguration = config.serverSideEncryptionConfiguration;
    this._versioning = config.versioning;
    this._website = config.website;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acceleration_status - computed: true, optional: true, required: false
  private _accelerationStatus?: string;
  public get accelerationStatus() {
    return this.getStringAttribute('acceleration_status');
  }
  public set accelerationStatus(value: string) {
    this._accelerationStatus = value;
  }
  public resetAccelerationStatus() {
    this._accelerationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accelerationStatusInput() {
    return this._accelerationStatus
  }

  // acl - computed: false, optional: true, required: false
  private _acl?: string;
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string ) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl
  }

  // arn - computed: true, optional: true, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string;
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket
  }

  // bucket_domain_name - computed: true, optional: false, required: false
  public get bucketDomainName() {
    return this.getStringAttribute('bucket_domain_name');
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string;
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string ) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix
  }

  // bucket_regional_domain_name - computed: true, optional: false, required: false
  public get bucketRegionalDomainName() {
    return this.getStringAttribute('bucket_regional_domain_name');
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean;
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean ) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy
  }

  // hosted_zone_id - computed: true, optional: true, required: false
  private _hostedZoneId?: string;
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }
  public set hostedZoneId(value: string) {
    this._hostedZoneId = value;
  }
  public resetHostedZoneId() {
    this._hostedZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedZoneIdInput() {
    return this._hostedZoneId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string;
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string ) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // request_payer - computed: true, optional: true, required: false
  private _requestPayer?: string;
  public get requestPayer() {
    return this.getStringAttribute('request_payer');
  }
  public set requestPayer(value: string) {
    this._requestPayer = value;
  }
  public resetRequestPayer() {
    this._requestPayer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPayerInput() {
    return this._requestPayer
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }
  public get tagsAll(): { [key: string]: string } {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // website_domain - computed: true, optional: true, required: false
  private _websiteDomain?: string;
  public get websiteDomain() {
    return this.getStringAttribute('website_domain');
  }
  public set websiteDomain(value: string) {
    this._websiteDomain = value;
  }
  public resetWebsiteDomain() {
    this._websiteDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteDomainInput() {
    return this._websiteDomain
  }

  // website_endpoint - computed: true, optional: true, required: false
  private _websiteEndpoint?: string;
  public get websiteEndpoint() {
    return this.getStringAttribute('website_endpoint');
  }
  public set websiteEndpoint(value: string) {
    this._websiteEndpoint = value;
  }
  public resetWebsiteEndpoint() {
    this._websiteEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteEndpointInput() {
    return this._websiteEndpoint
  }

  // cors_rule - computed: false, optional: true, required: false
  private _corsRule?: S3BucketCorsRule[];
  public get corsRule() {
    return this.interpolationForAttribute('cors_rule') as any;
  }
  public set corsRule(value: S3BucketCorsRule[] ) {
    this._corsRule = value;
  }
  public resetCorsRule() {
    this._corsRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsRuleInput() {
    return this._corsRule
  }

  // grant - computed: false, optional: true, required: false
  private _grant?: S3BucketGrant[];
  public get grant() {
    return this.interpolationForAttribute('grant') as any;
  }
  public set grant(value: S3BucketGrant[] ) {
    this._grant = value;
  }
  public resetGrant() {
    this._grant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantInput() {
    return this._grant
  }

  // lifecycle_rule - computed: false, optional: true, required: false
  private _lifecycleRule?: S3BucketLifecycleRule[];
  public get lifecycleRule() {
    return this.interpolationForAttribute('lifecycle_rule') as any;
  }
  public set lifecycleRule(value: S3BucketLifecycleRule[] ) {
    this._lifecycleRule = value;
  }
  public resetLifecycleRule() {
    this._lifecycleRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleRuleInput() {
    return this._lifecycleRule
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: S3BucketLogging[];
  public get logging() {
    return this.interpolationForAttribute('logging') as any;
  }
  public set logging(value: S3BucketLogging[] ) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging
  }

  // object_lock_configuration - computed: false, optional: true, required: false
  private _objectLockConfiguration?: S3BucketObjectLockConfiguration[];
  public get objectLockConfiguration() {
    return this.interpolationForAttribute('object_lock_configuration') as any;
  }
  public set objectLockConfiguration(value: S3BucketObjectLockConfiguration[] ) {
    this._objectLockConfiguration = value;
  }
  public resetObjectLockConfiguration() {
    this._objectLockConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLockConfigurationInput() {
    return this._objectLockConfiguration
  }

  // replication_configuration - computed: false, optional: true, required: false
  private _replicationConfiguration?: S3BucketReplicationConfiguration[];
  public get replicationConfiguration() {
    return this.interpolationForAttribute('replication_configuration') as any;
  }
  public set replicationConfiguration(value: S3BucketReplicationConfiguration[] ) {
    this._replicationConfiguration = value;
  }
  public resetReplicationConfiguration() {
    this._replicationConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationConfigurationInput() {
    return this._replicationConfiguration
  }

  // server_side_encryption_configuration - computed: false, optional: true, required: false
  private _serverSideEncryptionConfiguration?: S3BucketServerSideEncryptionConfiguration[];
  public get serverSideEncryptionConfiguration() {
    return this.interpolationForAttribute('server_side_encryption_configuration') as any;
  }
  public set serverSideEncryptionConfiguration(value: S3BucketServerSideEncryptionConfiguration[] ) {
    this._serverSideEncryptionConfiguration = value;
  }
  public resetServerSideEncryptionConfiguration() {
    this._serverSideEncryptionConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionConfigurationInput() {
    return this._serverSideEncryptionConfiguration
  }

  // versioning - computed: false, optional: true, required: false
  private _versioning?: S3BucketVersioning[];
  public get versioning() {
    return this.interpolationForAttribute('versioning') as any;
  }
  public set versioning(value: S3BucketVersioning[] ) {
    this._versioning = value;
  }
  public resetVersioning() {
    this._versioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versioningInput() {
    return this._versioning
  }

  // website - computed: false, optional: true, required: false
  private _website?: S3BucketWebsite[];
  public get website() {
    return this.interpolationForAttribute('website') as any;
  }
  public set website(value: S3BucketWebsite[] ) {
    this._website = value;
  }
  public resetWebsite() {
    this._website = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteInput() {
    return this._website
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acceleration_status: cdktf.stringToTerraform(this._accelerationStatus),
      acl: cdktf.stringToTerraform(this._acl),
      bucket: cdktf.stringToTerraform(this._bucket),
      bucket_prefix: cdktf.stringToTerraform(this._bucketPrefix),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      hosted_zone_id: cdktf.stringToTerraform(this._hostedZoneId),
      policy: cdktf.stringToTerraform(this._policy),
      request_payer: cdktf.stringToTerraform(this._requestPayer),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      website_domain: cdktf.stringToTerraform(this._websiteDomain),
      website_endpoint: cdktf.stringToTerraform(this._websiteEndpoint),
      cors_rule: cdktf.listMapper(s3BucketCorsRuleToTerraform)(this._corsRule),
      grant: cdktf.listMapper(s3BucketGrantToTerraform)(this._grant),
      lifecycle_rule: cdktf.listMapper(s3BucketLifecycleRuleToTerraform)(this._lifecycleRule),
      logging: cdktf.listMapper(s3BucketLoggingToTerraform)(this._logging),
      object_lock_configuration: cdktf.listMapper(s3BucketObjectLockConfigurationToTerraform)(this._objectLockConfiguration),
      replication_configuration: cdktf.listMapper(s3BucketReplicationConfigurationToTerraform)(this._replicationConfiguration),
      server_side_encryption_configuration: cdktf.listMapper(s3BucketServerSideEncryptionConfigurationToTerraform)(this._serverSideEncryptionConfiguration),
      versioning: cdktf.listMapper(s3BucketVersioningToTerraform)(this._versioning),
      website: cdktf.listMapper(s3BucketWebsiteToTerraform)(this._website),
    };
  }
}
