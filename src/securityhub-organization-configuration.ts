// https://www.terraform.io/docs/providers/aws/r/securityhub_organization_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityhubOrganizationConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_organization_configuration.html#auto_enable SecurityhubOrganizationConfiguration#auto_enable}
  */
  readonly autoEnable: boolean;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/securityhub_organization_configuration.html aws_securityhub_organization_configuration}
*/
export class SecurityhubOrganizationConfiguration extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/securityhub_organization_configuration.html aws_securityhub_organization_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityhubOrganizationConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityhubOrganizationConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_securityhub_organization_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoEnable = config.autoEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_enable - computed: false, optional: false, required: true
  private _autoEnable: boolean;
  public get autoEnable() {
    return this.getBooleanAttribute('auto_enable');
  }
  public set autoEnable(value: boolean) {
    this._autoEnable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEnableInput() {
    return this._autoEnable
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_enable: cdktf.booleanToTerraform(this._autoEnable),
    };
  }
}
