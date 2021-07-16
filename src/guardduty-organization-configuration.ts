// https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GuarddutyOrganizationConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration.html#auto_enable GuarddutyOrganizationConfiguration#auto_enable}
  */
  readonly autoEnable: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration.html#detector_id GuarddutyOrganizationConfiguration#detector_id}
  */
  readonly detectorId: string;
  /**
  * datasources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration.html#datasources GuarddutyOrganizationConfiguration#datasources}
  */
  readonly datasources?: GuarddutyOrganizationConfigurationDatasources[];
}
export interface GuarddutyOrganizationConfigurationDatasourcesS3Logs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration.html#auto_enable GuarddutyOrganizationConfiguration#auto_enable}
  */
  readonly autoEnable: boolean;
}

function guarddutyOrganizationConfigurationDatasourcesS3LogsToTerraform(struct?: GuarddutyOrganizationConfigurationDatasourcesS3Logs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auto_enable: cdktf.booleanToTerraform(struct!.autoEnable),
  }
}

export interface GuarddutyOrganizationConfigurationDatasources {
  /**
  * s3_logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration.html#s3_logs GuarddutyOrganizationConfiguration#s3_logs}
  */
  readonly s3Logs?: GuarddutyOrganizationConfigurationDatasourcesS3Logs[];
}

function guarddutyOrganizationConfigurationDatasourcesToTerraform(struct?: GuarddutyOrganizationConfigurationDatasources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_logs: cdktf.listMapper(guarddutyOrganizationConfigurationDatasourcesS3LogsToTerraform)(struct!.s3Logs),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration.html aws_guardduty_organization_configuration}
*/
export class GuarddutyOrganizationConfiguration extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration.html aws_guardduty_organization_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GuarddutyOrganizationConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: GuarddutyOrganizationConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_guardduty_organization_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoEnable = config.autoEnable;
    this._detectorId = config.detectorId;
    this._datasources = config.datasources;
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

  // detector_id - computed: false, optional: false, required: true
  private _detectorId: string;
  public get detectorId() {
    return this.getStringAttribute('detector_id');
  }
  public set detectorId(value: string) {
    this._detectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorIdInput() {
    return this._detectorId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // datasources - computed: false, optional: true, required: false
  private _datasources?: GuarddutyOrganizationConfigurationDatasources[];
  public get datasources() {
    return this.interpolationForAttribute('datasources') as any;
  }
  public set datasources(value: GuarddutyOrganizationConfigurationDatasources[] ) {
    this._datasources = value;
  }
  public resetDatasources() {
    this._datasources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourcesInput() {
    return this._datasources
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_enable: cdktf.booleanToTerraform(this._autoEnable),
      detector_id: cdktf.stringToTerraform(this._detectorId),
      datasources: cdktf.listMapper(guarddutyOrganizationConfigurationDatasourcesToTerraform)(this._datasources),
    };
  }
}
