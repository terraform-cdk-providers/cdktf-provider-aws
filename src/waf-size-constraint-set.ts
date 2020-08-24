// https://www.terraform.io/docs/providers/aws/r/waf_size_constraint_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface WafSizeConstraintSetConfig extends TerraformMetaArguments {
  readonly name: string;
  /** size_constraints block */
  readonly sizeConstraints?: WafSizeConstraintSetSizeConstraints[];
}
export interface WafSizeConstraintSetSizeConstraintsFieldToMatch {
  readonly data?: string;
  readonly type: string;
}
export interface WafSizeConstraintSetSizeConstraints {
  readonly comparisonOperator: string;
  readonly size: number;
  readonly textTransformation: string;
  /** field_to_match block */
  readonly fieldToMatch: WafSizeConstraintSetSizeConstraintsFieldToMatch[];
}

// Resource

export class WafSizeConstraintSet extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WafSizeConstraintSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_waf_size_constraint_set',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._sizeConstraints = config.sizeConstraints;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
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

  // size_constraints - computed: false, optional: true, required: false
  private _sizeConstraints?: WafSizeConstraintSetSizeConstraints[];
  public get sizeConstraints() {
    return this._sizeConstraints;
  }
  public set sizeConstraints(value: WafSizeConstraintSetSizeConstraints[] | undefined) {
    this._sizeConstraints = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      size_constraints: this._sizeConstraints,
    };
  }
}
