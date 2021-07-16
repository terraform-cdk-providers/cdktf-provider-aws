// https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudwatchEventTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#arn CloudwatchEventTarget#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#event_bus_name CloudwatchEventTarget#event_bus_name}
  */
  readonly eventBusName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#input CloudwatchEventTarget#input}
  */
  readonly input?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#input_path CloudwatchEventTarget#input_path}
  */
  readonly inputPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#role_arn CloudwatchEventTarget#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#rule CloudwatchEventTarget#rule}
  */
  readonly rule: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#target_id CloudwatchEventTarget#target_id}
  */
  readonly targetId?: string;
  /**
  * batch_target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#batch_target CloudwatchEventTarget#batch_target}
  */
  readonly batchTarget?: CloudwatchEventTargetBatchTarget[];
  /**
  * dead_letter_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#dead_letter_config CloudwatchEventTarget#dead_letter_config}
  */
  readonly deadLetterConfig?: CloudwatchEventTargetDeadLetterConfig[];
  /**
  * ecs_target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#ecs_target CloudwatchEventTarget#ecs_target}
  */
  readonly ecsTarget?: CloudwatchEventTargetEcsTarget[];
  /**
  * http_target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#http_target CloudwatchEventTarget#http_target}
  */
  readonly httpTarget?: CloudwatchEventTargetHttpTarget[];
  /**
  * input_transformer block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#input_transformer CloudwatchEventTarget#input_transformer}
  */
  readonly inputTransformer?: CloudwatchEventTargetInputTransformer[];
  /**
  * kinesis_target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#kinesis_target CloudwatchEventTarget#kinesis_target}
  */
  readonly kinesisTarget?: CloudwatchEventTargetKinesisTarget[];
  /**
  * retry_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#retry_policy CloudwatchEventTarget#retry_policy}
  */
  readonly retryPolicy?: CloudwatchEventTargetRetryPolicy[];
  /**
  * run_command_targets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#run_command_targets CloudwatchEventTarget#run_command_targets}
  */
  readonly runCommandTargets?: CloudwatchEventTargetRunCommandTargets[];
  /**
  * sqs_target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#sqs_target CloudwatchEventTarget#sqs_target}
  */
  readonly sqsTarget?: CloudwatchEventTargetSqsTarget[];
}
export interface CloudwatchEventTargetBatchTarget {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#array_size CloudwatchEventTarget#array_size}
  */
  readonly arraySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#job_attempts CloudwatchEventTarget#job_attempts}
  */
  readonly jobAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#job_definition CloudwatchEventTarget#job_definition}
  */
  readonly jobDefinition: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#job_name CloudwatchEventTarget#job_name}
  */
  readonly jobName: string;
}

function cloudwatchEventTargetBatchTargetToTerraform(struct?: CloudwatchEventTargetBatchTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    array_size: cdktf.numberToTerraform(struct!.arraySize),
    job_attempts: cdktf.numberToTerraform(struct!.jobAttempts),
    job_definition: cdktf.stringToTerraform(struct!.jobDefinition),
    job_name: cdktf.stringToTerraform(struct!.jobName),
  }
}

export interface CloudwatchEventTargetDeadLetterConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#arn CloudwatchEventTarget#arn}
  */
  readonly arn?: string;
}

function cloudwatchEventTargetDeadLetterConfigToTerraform(struct?: CloudwatchEventTargetDeadLetterConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}

export interface CloudwatchEventTargetEcsTargetNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#assign_public_ip CloudwatchEventTarget#assign_public_ip}
  */
  readonly assignPublicIp?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#security_groups CloudwatchEventTarget#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#subnets CloudwatchEventTarget#subnets}
  */
  readonly subnets: string[];
}

function cloudwatchEventTargetEcsTargetNetworkConfigurationToTerraform(struct?: CloudwatchEventTargetEcsTargetNetworkConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
    subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnets),
  }
}

export interface CloudwatchEventTargetEcsTargetPlacementConstraint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#expression CloudwatchEventTarget#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#type CloudwatchEventTarget#type}
  */
  readonly type: string;
}

