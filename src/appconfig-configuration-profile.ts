// https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppconfigConfigurationProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html#application_id AppconfigConfigurationProfile#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html#description AppconfigConfigurationProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html#location_uri AppconfigConfigurationProfile#location_uri}
  */
  readonly locationUri: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html#name AppconfigConfigurationProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html#retrieval_role_arn AppconfigConfigurationProfile#retrieval_role_arn}
  */
  readonly retrievalRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html#tags AppconfigConfigurationProfile#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html#tags_all AppconfigConfigurationProfile#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * validator block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html#validator AppconfigConfigurationProfile#validator}
  */
  readonly validator?: AppconfigConfigurationProfileValidator[];
}
export interface AppconfigConfigurationProfileValidator {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html#content AppconfigConfigurationProfile#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html#type AppconfigConfigurationProfile#type}
  */
  readonly type: string;
}

function appconfigConfigurationProfileValidatorToTerraform(struct?: AppconfigConfigurationProfileValidator): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html aws_appconfig_configuration_profile}
*/
export class AppconfigConfigurationProfile extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html aws_appconfig_configuration_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppconfigConfigurationProfileConfig
  */
  public constructor(scope: Construct, id: string, config: AppconfigConfigurationProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appconfig_configuration_profile',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationId = config.applicationId;
    this._description = config.description;
    this._locationUri = config.locationUri;
    this._name = config.name;
    this._retrievalRoleArn = config.retrievalRoleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._validator = config.validator;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId: string;
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // configuration_profile_id - computed: true, optional: false, required: false
  public get configurationProfileId() {
    return this.getStringAttribute('configuration_profile_id');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location_uri - computed: false, optional: false, required: true
  private _locationUri: string;
  public get locationUri() {
    return this.getStringAttribute('location_uri');
  }
  public set locationUri(value: string) {
    this._locationUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationUriInput() {
    return this._locationUri
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

  // retrieval_role_arn - computed: false, optional: true, required: false
  private _retrievalRoleArn?: string;
  public get retrievalRoleArn() {
    return this.getStringAttribute('retrieval_role_arn');
  }
  public set retrievalRoleArn(value: string ) {
    this._retrievalRoleArn = value;
  }
  public resetRetrievalRoleArn() {
    this._retrievalRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrievalRoleArnInput() {
    return this._retrievalRoleArn
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

  // validator - computed: false, optional: true, required: false
  private _validator?: AppconfigConfigurationProfileValidator[];
  public get validator() {
    return this.interpolationForAttribute('validator') as any;
  }
  public set validator(value: AppconfigConfigurationProfileValidator[] ) {
    this._validator = value;
  }
  public resetValidator() {
    this._validator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validatorInput() {
    return this._validator
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      description: cdktf.stringToTerraform(this._description),
      location_uri: cdktf.stringToTerraform(this._locationUri),
      name: cdktf.stringToTerraform(this._name),
      retrieval_role_arn: cdktf.stringToTerraform(this._retrievalRoleArn),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      validator: cdktf.listMapper(appconfigConfigurationProfileValidatorToTerraform)(this._validator),
    };
  }
}
