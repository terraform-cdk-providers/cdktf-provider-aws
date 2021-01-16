// https://www.terraform.io/docs/providers/aws/r/data_aws_autoscaling_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsAutoscalingGroupConfig extends TerraformMetaArguments {
  readonly name: string;
}
export class DataAwsAutoscalingGroupLaunchTemplate extends ComplexComputedList {

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }
}

// Resource

export class DataAwsAutoscalingGroup extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsAutoscalingGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_autoscaling_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zones - computed: true, optional: false, required: true
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // default_cooldown - computed: true, optional: false, required: true
  public get defaultCooldown() {
    return this.getNumberAttribute('default_cooldown');
  }

  // desired_capacity - computed: true, optional: false, required: true
  public get desiredCapacity() {
    return this.getNumberAttribute('desired_capacity');
  }

  // health_check_grace_period - computed: true, optional: false, required: true
  public get healthCheckGracePeriod() {
    return this.getNumberAttribute('health_check_grace_period');
  }

  // health_check_type - computed: true, optional: false, required: true
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // launch_configuration - computed: true, optional: false, required: true
  public get launchConfiguration() {
    return this.getStringAttribute('launch_configuration');
  }

  // launch_template - computed: true, optional: false, required: true
  public launchTemplate(index: string) {
    return new DataAwsAutoscalingGroupLaunchTemplate(this, 'launch_template', index);
  }

  // load_balancers - computed: true, optional: false, required: true
  public get loadBalancers() {
    return this.getListAttribute('load_balancers');
  }

  // max_size - computed: true, optional: false, required: true
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }

  // min_size - computed: true, optional: false, required: true
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // new_instances_protected_from_scale_in - computed: true, optional: false, required: true
  public get newInstancesProtectedFromScaleIn() {
    return this.getBooleanAttribute('new_instances_protected_from_scale_in');
  }

  // placement_group - computed: true, optional: false, required: true
  public get placementGroup() {
    return this.getStringAttribute('placement_group');
  }

  // service_linked_role_arn - computed: true, optional: false, required: true
  public get serviceLinkedRoleArn() {
    return this.getStringAttribute('service_linked_role_arn');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // target_group_arns - computed: true, optional: false, required: true
  public get targetGroupArns() {
    return this.getListAttribute('target_group_arns');
  }

  // termination_policies - computed: true, optional: false, required: true
  public get terminationPolicies() {
    return this.getListAttribute('termination_policies');
  }

  // vpc_zone_identifier - computed: true, optional: false, required: true
  public get vpcZoneIdentifier() {
    return this.getStringAttribute('vpc_zone_identifier');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
    };
  }
}
