// https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppconfigDeploymentStrategyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html#deployment_duration_in_minutes AppconfigDeploymentStrategy#deployment_duration_in_minutes}
  */
  readonly deploymentDurationInMinutes: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html#description AppconfigDeploymentStrategy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html#final_bake_time_in_minutes AppconfigDeploymentStrategy#final_bake_time_in_minutes}
  */
  readonly finalBakeTimeInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html#growth_factor AppconfigDeploymentStrategy#growth_factor}
  */
  readonly growthFactor: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html#growth_type AppconfigDeploymentStrategy#growth_type}
  */
  readonly growthType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html#name AppconfigDeploymentStrategy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html#replicate_to AppconfigDeploymentStrategy#replicate_to}
  */
  readonly replicateTo: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html#tags AppconfigDeploymentStrategy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html#tags_all AppconfigDeploymentStrategy#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html aws_appconfig_deployment_strategy}
*/
export class AppconfigDeploymentStrategy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appconfig_deployment_strategy.html aws_appconfig_deployment_strategy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppconfigDeploymentStrategyConfig
  */
  public constructor(scope: Construct, id: string, config: AppconfigDeploymentStrategyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appconfig_deployment_strategy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deploymentDurationInMinutes = config.deploymentDurationInMinutes;
    this._description = config.description;
    this._finalBakeTimeInMinutes = config.finalBakeTimeInMinutes;
    this._growthFactor = config.growthFactor;
    this._growthType = config.growthType;
    this._name = config.name;
    this._replicateTo = config.replicateTo;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // deployment_duration_in_minutes - computed: false, optional: false, required: true
  private _deploymentDurationInMinutes: number;
  public get deploymentDurationInMinutes() {
    return this.getNumberAttribute('deployment_duration_in_minutes');
  }
  public set deploymentDurationInMinutes(value: number) {
    this._deploymentDurationInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentDurationInMinutesInput() {
    return this._deploymentDurationInMinutes
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

  // final_bake_time_in_minutes - computed: false, optional: true, required: false
  private _finalBakeTimeInMinutes?: number;
  public get finalBakeTimeInMinutes() {
    return this.getNumberAttribute('final_bake_time_in_minutes');
  }
  public set finalBakeTimeInMinutes(value: number ) {
    this._finalBakeTimeInMinutes = value;
  }
  public resetFinalBakeTimeInMinutes() {
    this._finalBakeTimeInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalBakeTimeInMinutesInput() {
    return this._finalBakeTimeInMinutes
  }

  // growth_factor - computed: false, optional: false, required: true
  private _growthFactor: number;
  public get growthFactor() {
    return this.getNumberAttribute('growth_factor');
  }
  public set growthFactor(value: number) {
    this._growthFactor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get growthFactorInput() {
    return this._growthFactor
  }

  // growth_type - computed: false, optional: true, required: false
  private _growthType?: string;
  public get growthType() {
    return this.getStringAttribute('growth_type');
  }
  public set growthType(value: string ) {
    this._growthType = value;
  }
  public resetGrowthType() {
    this._growthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get growthTypeInput() {
    return this._growthType
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // replicate_to - computed: false, optional: false, required: true
  private _replicateTo: string;
  public get replicateTo() {
    return this.getStringAttribute('replicate_to');
  }
  public set replicateTo(value: string) {
    this._replicateTo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicateToInput() {
    return this._replicateTo
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deployment_duration_in_minutes: cdktf.numberToTerraform(this._deploymentDurationInMinutes),
      description: cdktf.stringToTerraform(this._description),
      final_bake_time_in_minutes: cdktf.numberToTerraform(this._finalBakeTimeInMinutes),
      growth_factor: cdktf.numberToTerraform(this._growthFactor),
      growth_type: cdktf.stringToTerraform(this._growthType),
      name: cdktf.stringToTerraform(this._name),
      replicate_to: cdktf.stringToTerraform(this._replicateTo),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
    };
  }
}