function cloudwatchEventTargetEcsTargetPlacementConstraintToTerraform(struct?: CloudwatchEventTargetEcsTargetPlacementConstraint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface CloudwatchEventTargetEcsTarget {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#enable_ecs_managed_tags CloudwatchEventTarget#enable_ecs_managed_tags}
  */
  readonly enableEcsManagedTags?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#enable_execute_command CloudwatchEventTarget#enable_execute_command}
  */
  readonly enableExecuteCommand?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#group CloudwatchEventTarget#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#launch_type CloudwatchEventTarget#launch_type}
  */
  readonly launchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#platform_version CloudwatchEventTarget#platform_version}
  */
  readonly platformVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#propagate_tags CloudwatchEventTarget#propagate_tags}
  */
  readonly propagateTags?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#tags CloudwatchEventTarget#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#task_count CloudwatchEventTarget#task_count}
  */
  readonly taskCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#task_definition_arn CloudwatchEventTarget#task_definition_arn}
  */
  readonly taskDefinitionArn: string;
  /**
  * network_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#network_configuration CloudwatchEventTarget#network_configuration}
  */
  readonly networkConfiguration?: CloudwatchEventTargetEcsTargetNetworkConfiguration[];
  /**
  * placement_constraint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#placement_constraint CloudwatchEventTarget#placement_constraint}
  */
  readonly placementConstraint?: CloudwatchEventTargetEcsTargetPlacementConstraint[];
}

function cloudwatchEventTargetEcsTargetToTerraform(struct?: CloudwatchEventTargetEcsTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_ecs_managed_tags: cdktf.booleanToTerraform(struct!.enableEcsManagedTags),
    enable_execute_command: cdktf.booleanToTerraform(struct!.enableExecuteCommand),
    group: cdktf.stringToTerraform(struct!.group),
    launch_type: cdktf.stringToTerraform(struct!.launchType),
    platform_version: cdktf.stringToTerraform(struct!.platformVersion),
    propagate_tags: cdktf.stringToTerraform(struct!.propagateTags),
    tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
    task_count: cdktf.numberToTerraform(struct!.taskCount),
    task_definition_arn: cdktf.stringToTerraform(struct!.taskDefinitionArn),
    network_configuration: cdktf.listMapper(cloudwatchEventTargetEcsTargetNetworkConfigurationToTerraform)(struct!.networkConfiguration),
    placement_constraint: cdktf.listMapper(cloudwatchEventTargetEcsTargetPlacementConstraintToTerraform)(struct!.placementConstraint),
  }
}

export interface CloudwatchEventTargetHttpTarget {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#header_parameters CloudwatchEventTarget#header_parameters}
  */
  readonly headerParameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#path_parameter_values CloudwatchEventTarget#path_parameter_values}
  */
  readonly pathParameterValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#query_string_parameters CloudwatchEventTarget#query_string_parameters}
  */
  readonly queryStringParameters?: { [key: string]: string };
}

function cloudwatchEventTargetHttpTargetToTerraform(struct?: CloudwatchEventTargetHttpTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    header_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.headerParameters),
    path_parameter_values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.pathParameterValues),
    query_string_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.queryStringParameters),
  }
}

export interface CloudwatchEventTargetInputTransformer {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#input_paths CloudwatchEventTarget#input_paths}
  */
  readonly inputPaths?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#input_template CloudwatchEventTarget#input_template}
  */
  readonly inputTemplate: string;
}

function cloudwatchEventTargetInputTransformerToTerraform(struct?: CloudwatchEventTargetInputTransformer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    input_paths: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.inputPaths),
    input_template: cdktf.stringToTerraform(struct!.inputTemplate),
  }
}

export interface CloudwatchEventTargetKinesisTarget {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#partition_key_path CloudwatchEventTarget#partition_key_path}
  */
  readonly partitionKeyPath?: string;
}

function cloudwatchEventTargetKinesisTargetToTerraform(struct?: CloudwatchEventTargetKinesisTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    partition_key_path: cdktf.stringToTerraform(struct!.partitionKeyPath),
  }
}

export interface CloudwatchEventTargetRetryPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#maximum_event_age_in_seconds CloudwatchEventTarget#maximum_event_age_in_seconds}
  */
  readonly maximumEventAgeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#maximum_retry_attempts CloudwatchEventTarget#maximum_retry_attempts}
  */
  readonly maximumRetryAttempts?: number;
}

