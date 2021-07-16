// https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#app_network_access_type SagemakerDomain#app_network_access_type}
  */
  readonly appNetworkAccessType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#auth_mode SagemakerDomain#auth_mode}
  */
  readonly authMode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#domain_name SagemakerDomain#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#kms_key_id SagemakerDomain#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#subnet_ids SagemakerDomain#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#tags SagemakerDomain#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#tags_all SagemakerDomain#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#vpc_id SagemakerDomain#vpc_id}
  */
  readonly vpcId: string;
  /**
  * default_user_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#default_user_settings SagemakerDomain#default_user_settings}
  */
  readonly defaultUserSettings: SagemakerDomainDefaultUserSettings[];
  /**
  * retention_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#retention_policy SagemakerDomain#retention_policy}
  */
  readonly retentionPolicy?: SagemakerDomainRetentionPolicy[];
}
export interface SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#instance_type SagemakerDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
}

function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
  }
}

export interface SagemakerDomainDefaultUserSettingsJupyterServerAppSettings {
  /**
  * default_resource_spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#default_resource_spec SagemakerDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpec[];
}

function sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_resource_spec: cdktf.listMapper(sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform)(struct!.defaultResourceSpec),
  }
}

export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#app_image_config_name SagemakerDomain#app_image_config_name}
  */
  readonly appImageConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#image_name SagemakerDomain#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#image_version_number SagemakerDomain#image_version_number}
  */
  readonly imageVersionNumber?: number;
}

function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageToTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    app_image_config_name: cdktf.stringToTerraform(struct!.appImageConfigName),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    image_version_number: cdktf.numberToTerraform(struct!.imageVersionNumber),
  }
}

export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#instance_type SagemakerDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
}

function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
  }
}

export interface SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings {
  /**
  * custom_image block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#custom_image SagemakerDomain#custom_image}
  */
  readonly customImage?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage[];
  /**
  * default_resource_spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#default_resource_spec SagemakerDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec[];
}

function sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    custom_image: cdktf.listMapper(sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsCustomImageToTerraform)(struct!.customImage),
    default_resource_spec: cdktf.listMapper(sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform)(struct!.defaultResourceSpec),
  }
}

export interface SagemakerDomainDefaultUserSettingsSharingSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#notebook_output_option SagemakerDomain#notebook_output_option}
  */
  readonly notebookOutputOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#s3_kms_key_id SagemakerDomain#s3_kms_key_id}
  */
  readonly s3KmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#s3_output_path SagemakerDomain#s3_output_path}
  */
  readonly s3OutputPath?: string;
}

function sagemakerDomainDefaultUserSettingsSharingSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsSharingSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    notebook_output_option: cdktf.stringToTerraform(struct!.notebookOutputOption),
    s3_kms_key_id: cdktf.stringToTerraform(struct!.s3KmsKeyId),
    s3_output_path: cdktf.stringToTerraform(struct!.s3OutputPath),
  }
}

export interface SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#instance_type SagemakerDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#sagemaker_image_arn SagemakerDomain#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
}

function sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
  }
}

export interface SagemakerDomainDefaultUserSettingsTensorBoardAppSettings {
  /**
  * default_resource_spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#default_resource_spec SagemakerDomain#default_resource_spec}
  */
  readonly defaultResourceSpec?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpec[];
}

function sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_resource_spec: cdktf.listMapper(sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsDefaultResourceSpecToTerraform)(struct!.defaultResourceSpec),
  }
}

export interface SagemakerDomainDefaultUserSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#execution_role SagemakerDomain#execution_role}
  */
  readonly executionRole: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#security_groups SagemakerDomain#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * jupyter_server_app_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#jupyter_server_app_settings SagemakerDomain#jupyter_server_app_settings}
  */
  readonly jupyterServerAppSettings?: SagemakerDomainDefaultUserSettingsJupyterServerAppSettings[];
  /**
  * kernel_gateway_app_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#kernel_gateway_app_settings SagemakerDomain#kernel_gateway_app_settings}
  */
  readonly kernelGatewayAppSettings?: SagemakerDomainDefaultUserSettingsKernelGatewayAppSettings[];
  /**
  * sharing_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#sharing_settings SagemakerDomain#sharing_settings}
  */
  readonly sharingSettings?: SagemakerDomainDefaultUserSettingsSharingSettings[];
  /**
  * tensor_board_app_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#tensor_board_app_settings SagemakerDomain#tensor_board_app_settings}
  */
  readonly tensorBoardAppSettings?: SagemakerDomainDefaultUserSettingsTensorBoardAppSettings[];
}

