// https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppconfigHostedConfigurationVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version.html#application_id AppconfigHostedConfigurationVersion#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version.html#configuration_profile_id AppconfigHostedConfigurationVersion#configuration_profile_id}
  */
  readonly configurationProfileId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version.html#content AppconfigHostedConfigurationVersion#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version.html#content_type AppconfigHostedConfigurationVersion#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version.html#description AppconfigHostedConfigurationVersion#description}
  */
  readonly description?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version.html aws_appconfig_hosted_configuration_version}
*/
export class AppconfigHostedConfigurationVersion extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version.html aws_appconfig_hosted_configuration_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppconfigHostedConfigurationVersionConfig
  */
  public constructor(scope: Construct, id: string, config: AppconfigHostedConfigurationVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appconfig_hosted_configuration_version',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationId = config.applicationId;
    this._configurationProfileId = config.configurationProfileId;
    this._content = config.content;
    this._contentType = config.contentType;
    this._description = config.description;
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

  // configuration_profile_id - computed: false, optional: false, required: true
  private _configurationProfileId: string;
  public get configurationProfileId() {
    return this.getStringAttribute('configuration_profile_id');
  }
  public set configurationProfileId(value: string) {
    this._configurationProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationProfileIdInput() {
    return this._configurationProfileId
  }

  // content - computed: false, optional: false, required: true
  private _content: string;
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType: string;
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType
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

  // version_number - computed: true, optional: false, required: false
  public get versionNumber() {
    return this.getNumberAttribute('version_number');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      configuration_profile_id: cdktf.stringToTerraform(this._configurationProfileId),
      content: cdktf.stringToTerraform(this._content),
      content_type: cdktf.stringToTerraform(this._contentType),
      description: cdktf.stringToTerraform(this._description),
    };
  }
}
