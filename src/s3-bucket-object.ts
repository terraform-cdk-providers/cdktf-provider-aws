// https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3BucketObjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#acl S3BucketObject#acl}
  */
  readonly acl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#bucket S3BucketObject#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#bucket_key_enabled S3BucketObject#bucket_key_enabled}
  */
  readonly bucketKeyEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#cache_control S3BucketObject#cache_control}
  */
  readonly cacheControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#content S3BucketObject#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#content_base64 S3BucketObject#content_base64}
  */
  readonly contentBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#content_disposition S3BucketObject#content_disposition}
  */
  readonly contentDisposition?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#content_encoding S3BucketObject#content_encoding}
  */
  readonly contentEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#content_language S3BucketObject#content_language}
  */
  readonly contentLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#content_type S3BucketObject#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#etag S3BucketObject#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#force_destroy S3BucketObject#force_destroy}
  */
  readonly forceDestroy?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#key S3BucketObject#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#kms_key_id S3BucketObject#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#metadata S3BucketObject#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#object_lock_legal_hold_status S3BucketObject#object_lock_legal_hold_status}
  */
  readonly objectLockLegalHoldStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#object_lock_mode S3BucketObject#object_lock_mode}
  */
  readonly objectLockMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#object_lock_retain_until_date S3BucketObject#object_lock_retain_until_date}
  */
  readonly objectLockRetainUntilDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#server_side_encryption S3BucketObject#server_side_encryption}
  */
  readonly serverSideEncryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#source S3BucketObject#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#source_hash S3BucketObject#source_hash}
  */
  readonly sourceHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#storage_class S3BucketObject#storage_class}
  */
  readonly storageClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#tags S3BucketObject#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#tags_all S3BucketObject#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html#website_redirect S3BucketObject#website_redirect}
  */
  readonly websiteRedirect?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html aws_s3_bucket_object}
