// https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicecatalogProvisionedProductConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#accept_language ServicecatalogProvisionedProduct#accept_language}
  */
  readonly acceptLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#ignore_errors ServicecatalogProvisionedProduct#ignore_errors}
  */
  readonly ignoreErrors?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#name ServicecatalogProvisionedProduct#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#notification_arns ServicecatalogProvisionedProduct#notification_arns}
  */
  readonly notificationArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#path_id ServicecatalogProvisionedProduct#path_id}
  */
  readonly pathId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#path_name ServicecatalogProvisionedProduct#path_name}
  */
  readonly pathName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#product_id ServicecatalogProvisionedProduct#product_id}
  */
  readonly productId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#product_name ServicecatalogProvisionedProduct#product_name}
  */
  readonly productName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#provisioning_artifact_id ServicecatalogProvisionedProduct#provisioning_artifact_id}
  */
  readonly provisioningArtifactId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#provisioning_artifact_name ServicecatalogProvisionedProduct#provisioning_artifact_name}
  */
  readonly provisioningArtifactName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#retain_physical_resources ServicecatalogProvisionedProduct#retain_physical_resources}
  */
  readonly retainPhysicalResources?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#tags ServicecatalogProvisionedProduct#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#tags_all ServicecatalogProvisionedProduct#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * provisioning_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#provisioning_parameters ServicecatalogProvisionedProduct#provisioning_parameters}
  */
  readonly provisioningParameters?: ServicecatalogProvisionedProductProvisioningParameters[];
  /**
  * stack_set_provisioning_preferences block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#stack_set_provisioning_preferences ServicecatalogProvisionedProduct#stack_set_provisioning_preferences}
  */
  readonly stackSetProvisioningPreferences?: ServicecatalogProvisionedProductStackSetProvisioningPreferences[];
}
export interface ServicecatalogProvisionedProductProvisioningParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#key ServicecatalogProvisionedProduct#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#use_previous_value ServicecatalogProvisionedProduct#use_previous_value}
  */
  readonly usePreviousValue?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#value ServicecatalogProvisionedProduct#value}
  */
  readonly value?: string;
}

function servicecatalogProvisionedProductProvisioningParametersToTerraform(struct?: ServicecatalogProvisionedProductProvisioningParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    use_previous_value: cdktf.booleanToTerraform(struct!.usePreviousValue),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ServicecatalogProvisionedProductStackSetProvisioningPreferences {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#accounts ServicecatalogProvisionedProduct#accounts}
  */
  readonly accounts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#failure_tolerance_count ServicecatalogProvisionedProduct#failure_tolerance_count}
  */
  readonly failureToleranceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#failure_tolerance_percentage ServicecatalogProvisionedProduct#failure_tolerance_percentage}
  */
  readonly failureTolerancePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#max_concurrency_count ServicecatalogProvisionedProduct#max_concurrency_count}
  */
  readonly maxConcurrencyCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#max_concurrency_percentage ServicecatalogProvisionedProduct#max_concurrency_percentage}
  */
  readonly maxConcurrencyPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#regions ServicecatalogProvisionedProduct#regions}
  */
  readonly regions?: string[];
}

function servicecatalogProvisionedProductStackSetProvisioningPreferencesToTerraform(struct?: ServicecatalogProvisionedProductStackSetProvisioningPreferences): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    accounts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.accounts),
    failure_tolerance_count: cdktf.numberToTerraform(struct!.failureToleranceCount),
    failure_tolerance_percentage: cdktf.numberToTerraform(struct!.failureTolerancePercentage),
    max_concurrency_count: cdktf.numberToTerraform(struct!.maxConcurrencyCount),
    max_concurrency_percentage: cdktf.numberToTerraform(struct!.maxConcurrencyPercentage),
    regions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.regions),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html aws_servicecatalog_provisioned_product}