function cloudwatchEventTargetRetryPolicyToTerraform(struct?: CloudwatchEventTargetRetryPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    maximum_event_age_in_seconds: cdktf.numberToTerraform(struct!.maximumEventAgeInSeconds),
    maximum_retry_attempts: cdktf.numberToTerraform(struct!.maximumRetryAttempts),
  }
}

export interface CloudwatchEventTargetRunCommandTargets {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#key CloudwatchEventTarget#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#values CloudwatchEventTarget#values}
  */
  readonly values: string[];
}

function cloudwatchEventTargetRunCommandTargetsToTerraform(struct?: CloudwatchEventTargetRunCommandTargets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface CloudwatchEventTargetSqsTarget {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#message_group_id CloudwatchEventTarget#message_group_id}
  */
  readonly messageGroupId?: string;
}

function cloudwatchEventTargetSqsTargetToTerraform(struct?: CloudwatchEventTargetSqsTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    message_group_id: cdktf.stringToTerraform(struct!.messageGroupId),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html aws_cloudwatch_event_target}
*/
export class CloudwatchEventTarget extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html aws_cloudwatch_event_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchEventTargetConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwatchEventTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_event_target',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._arn = config.arn;
    this._eventBusName = config.eventBusName;
    this._input = config.input;
    this._inputPath = config.inputPath;
    this._roleArn = config.roleArn;
    this._rule = config.rule;
    this._targetId = config.targetId;
    this._batchTarget = config.batchTarget;
    this._deadLetterConfig = config.deadLetterConfig;
    this._ecsTarget = config.ecsTarget;
    this._httpTarget = config.httpTarget;
    this._inputTransformer = config.inputTransformer;
    this._kinesisTarget = config.kinesisTarget;
    this._retryPolicy = config.retryPolicy;
    this._runCommandTargets = config.runCommandTargets;
    this._sqsTarget = config.sqsTarget;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: false, optional: false, required: true
  private _arn: string;
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn
  }

  // event_bus_name - computed: false, optional: true, required: false
  private _eventBusName?: string;
  public get eventBusName() {
    return this.getStringAttribute('event_bus_name');
  }
  public set eventBusName(value: string ) {
    this._eventBusName = value;
  }
  public resetEventBusName() {
    this._eventBusName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBusNameInput() {
    return this._eventBusName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // input - computed: false, optional: true, required: false
  private _input?: string;
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string ) {
    this._input = value;
  }
  public resetInput() {
    this._input = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input
  }

  // input_path - computed: false, optional: true, required: false
  private _inputPath?: string;
  public get inputPath() {
    return this.getStringAttribute('input_path');
  }
  public set inputPath(value: string ) {
    this._inputPath = value;
  }
  public resetInputPath() {
    this._inputPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputPathInput() {
    return this._inputPath
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string ) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // rule - computed: false, optional: false, required: true
  private _rule: string;
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule
  }

  // target_id - computed: true, optional: true, required: false
  private _targetId?: string;
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  public resetTargetId() {
    this._targetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId
  }

  // batch_target - computed: false, optional: true, required: false
  private _batchTarget?: CloudwatchEventTargetBatchTarget[];
  public get batchTarget() {
    return this.interpolationForAttribute('batch_target') as any;
  }
  public set batchTarget(value: CloudwatchEventTargetBatchTarget[] ) {
    this._batchTarget = value;
  }
  public resetBatchTarget() {
    this._batchTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchTargetInput() {
    return this._batchTarget
  }

  // dead_letter_config - computed: false, optional: true, required: false
  private _deadLetterConfig?: CloudwatchEventTargetDeadLetterConfig[];
  public get deadLetterConfig() {
    return this.interpolationForAttribute('dead_letter_config') as any;
  }
  public set deadLetterConfig(value: CloudwatchEventTargetDeadLetterConfig[] ) {
    this._deadLetterConfig = value;
  }
  public resetDeadLetterConfig() {
    this._deadLetterConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterConfigInput() {
    return this._deadLetterConfig
  }

  // ecs_target - computed: false, optional: true, required: false
  private _ecsTarget?: CloudwatchEventTargetEcsTarget[];
  public get ecsTarget() {
    return this.interpolationForAttribute('ecs_target') as any;
  }
  public set ecsTarget(value: CloudwatchEventTargetEcsTarget[] ) {
    this._ecsTarget = value;
  }
  public resetEcsTarget() {
    this._ecsTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsTargetInput() {
    return this._ecsTarget
  }

  // http_target - computed: false, optional: true, required: false
  private _httpTarget?: CloudwatchEventTargetHttpTarget[];
  public get httpTarget() {
    return this.interpolationForAttribute('http_target') as any;
  }
  public set httpTarget(value: CloudwatchEventTargetHttpTarget[] ) {
    this._httpTarget = value;
  }
  public resetHttpTarget() {
    this._httpTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTargetInput() {
    return this._httpTarget
  }

  // input_transformer - computed: false, optional: true, required: false
  private _inputTransformer?: CloudwatchEventTargetInputTransformer[];
  public get inputTransformer() {
    return this.interpolationForAttribute('input_transformer') as any;
  }
  public set inputTransformer(value: CloudwatchEventTargetInputTransformer[] ) {
    this._inputTransformer = value;
  }
  public resetInputTransformer() {
    this._inputTransformer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputTransformerInput() {
    return this._inputTransformer
  }

  // kinesis_target - computed: false, optional: true, required: false
  private _kinesisTarget?: CloudwatchEventTargetKinesisTarget[];
  public get kinesisTarget() {
    return this.interpolationForAttribute('kinesis_target') as any;
  }
  public set kinesisTarget(value: CloudwatchEventTargetKinesisTarget[] ) {
    this._kinesisTarget = value;
  }
  public resetKinesisTarget() {
    this._kinesisTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisTargetInput() {
    return this._kinesisTarget
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy?: CloudwatchEventTargetRetryPolicy[];
  public get retryPolicy() {
    return this.interpolationForAttribute('retry_policy') as any;
  }
  public set retryPolicy(value: CloudwatchEventTargetRetryPolicy[] ) {
    this._retryPolicy = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy
  }

  // run_command_targets - computed: false, optional: true, required: false
  private _runCommandTargets?: CloudwatchEventTargetRunCommandTargets[];
  public get runCommandTargets() {
    return this.interpolationForAttribute('run_command_targets') as any;
  }
  public set runCommandTargets(value: CloudwatchEventTargetRunCommandTargets[] ) {
    this._runCommandTargets = value;
  }
  public resetRunCommandTargets() {
    this._runCommandTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runCommandTargetsInput() {
    return this._runCommandTargets
  }

  // sqs_target - computed: false, optional: true, required: false
  private _sqsTarget?: CloudwatchEventTargetSqsTarget[];
  public get sqsTarget() {
    return this.interpolationForAttribute('sqs_target') as any;
  }
  public set sqsTarget(value: CloudwatchEventTargetSqsTarget[] ) {
    this._sqsTarget = value;
  }
  public resetSqsTarget() {
    this._sqsTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsTargetInput() {
    return this._sqsTarget
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: cdktf.stringToTerraform(this._arn),
      event_bus_name: cdktf.stringToTerraform(this._eventBusName),
      input: cdktf.stringToTerraform(this._input),
      input_path: cdktf.stringToTerraform(this._inputPath),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      rule: cdktf.stringToTerraform(this._rule),
      target_id: cdktf.stringToTerraform(this._targetId),
      batch_target: cdktf.listMapper(cloudwatchEventTargetBatchTargetToTerraform)(this._batchTarget),
      dead_letter_config: cdktf.listMapper(cloudwatchEventTargetDeadLetterConfigToTerraform)(this._deadLetterConfig),
      ecs_target: cdktf.listMapper(cloudwatchEventTargetEcsTargetToTerraform)(this._ecsTarget),
      http_target: cdktf.listMapper(cloudwatchEventTargetHttpTargetToTerraform)(this._httpTarget),
      input_transformer: cdktf.listMapper(cloudwatchEventTargetInputTransformerToTerraform)(this._inputTransformer),
      kinesis_target: cdktf.listMapper(cloudwatchEventTargetKinesisTargetToTerraform)(this._kinesisTarget),
      retry_policy: cdktf.listMapper(cloudwatchEventTargetRetryPolicyToTerraform)(this._retryPolicy),
      run_command_targets: cdktf.listMapper(cloudwatchEventTargetRunCommandTargetsToTerraform)(this._runCommandTargets),
      sqs_target: cdktf.listMapper(cloudwatchEventTargetSqsTargetToTerraform)(this._sqsTarget),
    };
  }
}
