// https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GlueSecurityConfigurationConfig extends TerraformMetaArguments {
  readonly name: string;
  /** encryption_configuration block */
  readonly encryptionConfiguration: GlueSecurityConfigurationEncryptionConfiguration[];
}
export interface GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption {
  readonly cloudwatchEncryptionMode?: string;
  readonly kmsKeyArn?: string;
}
export interface GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption {
  readonly jobBookmarksEncryptionMode?: string;
  readonly kmsKeyArn?: string;
}
export interface GlueSecurityConfigurationEncryptionConfigurationS3Encryption {
  readonly kmsKeyArn?: string;
  readonly s3EncryptionMode?: string;
}
export interface GlueSecurityConfigurationEncryptionConfiguration {
  /** cloudwatch_encryption block */
  readonly cloudwatchEncryption: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption[];
  /** job_bookmarks_encryption block */
  readonly jobBookmarksEncryption: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption[];
  /** s3_encryption block */
  readonly s3Encryption: GlueSecurityConfigurationEncryptionConfigurationS3Encryption[];
}

// Resource

export class GlueSecurityConfiguration extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GlueSecurityConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_security_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._encryptionConfiguration = config.encryptionConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // encryption_configuration - computed: false, optional: false, required: true
  private _encryptionConfiguration: GlueSecurityConfigurationEncryptionConfiguration[];
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public set encryptionConfiguration(value: GlueSecurityConfigurationEncryptionConfiguration[]) {
    this._encryptionConfiguration = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      encryption_configuration: this._encryptionConfiguration,
    };
  }
}