*/
export class ServicecatalogProvisionedProduct extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html aws_servicecatalog_provisioned_product} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicecatalogProvisionedProductConfig
  */
  public constructor(scope: Construct, id: string, config: ServicecatalogProvisionedProductConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_servicecatalog_provisioned_product',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._acceptLanguage = config.acceptLanguage;
    this._ignoreErrors = config.ignoreErrors;
    this._name = config.name;
    this._notificationArns = config.notificationArns;
    this._pathId = config.pathId;
    this._pathName = config.pathName;
    this._productId = config.productId;
    this._productName = config.productName;
    this._provisioningArtifactId = config.provisioningArtifactId;
    this._provisioningArtifactName = config.provisioningArtifactName;
    this._retainPhysicalResources = config.retainPhysicalResources;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._provisioningParameters = config.provisioningParameters;
    this._stackSetProvisioningPreferences = config.stackSetProvisioningPreferences;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_language - computed: false, optional: true, required: false
  private _acceptLanguage?: string;
  public get acceptLanguage() {
    return this.getStringAttribute('accept_language');
  }
  public set acceptLanguage(value: string ) {
    this._acceptLanguage = value;
  }
  public resetAcceptLanguage() {
    this._acceptLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLanguageInput() {
    return this._acceptLanguage
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cloudwatch_dashboard_names - computed: true, optional: false, required: false
  public get cloudwatchDashboardNames() {
    return this.getListAttribute('cloudwatch_dashboard_names');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean;
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean ) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors
  }

  // last_provisioning_record_id - computed: true, optional: false, required: false
  public get lastProvisioningRecordId() {
    return this.getStringAttribute('last_provisioning_record_id');
  }

  // last_record_id - computed: true, optional: false, required: false
  public get lastRecordId() {
    return this.getStringAttribute('last_record_id');
  }

  // last_successful_provisioning_record_id - computed: true, optional: false, required: false
  public get lastSuccessfulProvisioningRecordId() {
    return this.getStringAttribute('last_successful_provisioning_record_id');
  }

  // launch_role_arn - computed: true, optional: false, required: false
  public get launchRoleArn() {
    return this.getStringAttribute('launch_role_arn');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // notification_arns - computed: false, optional: true, required: false
  private _notificationArns?: string[];
  public get notificationArns() {
    return this.getListAttribute('notification_arns');
  }
  public set notificationArns(value: string[] ) {
    this._notificationArns = value;
  }
  public resetNotificationArns() {
    this._notificationArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationArnsInput() {
    return this._notificationArns
  }

  // path_id - computed: true, optional: true, required: false
  private _pathId?: string;
  public get pathId() {
    return this.getStringAttribute('path_id');
  }
  public set pathId(value: string) {
    this._pathId = value;
  }
  public resetPathId() {
    this._pathId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathIdInput() {
    return this._pathId
  }

  // path_name - computed: false, optional: true, required: false
  private _pathName?: string;
  public get pathName() {
    return this.getStringAttribute('path_name');
  }
  public set pathName(value: string ) {
    this._pathName = value;
  }
  public resetPathName() {
    this._pathName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathNameInput() {
    return this._pathName
  }

  // product_id - computed: true, optional: true, required: false
  private _productId?: string;
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  public resetProductId() {
    this._productId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId
  }

  // product_name - computed: false, optional: true, required: false
  private _productName?: string;
  public get productName() {
    return this.getStringAttribute('product_name');
  }
  public set productName(value: string ) {
    this._productName = value;
  }
  public resetProductName() {
    this._productName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName
  }

  // provisioning_artifact_id - computed: true, optional: true, required: false
  private _provisioningArtifactId?: string;
  public get provisioningArtifactId() {
    return this.getStringAttribute('provisioning_artifact_id');
  }
  public set provisioningArtifactId(value: string) {
    this._provisioningArtifactId = value;
  }
  public resetProvisioningArtifactId() {
    this._provisioningArtifactId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningArtifactIdInput() {
    return this._provisioningArtifactId
  }

  // provisioning_artifact_name - computed: false, optional: true, required: false
  private _provisioningArtifactName?: string;
  public get provisioningArtifactName() {
    return this.getStringAttribute('provisioning_artifact_name');
  }
  public set provisioningArtifactName(value: string ) {
    this._provisioningArtifactName = value;
  }
  public resetProvisioningArtifactName() {
    this._provisioningArtifactName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningArtifactNameInput() {
    return this._provisioningArtifactName
  }

  // retain_physical_resources - computed: false, optional: true, required: false
  private _retainPhysicalResources?: boolean;
  public get retainPhysicalResources() {
    return this.getBooleanAttribute('retain_physical_resources');
  }
  public set retainPhysicalResources(value: boolean ) {
    this._retainPhysicalResources = value;
  }
  public resetRetainPhysicalResources() {
    this._retainPhysicalResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainPhysicalResourcesInput() {
    return this._retainPhysicalResources
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // provisioning_parameters - computed: false, optional: true, required: false
  private _provisioningParameters?: ServicecatalogProvisionedProductProvisioningParameters[];
  public get provisioningParameters() {
    return this.interpolationForAttribute('provisioning_parameters') as any;
  }
  public set provisioningParameters(value: ServicecatalogProvisionedProductProvisioningParameters[] ) {
    this._provisioningParameters = value;
  }
  public resetProvisioningParameters() {
    this._provisioningParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningParametersInput() {
    return this._provisioningParameters
  }

  // stack_set_provisioning_preferences - computed: false, optional: true, required: false
  private _stackSetProvisioningPreferences?: ServicecatalogProvisionedProductStackSetProvisioningPreferences[];
  public get stackSetProvisioningPreferences() {
    return this.interpolationForAttribute('stack_set_provisioning_preferences') as any;
  }
  public set stackSetProvisioningPreferences(value: ServicecatalogProvisionedProductStackSetProvisioningPreferences[] ) {
    this._stackSetProvisioningPreferences = value;
  }
  public resetStackSetProvisioningPreferences() {
    this._stackSetProvisioningPreferences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackSetProvisioningPreferencesInput() {
    return this._stackSetProvisioningPreferences
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_language: cdktf.stringToTerraform(this._acceptLanguage),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      name: cdktf.stringToTerraform(this._name),
      notification_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._notificationArns),
      path_id: cdktf.stringToTerraform(this._pathId),
      path_name: cdktf.stringToTerraform(this._pathName),
      product_id: cdktf.stringToTerraform(this._productId),
      product_name: cdktf.stringToTerraform(this._productName),
      provisioning_artifact_id: cdktf.stringToTerraform(this._provisioningArtifactId),
      provisioning_artifact_name: cdktf.stringToTerraform(this._provisioningArtifactName),
      retain_physical_resources: cdktf.booleanToTerraform(this._retainPhysicalResources),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      provisioning_parameters: cdktf.listMapper(servicecatalogProvisionedProductProvisioningParametersToTerraform)(this._provisioningParameters),
      stack_set_provisioning_preferences: cdktf.listMapper(servicecatalogProvisionedProductStackSetProvisioningPreferencesToTerraform)(this._stackSetProvisioningPreferences),
    };
  }
}
