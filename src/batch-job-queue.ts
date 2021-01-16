// https://www.terraform.io/docs/providers/aws/r/batch_job_queue.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BatchJobQueueConfig extends TerraformMetaArguments {
  readonly computeEnvironments: string[];
  readonly name: string;
  readonly priority: number;
  readonly state: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class BatchJobQueue extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BatchJobQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_batch_job_queue',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._computeEnvironments = config.computeEnvironments;
    this._name = config.name;
    this._priority = config.priority;
    this._state = config.state;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // compute_environments - computed: false, optional: false, required: true
  private _computeEnvironments: string[];
  public get computeEnvironments() {
    return this._computeEnvironments;
  }
  public set computeEnvironments(value: string[]) {
    this._computeEnvironments = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // priority - computed: false, optional: false, required: true
  private _priority: number;
  public get priority() {
    return this._priority;
  }
  public set priority(value: number) {
    this._priority = value;
  }

  // state - computed: false, optional: false, required: true
  private _state: string;
  public get state() {
    return this._state;
  }
  public set state(value: string) {
    this._state = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compute_environments: this._computeEnvironments,
      name: this._name,
      priority: this._priority,
      state: this._state,
      tags: this._tags,
    };
  }
}