function sagemakerDomainDefaultUserSettingsToTerraform(struct?: SagemakerDomainDefaultUserSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    execution_role: cdktf.stringToTerraform(struct!.executionRole),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
    jupyter_server_app_settings: cdktf.listMapper(sagemakerDomainDefaultUserSettingsJupyterServerAppSettingsToTerraform)(struct!.jupyterServerAppSettings),
    kernel_gateway_app_settings: cdktf.listMapper(sagemakerDomainDefaultUserSettingsKernelGatewayAppSettingsToTerraform)(struct!.kernelGatewayAppSettings),
    sharing_settings: cdktf.listMapper(sagemakerDomainDefaultUserSettingsSharingSettingsToTerraform)(struct!.sharingSettings),
    tensor_board_app_settings: cdktf.listMapper(sagemakerDomainDefaultUserSettingsTensorBoardAppSettingsToTerraform)(struct!.tensorBoardAppSettings),
  }
}

export interface SagemakerDomainRetentionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html#home_efs_file_system SagemakerDomain#home_efs_file_system}
  */
  readonly homeEfsFileSystem?: string;
}

function sagemakerDomainRetentionPolicyToTerraform(struct?: SagemakerDomainRetentionPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    home_efs_file_system: cdktf.stringToTerraform(struct!.homeEfsFileSystem),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html aws_sagemaker_domain}
*/
export class SagemakerDomain extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_domain.html aws_sagemaker_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerDomainConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_domain',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._appNetworkAccessType = config.appNetworkAccessType;
    this._authMode = config.authMode;
    this._domainName = config.domainName;
    this._kmsKeyId = config.kmsKeyId;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._vpcId = config.vpcId;
    this._defaultUserSettings = config.defaultUserSettings;
    this._retentionPolicy = config.retentionPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_network_access_type - computed: false, optional: true, required: false
  private _appNetworkAccessType?: string;
  public get appNetworkAccessType() {
    return this.getStringAttribute('app_network_access_type');
  }
  public set appNetworkAccessType(value: string ) {
    this._appNetworkAccessType = value;
  }
  public resetAppNetworkAccessType() {
    this._appNetworkAccessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appNetworkAccessTypeInput() {
    return this._appNetworkAccessType
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auth_mode - computed: false, optional: false, required: true
  private _authMode: string;
  public get authMode() {
    return this.getStringAttribute('auth_mode');
  }
  public set authMode(value: string) {
    this._authMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authModeInput() {
    return this._authMode
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName: string;
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName
  }

  // home_efs_file_system_id - computed: true, optional: false, required: false
  public get homeEfsFileSystemId() {
    return this.getStringAttribute('home_efs_file_system_id');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string ) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId
  }

  // single_sign_on_managed_application_instance_id - computed: true, optional: false, required: false
  public get singleSignOnManagedApplicationInstanceId() {
    return this.getStringAttribute('single_sign_on_managed_application_instance_id');
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds: string[];
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds
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

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId: string;
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId
  }

  // default_user_settings - computed: false, optional: false, required: true
  private _defaultUserSettings: SagemakerDomainDefaultUserSettings[];
  public get defaultUserSettings() {
    return this.interpolationForAttribute('default_user_settings') as any;
  }
  public set defaultUserSettings(value: SagemakerDomainDefaultUserSettings[]) {
    this._defaultUserSettings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUserSettingsInput() {
    return this._defaultUserSettings
  }

  // retention_policy - computed: false, optional: true, required: false
  private _retentionPolicy?: SagemakerDomainRetentionPolicy[];
  public get retentionPolicy() {
    return this.interpolationForAttribute('retention_policy') as any;
  }
  public set retentionPolicy(value: SagemakerDomainRetentionPolicy[] ) {
    this._retentionPolicy = value;
  }
  public resetRetentionPolicy() {
    this._retentionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyInput() {
    return this._retentionPolicy
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_network_access_type: cdktf.stringToTerraform(this._appNetworkAccessType),
      auth_mode: cdktf.stringToTerraform(this._authMode),
      domain_name: cdktf.stringToTerraform(this._domainName),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      default_user_settings: cdktf.listMapper(sagemakerDomainDefaultUserSettingsToTerraform)(this._defaultUserSettings),
      retention_policy: cdktf.listMapper(sagemakerDomainRetentionPolicyToTerraform)(this._retentionPolicy),
    };
  }
}