*/
export class S3BucketObject extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_object.html aws_s3_bucket_object} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3BucketObjectConfig
  */
  public constructor(scope: Construct, id: string, config: S3BucketObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket_object',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._acl = config.acl;
    this._bucket = config.bucket;
    this._bucketKeyEnabled = config.bucketKeyEnabled;
    this._cacheControl = config.cacheControl;
    this._content = config.content;
    this._contentBase64 = config.contentBase64;
    this._contentDisposition = config.contentDisposition;
    this._contentEncoding = config.contentEncoding;
    this._contentLanguage = config.contentLanguage;
    this._contentType = config.contentType;
    this._etag = config.etag;
    this._forceDestroy = config.forceDestroy;
    this._key = config.key;
    this._kmsKeyId = config.kmsKeyId;
    this._metadata = config.metadata;
    this._objectLockLegalHoldStatus = config.objectLockLegalHoldStatus;
    this._objectLockMode = config.objectLockMode;
    this._objectLockRetainUntilDate = config.objectLockRetainUntilDate;
    this._serverSideEncryption = config.serverSideEncryption;
    this._source = config.source;
    this._sourceHash = config.sourceHash;
    this._storageClass = config.storageClass;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._websiteRedirect = config.websiteRedirect;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // bucket - computed: false, optional: false, required: true
  private _bucket: string;
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket
  }

  // bucket_key_enabled - computed: true, optional: true, required: false
  private _bucketKeyEnabled?: boolean;
  public get bucketKeyEnabled() {
    return this.getBooleanAttribute('bucket_key_enabled');
  }
  public set bucketKeyEnabled(value: boolean) {
    this._bucketKeyEnabled = value;
  }
  public resetBucketKeyEnabled() {
    this._bucketKeyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketKeyEnabledInput() {
    return this._bucketKeyEnabled
  }

  // cache_control - computed: false, optional: true, required: false
  private _cacheControl?: string;
  public get cacheControl() {
    return this.getStringAttribute('cache_control');
  }
  public set cacheControl(value: string ) {
    this._cacheControl = value;
  }
  public resetCacheControl() {
    this._cacheControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheControlInput() {
    return this._cacheControl
  }

  // content - computed: false, optional: true, required: false
  private _content?: string;
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string ) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content
  }

  // content_base64 - computed: false, optional: true, required: false
  private _contentBase64?: string;
  public get contentBase64() {
    return this.getStringAttribute('content_base64');
  }
  public set contentBase64(value: string ) {
    this._contentBase64 = value;
  }
  public resetContentBase64() {
    this._contentBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentBase64Input() {
    return this._contentBase64
  }

  // content_disposition - computed: false, optional: true, required: false
  private _contentDisposition?: string;
  public get contentDisposition() {
    return this.getStringAttribute('content_disposition');
  }
  public set contentDisposition(value: string ) {
    this._contentDisposition = value;
  }
  public resetContentDisposition() {
    this._contentDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDispositionInput() {
    return this._contentDisposition
  }

  // content_encoding - computed: false, optional: true, required: false
  private _contentEncoding?: string;
  public get contentEncoding() {
    return this.getStringAttribute('content_encoding');
  }
  public set contentEncoding(value: string ) {
    this._contentEncoding = value;
  }
  public resetContentEncoding() {
    this._contentEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentEncodingInput() {
    return this._contentEncoding
  }

  // content_language - computed: false, optional: true, required: false
  private _contentLanguage?: string;
  public get contentLanguage() {
    return this.getStringAttribute('content_language');
  }
  public set contentLanguage(value: string ) {
    this._contentLanguage = value;
  }
  public resetContentLanguage() {
    this._contentLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLanguageInput() {
    return this._contentLanguage
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string;
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType
  }

  // etag - computed: true, optional: true, required: false
  private _etag?: string;
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: false, optional: false, required: true
  private _key: string;
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string };
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: { [key: string]: string } ) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // object_lock_legal_hold_status - computed: false, optional: true, required: false
  private _objectLockLegalHoldStatus?: string;
  public get objectLockLegalHoldStatus() {
    return this.getStringAttribute('object_lock_legal_hold_status');
  }
  public set objectLockLegalHoldStatus(value: string ) {
    this._objectLockLegalHoldStatus = value;
  }
  public resetObjectLockLegalHoldStatus() {
    this._objectLockLegalHoldStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLockLegalHoldStatusInput() {
    return this._objectLockLegalHoldStatus
  }

  // object_lock_mode - computed: false, optional: true, required: false
  private _objectLockMode?: string;
  public get objectLockMode() {
    return this.getStringAttribute('object_lock_mode');
  }
  public set objectLockMode(value: string ) {
    this._objectLockMode = value;
  }
  public resetObjectLockMode() {
    this._objectLockMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLockModeInput() {
    return this._objectLockMode
  }

  // object_lock_retain_until_date - computed: false, optional: true, required: false
  private _objectLockRetainUntilDate?: string;
  public get objectLockRetainUntilDate() {
    return this.getStringAttribute('object_lock_retain_until_date');
  }
  public set objectLockRetainUntilDate(value: string ) {
    this._objectLockRetainUntilDate = value;
  }
  public resetObjectLockRetainUntilDate() {
    this._objectLockRetainUntilDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLockRetainUntilDateInput() {
    return this._objectLockRetainUntilDate
  }

  // server_side_encryption - computed: true, optional: true, required: false
  private _serverSideEncryption?: string;
  public get serverSideEncryption() {
    return this.getStringAttribute('server_side_encryption');
  }
  public set serverSideEncryption(value: string) {
    this._serverSideEncryption = value;
  }
  public resetServerSideEncryption() {
    this._serverSideEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionInput() {
    return this._serverSideEncryption
  }

  // source - computed: false, optional: true, required: false
  private _source?: string;
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string ) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source
  }

  // source_hash - computed: false, optional: true, required: false
  private _sourceHash?: string;
  public get sourceHash() {
    return this.getStringAttribute('source_hash');
  }
  public set sourceHash(value: string ) {
    this._sourceHash = value;
  }
  public resetSourceHash() {
    this._sourceHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceHashInput() {
    return this._sourceHash
  }

  // storage_class - computed: true, optional: true, required: false
  private _storageClass?: string;
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass
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

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // website_redirect - computed: false, optional: true, required: false
  private _websiteRedirect?: string;
  public get websiteRedirect() {
    return this.getStringAttribute('website_redirect');
  }
  public set websiteRedirect(value: string ) {
    this._websiteRedirect = value;
  }
  public resetWebsiteRedirect() {
    this._websiteRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteRedirectInput() {
    return this._websiteRedirect
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl: cdktf.stringToTerraform(this._acl),
      bucket: cdktf.stringToTerraform(this._bucket),
      bucket_key_enabled: cdktf.booleanToTerraform(this._bucketKeyEnabled),
      cache_control: cdktf.stringToTerraform(this._cacheControl),
      content: cdktf.stringToTerraform(this._content),
      content_base64: cdktf.stringToTerraform(this._contentBase64),
      content_disposition: cdktf.stringToTerraform(this._contentDisposition),
      content_encoding: cdktf.stringToTerraform(this._contentEncoding),
      content_language: cdktf.stringToTerraform(this._contentLanguage),
      content_type: cdktf.stringToTerraform(this._contentType),
      etag: cdktf.stringToTerraform(this._etag),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      key: cdktf.stringToTerraform(this._key),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      metadata: cdktf.hashMapper(cdktf.anyToTerraform)(this._metadata),
      object_lock_legal_hold_status: cdktf.stringToTerraform(this._objectLockLegalHoldStatus),
      object_lock_mode: cdktf.stringToTerraform(this._objectLockMode),
      object_lock_retain_until_date: cdktf.stringToTerraform(this._objectLockRetainUntilDate),
      server_side_encryption: cdktf.stringToTerraform(this._serverSideEncryption),
      source: cdktf.stringToTerraform(this._source),
      source_hash: cdktf.stringToTerraform(this._sourceHash),
      storage_class: cdktf.stringToTerraform(this._storageClass),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      website_redirect: cdktf.stringToTerraform(this._websiteRedirect),
    };
  }
}
