// https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GuarddutyDetectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html#enable GuarddutyDetector#enable}
  */
  readonly enable?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html#finding_publishing_frequency GuarddutyDetector#finding_publishing_frequency}
  */
  readonly findingPublishingFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html#tags GuarddutyDetector#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html#tags_all GuarddutyDetector#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * datasources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html#datasources GuarddutyDetector#datasources}
  */
  readonly datasources?: GuarddutyDetectorDatasources[];
}
export interface GuarddutyDetectorDatasourcesS3Logs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html#enable GuarddutyDetector#enable}
  */
  readonly enable: boolean;
}

function guarddutyDetectorDatasourcesS3LogsToTerraform(struct?: GuarddutyDetectorDatasourcesS3Logs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}

export interface GuarddutyDetectorDatasources {
  /**
  * s3_logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html#s3_logs GuarddutyDetector#s3_logs}
  */
  readonly s3Logs?: GuarddutyDetectorDatasourcesS3Logs[];
}

function guarddutyDetectorDatasourcesToTerraform(struct?: GuarddutyDetectorDatasources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    s3_logs: cdktf.listMapper(guarddutyDetectorDatasourcesS3LogsToTerraform)(struct!.s3Logs),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html aws_guardduty_detector}
*/
export class GuarddutyDetector extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector.html aws_guardduty_detector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GuarddutyDetectorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GuarddutyDetectorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_guardduty_detector',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enable = config.enable;
    this._findingPublishingFrequency = config.findingPublishingFrequency;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._datasources = config.datasources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean;
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean ) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable
  }

  // finding_publishing_frequency - computed: true, optional: true, required: false
  private _findingPublishingFrequency?: string;
  public get findingPublishingFrequency() {
    return this.getStringAttribute('finding_publishing_frequency');
  }
  public set findingPublishingFrequency(value: string) {
    this._findingPublishingFrequency = value;
  }
  public resetFindingPublishingFrequency() {
    this._findingPublishingFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findingPublishingFrequencyInput() {
    return this._findingPublishingFrequency
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // datasources - computed: false, optional: true, required: false
  private _datasources?: GuarddutyDetectorDatasources[];
  public get datasources() {
    return this.interpolationForAttribute('datasources') as any;
  }
  public set datasources(value: GuarddutyDetectorDatasources[] ) {
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
      enable: cdktf.booleanToTerraform(this._enable),
      finding_publishing_frequency: cdktf.stringToTerraform(this._findingPublishingFrequency),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      datasources: cdktf.listMapper(guarddutyDetectorDatasourcesToTerraform)(this._datasources),
    };
  }
}
